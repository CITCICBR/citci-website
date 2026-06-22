import Image from "next/image"

interface AccreditationItem {
  name: string
  image: string
  description: string
}

interface AccreditationSectionProps {
  data: {
    heading: string
    description: string
    items: AccreditationItem[]
  }
}

export default function AccreditationSection({ data }: AccreditationSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-slate-700">
          {data.heading}
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <p className="mt-4 text-amber-600 max-w-2xl mx-auto">
          {data.description}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {data.items.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="relative h-60 w-48 mx-auto mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className=""
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">
                {item.name}
              </h3>
              <p className="mt-2 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
