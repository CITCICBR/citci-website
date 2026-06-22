import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getIcon } from "@/lib/icon-utils"

interface ScholarshipItem {
  title: string
  description: string
}

interface ScholarshipsSectionProps {
  items: ScholarshipItem[]
}

export default function ScholarshipsSection({ items }: ScholarshipsSectionProps) {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-white">Scholarships & Aid</h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Candelaria Institute offers several scholarship and government-aid programs to help students pursue quality education.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-amber-500">
                    {getIcon("Gift", "h-6 w-6 text-white")}
                  </div>
                </div>
                <h1 className="font-bold text-slate-600">{item.title}</h1>
                <p className="text-slate-600 mt-2 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/admissions/scholarship"
            className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
          >
            Learn more about our scholarships
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
