'use client'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'
import Image from 'next/image'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const options: Option[] = [
    { country: 'Português', code: 'pt' }, // Native name is the same
    { country: 'English', code: 'en' }, // Native name is the same
    { country: 'Español', code: 'es' },
  ]

  return (
    <div className='flex items-center justify-center'>
      <div className='flex' >
        <Link href={`/${"pt"}/${urlSegments.join('/')}`} > 
          <Image src="/Bra.png"   width={25} height={25} />
        </Link>
        <Link href={`/${"en"}/${urlSegments.join('/')}`} > 
          <Image src="/Eua.png"   width={25} height={25} />
        </Link>
        <Link href={`/${"es"}/${urlSegments.join('/')}`} > 
          <Image src="/espanhol.png"   width={25} height={25} />
        </Link>
         

        {/* <Button
          className='text-destructive inline-flex w-full items-center justify-between gap-3'
          size='small'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          Idioma
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='absolute right-0 mt-2 w-full origin-top-right rounded-md bg-dropdown shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              <Image 
                src="/Bra.png" 
                key="pt" 
                Link={`/${"pt"}/${urlSegments.join('/')}`} 
                width={25}
                height={25}
              />

              {options.map(lang => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                        pathname === `/${lang.code}`
                          ? 'bg-selected text-primary hover:bg-selected'
                          : 'text-secondary'
                      }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
                )
              })} 
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default LangSwitcher
