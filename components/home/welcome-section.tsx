import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface WelcomeSectionProps {
  heading: string
  message: string
  learnMore: string
}

export default function WelcomeSection({ heading, message, learnMore }: WelcomeSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-600 md:text-4xl">
            {heading}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 text-lg text-amber-600">
            {message}
          </p>
          <div className="mt-10">
            <Link href="/about/mission" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
              {learnMore}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
