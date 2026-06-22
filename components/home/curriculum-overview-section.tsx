import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface CurriculumItem {
  title: string
  image: string
  description: string
  bullets: Array<{ title: string; detail: string }>
}

interface CurriculumOverviewSectionProps {
  heading: string
  intro: string
  items: CurriculumItem[]
}

export default function CurriculumOverviewSection({ heading, intro, items }: CurriculumOverviewSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
          {heading}
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <p className="mt-6 text-center text-lg text-amber-600 max-w-3xl mx-auto">
          {intro}
        </p>
        <div className="mt-12 text-center">
          <Link
            href="/academics/curriculum"
            className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
          >
            Learn more about our academic programs
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          {items.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={index} className="grid gap-8 md:grid-cols-2 my-20 items-center">
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'} relative h-[500px] rounded-xl overflow-hidden shadow-xl`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="font-serif text-3xl font-bold text-slate-600">{item.title}</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <div className="mt-4 space-y-4 text-amber-600">
                    <p>{item.description}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>
                          <strong>{bullet.title}</strong> {bullet.detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
