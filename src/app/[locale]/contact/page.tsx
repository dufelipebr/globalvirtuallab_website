'use client';

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { HiMail, HiInformationCircle, HiPhone } from "react-icons/hi";
import { FaBeer } from "react-icons/fa";
import { send_mail } from './sendmail';
import { Datepicker, Modal, Button, TextInput, Alert } from "flowbite-react";

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
  const t = useTranslations('')
  return (
    <div className='overflow-hidden bg-white py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className='text-base font-semibold leading-7 text-indigo-600'>{t('Contact_Header')}</p>
        <p className='mt-5'>{t('Contact_Content')}</p>
        <div className='mt-5 py-5'>
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Formulário de Contato</div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">Nome:</p>
              <p>
              <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className={"block w-full text-blue-800 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}
                />


              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">E-mail:</p>
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
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">Telefone:</p>
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
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">Forma de Contato:</p>
              <p>
               <select  className={"block  w-full text-blue-800 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}>
                  <option>Telefone</option>
                  <option>E-Mail</option>
                  <option>Whatsapp</option>
               </select>
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">Assunto:</p>
              <p>
                  <select  className={"block  w-full text-blue-800 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 bg-slate-300"}>
                    <option>Contratação de projetos</option>                    
                    <option>Produtos</option>                    
                    <option>Suporte</option>
                    <option>Financeiro</option>
                    <option>Causas sociais</option>
                    <option>Outros</option>
                </select>
              </p>
          </div>
          <div>
              <p className="py-1 text-lg leading-8 text-gray-600 font-bold ">Comentário:</p>
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
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>

          </div>
        </div>
        <div className='mt-5 py-5'>
          <div className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >Nossos dados</div>
          <div className="mt-10 text-base font-semibold leading-7 text-indigo-600">Brazil (main office)</div>
          <div className="py-1 text-lg leading-8 text-gray-600 font-bold "> Nome - Razão Social</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Nome da Empresa]</div>
          <div className="py-1 text-lg leading-8 text-gray-600 font-bold ">Endereço Contábil</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Endereço Contábil]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">Endereço Comercial</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Endereço Comercial]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">Telefone</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Telefone da Empresa]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">CNPJ</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Nome da Empresa]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">Inscrição Estadual</div>
          <div className="py-1 text-lg leading-8 text-gray-600 "> [Id Estadual]</div>
          <div className="text-lg leading-8 text-gray-600 font-bold ">Inscrição Municipal</div>
          <div className="py-1 text-lg leading-8 text-gray-600 ">[Id Municipal]</div>
        </div>
      </div>
    </div>
  )
}
