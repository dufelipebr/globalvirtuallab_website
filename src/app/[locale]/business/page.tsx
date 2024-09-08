import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">{t('Business_Header')}</h2>
      <p className="mt-6 mb-5 text-wrap text-2xl leading-8 text-gray-600">{t('Business_Header_Content')}</p>
      
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_1')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_1_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/premium-vector/devops-software-development-methodology-dev-ops-software-vector-stock-illustration_100456-11644.jpg"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
      </div>

      <br></br>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/free-photo/financial-report-with-co-workers-blurred-background_1098-497.jpg?size=626&ext=jpg"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_2')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_2_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl> 
          </div>
        </div> 
      </div>
      <br></br>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_3')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_3_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/premium-photo/chat-with-ai-artificial-intelligence-technology-man-using-laptop-computer-chatting-with-intelligent-artificial-intelligence-asks-answers-he-wants-smart-assistant-futuristic-chat-ai_708636-1956.jpg?ga=GA1.1.113472430.1725679216&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
      </div>

      <div className="mt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/premium-vector/ui-wireframe-modern-flat-illustration-ui-design-concept-web-development_1278800-10653.jpg?ga=GA1.1.113472430.1725679216&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_4')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_4_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl> 
          </div>
        </div> 
      </div>

      <br></br>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_5')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_5_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?ga=GA1.1.113472430.1725679216&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
      </div>

     
      <br></br>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/premium-photo/business-analytics-data-management-system-providing-key-insights-corporate-strategy_1297251-10142.jpg?ga=GA1.1.113472430.1725679216&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_6')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_6_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl> 
          </div>
        </div> 
      </div>
      <br></br>
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Business_h1_7')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Business_h1_7_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl>
          </div>
        </div>
        <img
          alt="Product screenshot"
          src="https://img.freepik.com/premium-photo/businessman-suit-checking-cyber-security-using-smart-phone-protect-clients-confidential-information-it-hologram-lock-icons-modern-panoramic-office-background_269648-4311.jpg?ga=GA1.1.113472430.1725679216&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>
  )
}
