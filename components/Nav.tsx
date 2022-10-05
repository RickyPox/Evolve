import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Disclosure, Switch} from '@headlessui/react'
import { MenuIcon, XIcon} from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '#'},
  { name: 'Who We Are What We Do', href: '#' },
  { name: 'Our Services', href: '#'},
  { name: 'Contacts', href: '#'},
]

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Nav(){
  const [enabled, setEnabled] = useState(false)
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
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
          
                <div className="hidden lg:block lg:ml-6">
                  <div className="lg:grid grid-cols-1 gap-5 space-y-[20px] text-center w-[150px] justify-items-center items-center fixed mx-[50px] mt-[250px] z-40">
                    {navigation.map((item) => (
                      <a className="text-[16px] uppercase font-[NeueMachina-Regular]"
                        key={item.name}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark':'light')}>
                      <Switch
                            
                            checked={enabled}
                            onChange={() => setEnabled(enabled === true ? false:true)}
                            className={`transform transition ease-in-out duration-200
                            ${
                              theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                          >

                            {/* Circle Inside */}
                            <span
                              className={`transform transition ease-in-out duration-200
                              ${
                                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                              } inline-block h-4 w-4 transform rounded-full`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sun dark:hidden block" viewBox="0 0 20 20" fill="black">
                                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 moon dark:block hidden" viewBox="0 0 20 20" fill="white">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                              </svg>
                            </span>

                        </Switch>

                      </div>
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
                        ' block  py-2 rounded-md uppercase font-[NeueMachina-Regular] text-[16px]'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                  <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark':'light')}>
                      <Switch
                            
                            checked={enabled}
                            onChange={() => setEnabled(enabled === true ? false:true)}
                            className={`transform transition ease-in-out duration-200
                            ${
                              theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                          >

                            {/* Circle Inside */}
                            <span
                              className={`transform transition ease-in-out duration-200
                              ${
                                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                              } inline-block h-4 w-4 transform rounded-full`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sun dark:hidden block" viewBox="0 0 20 20" fill="black">
                                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 moon dark:block hidden" viewBox="0 0 20 20" fill="white">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                              </svg>
                            </span>

                        </Switch>

                      </div>
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
} 