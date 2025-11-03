'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { useScroll } from 'motion/react'
import { FaProductHunt } from "react-icons/fa6";
import SearchCommand from './ui/search-command'
import SearchShortcut from './ui/search-command'

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'About', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe();
    }, [scrollYProgress])

    return (
       <header>
          <nav
            className={cn(
              "fixed z-20 w-full border-b border-neutral-800 transition-all duration-150",
              scrolled ? "bg-black/20 backdrop-blur-2xl" : "backdrop-blur-2xl"
            )}
          >
            <div className="mx-auto max-w-6xl px-6 border-x border-neutral-800">
              <div className="relative flex flex-wrap items-center justify-between py-3 lg:py-4">
                {/* LEFT */}
                <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
                  <div className="pr-8 border-r border-neutral-800">
                    <Link
                      href="/"
                      aria-label="Backternity Home"
                      className="flex items-center space-x-2 text-neutral-100 hover:text-emerald-400 transition-colors"
                    >
                      <h1 className="text-lg font-semibold">Backternity</h1>
                    </Link>
                  </div>

                  <ul className="hidden lg:flex gap-8 text-sm font-medium">
                    <li><Link href="#features" className="text-emerald-400 hover:text-emerald-300">Features</Link></li>
                    <li><Link href="#solutions" className="text-emerald-400 hover:text-emerald-300">Solutions</Link></li>
                    <li><Link href="#about" className="text-emerald-400 hover:text-emerald-300">About</Link></li>
                  </ul>
                </div>

                {/* RIGHT */}
                <div className="hidden lg:flex items-center gap-4">
                  <SearchShortcut />
                </div>
              </div>
            </div>
          </nav>
        </header>
    );
}

