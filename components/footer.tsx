import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import footerData from "@/content/footer.json"

const socialIcons: Record<string, React.ElementType> = {
  Facebook, Twitter, Instagram, Youtube,
}

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-10 w-10 mr-3">
                <Image
                  src={footerData.school.logo}
                  alt="School Logo"
                  fill
                  className="object-contain "
                />
              </div>
              <div>
                <p className="font-serif text-lg font-bold">{footerData.school.name}</p>
                <p className="text-xs text-slate-300">{footerData.school.tagline}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {footerData.social.map((item) => {
                const Icon = socialIcons[item.icon]
                return (
                  <Link key={item.name} href={item.url} className="text-slate-300 hover:text-white">
                    <span className="sr-only">{item.name}</span>
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </Link>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Parent Resources</h3>
            <ul className="space-y-3">
              {footerData.parentResources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">{footerData.contact.address}</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300"> {footerData.contact.phone}</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">{footerData.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} {footerData.copyright}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              {footerData.legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
