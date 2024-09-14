'use client';

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { HiMail, HiInformationCircle, HiPhone } from "react-icons/hi";
import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';


const resend = new Resend("re_7VXp2udh_EVdfbrXqSewLMbb9e2jMY5fu");

//resend.apiKeys.create({ name: 'Production' })
//resend.apiKeys.

export default function About() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    forma_contato:'',
    assunto:'',
    descricao:'',
  });

  const handleChange = (param) => 
  {
    console.log(param);
  };

  const handleClick = async (param) => 
  {
    console.log('handleClick');
    const { data, error } = await resend.emails.send({
      from: 'manager.cadu777@gmail.com',
      to: ['du.felipe.br@gmail.com'],
      subject: 'Hello world',
      html: '<p>it works!</p>',
      //react: EmailTemplate({ firstName: 'John' }),
    });
  
    console.log('error');
    
    if (error) {
      console.log("error");
      console.log(error);
    }
    else
    {
      console.log("data");
      console.log(data);
    }
  
    //res.status(200).json(data);


  };


  



  const t = useTranslations('')
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className='text-base font-semibold leading-7 text-indigo-600'>{t('Contact_Header')}</p>
        <p className='mt-5'>{t('Contact_Content')}</p>
        <div className='mt-5 py-5'>
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('Contact_Form_Header')}</div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Dictionary_Name')}:</p>
              <p>
              <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={handleChange}
                  className={"block w-full text-blue-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}
                />


              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Dictionary_Email')}:</p>
              <p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  maxLength="50"
                  autoComplete="email"
                  rightIcon={HiMail} 
                  className={"block w-full text-blue-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}
                />
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Dictionary_Phone')}:</p>
              <p>
                <input
                  type="phone"
                  name="telefone"
                  id="telefone"
                  required
                  maxLength="50"
                  autoComplete="telefone"
                  rightIcon={HiPhone} 
                  className={"block w-full text-blue-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}
                />
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Dictionary_ContactType')}:</p>
              <p>
               <select  className={"block  w-full text-blue-800 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}>
                  <option>{t('Dictionary_Phone')}</option>
                  <option>{t('Dictionary_Email')}</option>
                  <option>{t('Dictionary_Zap')}</option>
               </select>
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Dictionary_Subject')}:</p>
              <p>
                  <select  className={"block  w-full text-blue-800 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}>
                    <option>{t('Dictionary_ProjectHiring')}</option>                    
                    <option>{t('Dictionary_Products')}</option>                    
                    <option>{t('Dictionary_Support')}</option>
                    <option>{t('Dictionary_Finance')}</option>
                    <option>{t('Dictionary_SocialCause')}</option>
                    <option>{t('Dictionary_Others')}</option>
                </select>
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Form_Description')}:</p>
              <p>
              <textarea
                name="postContent"
                defaultValue=""
                rows={4}
                cols={40}
                className={"block w-full text-blue-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}
              />
              </p>
          </div>
          <div className='py-5 w-40'>
          <button
            type="submit"
            onClick={handleClick}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('Contact_Form_Send')}
          </button>

          </div>
        </div>
        <div className='mt-5 py-5'>
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >{t('Contact_Our_data')}</div>
          <div className="mt-10 text-base font-semibold leading-7 text-indigo-600">{t('Contact_Office_1')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Bussiness_Name')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">Global Virtual Lab Soluções Digitais - S.A </div>
          <div className="py-1 text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Billing_Address')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">Rua George Smith, 357 - a185, São Paulo - SP - Brasil, 05074-010.</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Billing_Comercial')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">Rua George Smith, 357 - a185, São Paulo - SP - Brasil, 05074-010.</div>
          {/* <div className="text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Billing_Phone')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">(11)94711.9414</div> */}
          <div className="text-lg leading-8 text-gray-600 font-bold ">{t('Contact_Company_Number')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 "> [no references]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">{t('Contact_State_Number')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 "> [no references]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">{t('Contact_City_Number')}</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[no references]</div>
        </div>
      </div>
    </div>
  )
}
