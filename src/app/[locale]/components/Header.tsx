'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-28 w-28'>
            <LogoIcon />
          </div>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>{t('Menu_About')}</Link>
          <Link lang={locale} href={`/business`}>{t('Menu_Business')}</Link>
          {/* <Link lang={locale} href={`/customers`}>{t('Menu_Customers')}</Link> */}
          <Link lang={locale} href={`/social`}>{t('Menu_Social')}</Link>
          <Link lang={locale} href={`/contact`}>{t('Menu_Contact')}</Link>
        </nav>

        <LangSwitcher />
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            
          </div>
        </a>
      </div>
    </div>
  )
}
