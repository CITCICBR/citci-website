import { getIcon } from "@/lib/icon-utils"

interface HighlightsSectionProps {
  heading: string
  highlights: Array<{ icon: string; title: string; description: string }>
}

export default function HighlightsSection({ heading, highlights }: HighlightsSectionProps) {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
          {heading}
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map(({ icon, title, description }, index) => (
            <div key={index} className="border-none p-6 text-center rounded-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-700">
                {getIcon(icon, "h-8 w-8 text-amber-400")}
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">{title}</h3>
              <p className="mt-4 text-amber-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
