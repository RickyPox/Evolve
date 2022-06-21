import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const navigation = [
  { name: 'Home', href: '#'},
  { name: 'Who We Are What We Do', href: '#' },
  { name: 'Our Services', href: '#'},
  { name: 'Team Previous Projects', href: '#'},
  { name: 'Contacts', href: '#'},
]

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Nav(){
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} =useTheme()
  useEffect(() => setMounted(true), [])
  if(!mounted) return null

  
    return(
<Disclosure as="nav">
      {({ open }) => (
        <>
            <div className="relative h-[120px]">
            <img src={theme === 'dark' ? "/LogoLight.svg" : "/LogoDark.svg" } className="absolute left-[40px] top-[75px] lg:w-[230px] w-[100px] "></img>
              <div className="absolute top-[65px] right-[10px] lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
          
                <div className="hidden lg:block lg:ml-6">
                  <div className="lg:grid grid-cols-1 gap-5 space-y-[20px] text-center w-[150px] items-center fixed mx-[50px] mt-[250px] z-40">
            {navigation.map((item) => (
              <a className="text-[16px] uppercase font-[NeueMachina-Regular]"
                key={item.name}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <button onClick={() => setTheme(theme === 'light' ? 'dark':'light')}>
                Current mode is {theme === 'dark' ? 'dark':'light'}
              </button>
                  </div>
                </div>
            </div>

          <Disclosure.Panel className="lg:hidden z-40 relative">
            <div className="px-[40px] pt-2 pb-3 space-y-1 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                         'text-black block  py-2 rounded-md uppercase font-[NeueMachina-Regular] text-[16px]'
                  )}

                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
} 