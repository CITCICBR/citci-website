"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { CommandBar } from "./command-bar"
import search from "../app/search/data.json"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "History", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission" },
      { name: "Administration", href: "/about/administration" },
      { name: "Facilities", href: "/about/facilities" },
      { name: "Alumni Association", href: "/about/alumni" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    submenu: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Calendar", href: "/academics/calendar" },
    ],
  },
  {
    name: "Library",
    href: "/library",
    submenu: [
      { name: "Misson & Vision", href: "/library/mission" },
      { name: "Guidelines", href: "/library/guidelines" },
      { name: "Services", href: "/library/services" },
      { name: "Structure", href: "/library/structure" },
      { name: "Explore Zendy", href: "/library/zendy" },

    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    submenu: [
      { name: "Enroll Now", href: "/admissions/apply" },
      { name: "Scholarship", href: "/admissions/scholarship" },
    ],
  },
  { name: "News & Events", href: "/news-events" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <nav className="container-fluid mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Candelaria Institute of Technology</span>
            <div className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <Image src="/images/logo.png" alt="School Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:block">
                <p className="font-serif text-lg font-bold text-slate-600">Candelaria Institute of Technology</p>
                <p className="text-xs text-primary-600">CITCI Cabadbaran City</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="outline-none focus:outline-none">
                    <button
                      className={cn(
                        "flex items-center border-none text-sm font-medium hover:text-amber-500",
                        isActive(item.href) ? "text-amber-500" : "text-slate-600"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} isActive={isActive(subitem.href)} asChild>
                        <Link
                          href={subitem.href}
                          className={cn(
                            "block w-full px-2 py-1 text-sm",
                            isActive(subitem.href) ? "text-amber-500" : "text-slate-600"
                          )}
                        >
                          {subitem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium hover:text-amber-500",
                    isActive(item.href) ? "text-amber-500" : "text-slate-600"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-2">
          <CommandBar search={search}/>
          <Link
            href="/admissions/apply"
            className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow bg-amber-500 text-white hover:bg-amber-400 transition-colors"
          >
            Enroll Now
          </Link>
        </div>

      </nav>

      {/* Mobile Menu: You may also use the same isActive() logic for highlighting if needed */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-slate-900/80" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Candelaria Institute</span>
              <div className="flex items-center">
                <div className="relative h-10 w-10 mr-2">
                  <Image src="/images/logo.png" alt="School Logo" fill className="object-contain" />
                </div>
                <p className="font-serif text-base font-bold text-slate-600">Candelaria Institute</p>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="-mx-3">
                    {item.submenu ? (
                      <details className="group">
                        <summary className="flex w-full cursor-pointer items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium text-slate-600 hover:bg-accent hover:text-amber-500">
                          {item.name}
                          <ChevronDown className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="pl-6 mt-1 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={cn("block rounded-lg py-2 pl-3 pr-3 text-sm font-medium text-slate-600 hover:bg-accent hover:text-amber-500",
                                isActive(subitem.href) ? "text-amber-500" : "text-slate-600"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn("block rounded-lg py-2 pl-3 pr-3 text-base font-medium text-slate-600 hover:bg-accent hover:text-amber-500",
                          isActive(item.href) ? "text-amber-500" : "text-slate-600"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>


              <div className="py-6">
                <Button className="w-full bg-amber-500 hover:bg-amber-400">Enroll Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
