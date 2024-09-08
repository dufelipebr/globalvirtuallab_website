import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">{t('Social_Header')}</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
         
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Social_h1_1')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Social_h1_1_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl>
          </div>
        </div>
        <img
          alt="Training capaciting"
          src="https://img.freepik.com/premium-photo/quotengaging-seminar-with-diverse-group-young-peoplequot_1168612-428569.jpg?uid=R87666539&ga=GA1.1.1157690099.1723035883&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] md:-ml-4 lg:-ml-0"
        />
      </div>

      <br></br>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        
        <img
          alt="Social rights"
          src="https://img.freepik.com/premium-photo/quotdiverse-group-holding-hands-unity-white-backgroundquot_1279815-79001.jpg?uid=R87666539&ga=GA1.1.1157690099.1723035883&semt=ais_hybrid"
          width={100}
          height={100}
          className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[24rem] md:-ml-4 lg:-ml-0"
        />
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Social_h1_2')}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('Social_h1_2_Content')}
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
           
            </dl> 
          </div>
        </div> 
      </div>
      
    </div>
  </div>
  )
}
