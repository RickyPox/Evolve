import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
        <div>
          <img src={theme === 'dark' ? "/LogoLight.svg" : "/LogoDark.svg" } className="absolute left-[40px] top-[75px]"></img>
          {/* DESKTOP VERSION */}
          <nav className="grid grid-cols-1 gap-5 space-y-[20px] text-center w-[150px] items-center fixed mx-[100px] mt-[355px] z-20">

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
    </nav>
          

        </div>
    )
} 