import Image from "next/image"
import { BookOpen, GraduationCap, Users, Calendar, ChevronRight, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FadeIn from "@/components/fadein-transition"
import programsData from './programs.json';
import PageCTA from "@/components/page-cta"

export default function CurriculumPage() {
  const { curriculumOverviewContent,callToActionContent } = programsData
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Curriculum"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Curriculum</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              A comprehensive, faith-integrated approach to learning
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Overview */}
      <section id="curriculum-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Curriculum Overview</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Candelaria Institute offers a comprehensive curriculum that prepares students for success in both academic and vocational fields.
                Our Basic Education program provides a strong foundation in academics and religious instruction.
              </p>
              <p>
                The College Department offers a Bachelor of Secondary Education with majors in Social Studies and English, focusing on teaching and leadership skills.
                Our TVET programs provide practical, industry-relevant training in areas like Welding, Computer Servicing, Graphic Design, and Bookkeeping, ensuring students are ready for the workforce.
                All programs align with national standards, equipping students with the skills and certifications needed to succeed.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <BookOpen className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-600">Academic Programs</h3>
                <p className="mt-4 text-primary-600">
                  We offer a diverse range of academic programs, from Basic Education with a strong academic and religious foundation to a comprehensive College Department offering Bachelor's degrees in Social Studies and English.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <GraduationCap className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-600">Vocational Training</h3>
                <p className="mt-4 text-primary-600">
                  Our Technical-Vocational Education and Training (TVET) programs are TESDA-accredited, providing hands-on training in areas such as Welding, Graphic Design,
                  and Bookkeeping, preparing students for the workforce.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Users className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-600">Industry Certifications</h3>
                <p className="mt-4 text-primary-600">
                  Our TVET programs lead to industry-recognized certifications such as NC I, NC II, and NC III, equipping students with the qualifications they need for various professions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Calendar className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-600">Student Support</h3>
                <p className="mt-4 text-primary-600">
                  We offer various support services including counseling, resource programs, and enrichment activities to foster both academic and personal growth.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
            {curriculumOverviewContent.heading}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-6 text-center text-lg text-primary-600 max-w-3xl mx-auto">
            {curriculumOverviewContent.intro}
          </p>

          <div className="mt-12">
            {curriculumOverviewContent.items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div id={item.id} key={index} className="grid gap-8 md:grid-cols-2 my-20 items-center">
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'} relative h-[500px] rounded-xl overflow-hidden shadow-xl`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <h3 className="font-serif text-xl font-bold text-slate-600">{item.title}</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
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
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        heading={callToActionContent.heading}
        description={callToActionContent.description}
        buttons={callToActionContent.buttons}
        color="bg-amber-500"
      />
    </main>


  )
}
