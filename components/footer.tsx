import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-10 w-10 mr-3">
                <Image
                  src="/images/logo.png"
                  alt="School Logo"
                  fill
                  className="object-contain "
                />
              </div>
              <div>
                <p className="font-serif text-lg font-bold">Candelaria Institute of Technology</p>
                <p className="text-xs text-slate-300">CITCI Cabadbaran City</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-slate-300 hover:text-white">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-slate-300 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="text-slate-300 hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="text-slate-300 hover:text-white">
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Parent Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academics/calendar" className="text-slate-300 hover:text-white">
                  School Calendar
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-slate-300 hover:text-white">
                  Forms & Documents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">
                  Brgy. 1, Funcion St., 
                  <br />
                  Cabadbaran City, Agusan del Norte
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300"> (0981) 234 7323</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">candelariainstitute@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Candelaria Institute&apos;s Catholic School. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-sm text-slate-400 hover:text-white">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-sm text-slate-400 hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
