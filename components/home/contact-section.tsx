import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getIcon } from "@/lib/icon-utils"

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">Contact Us</h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              {getIcon("Phone", "h-6 w-6 text-sky-700")}
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">Call Us</h3>
            <p className="mt-2 text-amber-600">(0981) 234 7323</p>
            <p className="mt-1 text-amber-600">Monday - Friday: 8:30 AM - 3:30 PM</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              {getIcon("Mail", "h-6 w-6 text-sky-700")}
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">Email Us</h3>
            <p className="mt-2 text-amber-600">candelariainstitute@yahoo.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
              {getIcon("MapPin", "h-6 w-6 text-sky-700")}
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">Visit Us</h3>
            <p className="mt-2 text-amber-600">Brgy. 1, Funcion St.</p>
            <p className="mt-1 text-amber-600">Cabadbaran City, Agusan del Norte 8605</p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
            View full contact information
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
