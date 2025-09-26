import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import FadeIn from "@/components/fadein-transition"
import history from "../data.json"
import PageCTA from "@/components/page-cta"
import OldDaysCarousel from "@/components/old-days-carousel"
import ContentSection from "@/components/section"

export default function HistoryPage() {
  const {
    heroContent,
    historyContent,
    foundersContent,
    directorsContent,
    campusEvolutionContent,
    alumniSpotlightContent,
    callToActionContent,
    activitiesContent } = history
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt={heroContent.image.alt}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">{heroContent.heading}</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">{heroContent.subtitle}</p>
          </div>
        </FadeIn>
      </section>

      <section id="history" className="py-20 bg-white">
        <section className="p-10 space-y-10 text-gray-900 bg-white max-w-5xl mx-auto leading-relaxed">
          {historyContent.map((entry, idx) => (
            <div className="space-y-4" key={idx}>
              <h2 className="text-3xl font-extrabold text-blue-900">{entry.title}</h2>
              {entry.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {entry.list && (
                <ul className="list-decimal list-inside ml-6 space-y-1">
                  {entry.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {entry.extraLists?.map((listBlock, i) => (
                <div key={i}>
                  <p>{listBlock.paragraph}</p>
                  <ul className="list-decimal list-inside ml-6 space-y-1">
                    {listBlock.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {entry.conclusion && <p>{entry.conclusion}</p>}
            </div>
          ))}
        </section>
      </section>

      {/* Founding Fathers */}
      <section id="founders" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={foundersContent.image.src}
                alt={foundersContent.image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">{foundersContent.heading}</h2>
              <div className="mt-4">
                <div className={`h-1 w-20 ${foundersContent.highlightColor}`}></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                {foundersContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
            {activitiesContent.heading}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-6 text-center text-lg text-primary-600 max-w-3xl mx-auto mb-10">
            {activitiesContent.description}
          </p>
          <OldDaysCarousel activities={activitiesContent.activities} />
        </div>
      </section>

      {/* School Leaders */}
      <ContentSection
        id="directors"
        grid="3"
        background="bg-gray-50"
        headingColor="text-slate-600"
        textColor="text-black"
        heading={directorsContent.heading}
        intro={directorsContent.intro} >
        {directorsContent.directors.map((leader) => (
          <div key={leader.name} className="text-center">
            <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-6">
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">{leader.name}</h3>
            <p className="text-amber-500">{leader.years}</p>
          </div>
        ))}
      </ContentSection>

      {/* Campus Evolution */}
      <ContentSection id="evolution"
        grid="2"
        background={campusEvolutionContent.background}
        headingColor={campusEvolutionContent.textColor}
        textColor={campusEvolutionContent.textColor}
        heading={campusEvolutionContent.heading}
        intro={campusEvolutionContent.intro} >
        {campusEvolutionContent.sections.map((section) => (
          <div key={section.title} className={`p-8`}>
            <h3 className="font-serif text-xl font-bold">{section.title}</h3>
            <div className="mt-2">
              <div className={`h-1 w-12 ${campusEvolutionContent.highlightColor}`}></div>
            </div>
            <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
              <Image
                src={section.image}
                alt={section.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-slate-300">{section.description}</p>
          </div>
        ))}
      </ContentSection>

      {/* <ContentSection
        id="alumni-spotlight"
        grid="3"
        background={"bg-white"}
        textColor="text-black"
        headingColor="text-slate-700"
        heading={alumniSpotlightContent.heading}
        intro={alumniSpotlightContent.intro}
        footer={
          <div className="mt-12 text-center">
            <Link href={alumniSpotlightContent.ctaLink} className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
              {alumniSpotlightContent.ctaText}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        }
      >
        {alumniSpotlightContent.alumni.map((person) => (
          <div key={person.name} className="bg-sky-50 p-8 rounded-xl shadow-md text-center">
            <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-6">
              <Image src={person.image} alt={person.name} fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">{person.name}</h3>
            <p className="text-amber-500">{person.class}</p>
            <p className="mt-4 text-primary-600">{person.achievement}</p>
          </div>
        ))}
      </ContentSection> */}

      {/* CTA */}
      <PageCTA
        heading={callToActionContent.heading}
        description={callToActionContent.description}
        buttons={callToActionContent.buttons}
        color="bg-amber-500"
      />
    </main>
  )
}
