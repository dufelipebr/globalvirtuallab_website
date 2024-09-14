


# FROM node
# Specify a base image
#FROM node:20-alpine AS base
#FROM node:lts-alpine
FROM node:20 AS base
#FROM node:16.3.0-alpine3.13 AS build
# FROM node:20-slim AS base

# ENV HTTP_PROXY="http://gate-zrh.swissre.com:8080"
# ENV http_proxy="http://gate-zrh.swissre.com:8080"
# ENV HTTPS_PROXY="http://gate-zrh.swissre.com:8080"
# ENV https_proxy="http://gate-zrh.swissre.com:8080"
# ENV no_proxy="localhost,127.0.0.1,.swissre.com,.sccloud.swissre.com,.corp.gwpnet.com,.swissreapps.com,.swissreapps-np.com,.swissreapps-ee.com"
# ENV NO_PROXY="localhost,127.0.0.1,.swissre.com,.sccloud.swissre.com,.corp.gwpnet.com,.swissreapps.com,.swissreapps-np.com,.swissreapps-ee.com"



# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm set registry https://registry.npmjs.org/ 
RUN node -v
RUN npm ci
#RUN npm install 



# # Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install react@latest react-dom@latest next@latest
RUN npm run build; 

# # Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# ENV NODE_ENV=production
# # Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# # server.js is created by next build from the standalone output
# # https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]