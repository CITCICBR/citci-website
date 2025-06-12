import FadeIn from "@/components/fadein-transition"
import Image from "next/image"
import mission from "../data.json"
import PageCTA from "@/components/page-cta"

export default function MissionPage() {
  const { core_values, philosophy_of_education, catholic_identity, callToActionContent, _mission, vision } = mission
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Mission & Vision"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Mission & Vision</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Guiding principles that shape our Catholic educational community
            </p>
          </div>
        </FadeIn>
      </section>

      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">{vision.title}</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 p-8 bg-sky-50 rounded-xl shadow-md">
              <p className="text-xl italic text-slate-600">
                {vision.quote}
              </p>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              {vision.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">{_mission.title}</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 p-8 bg-white rounded-xl shadow-md">
              <p className="text-xl italic text-slate-600">
                {_mission.quote}
              </p>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              {_mission.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Education */}
      <section id="philosophy" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold">{philosophy_of_education.title}</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-slate-300">
                {philosophy_of_education.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/banner-2.jpg"
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">
            {core_values.title}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            {core_values.description}
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {core_values.values.map((value, index) => (
              <div
                key={index}
                className="bg-sky-50 p-8 rounded-xl shadow-md"
              >
                <h3 className="font-serif text-xl font-bold text-slate-600">
                  {value.title}
                </h3>
                <div className="mt-2">
                  <div className="h-1 w-12 bg-amber-500"></div>
                </div>
                <p className="mt-4 text-primary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catholic Identity */}
      <section id="catholic-identity" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">{catholic_identity.title}</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                {catholic_identity.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-last">
              <Image src="/placeholder.svg?height=800&width=600" alt="School chapel" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* callToActionContent */}
      <PageCTA
        heading={callToActionContent.heading}
        description={callToActionContent.description}
        buttons={callToActionContent.buttons}
        color="bg-amber-500"
      />
    </main>
  )
}
