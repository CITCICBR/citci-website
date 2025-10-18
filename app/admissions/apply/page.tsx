import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/fadein-transition"
import PageCTA from "@/components/page-cta"
import apply from "./apply.json"

export default function ApplyPage() {
  const { callToActionContent, enrollmentSteps, enrollmentRequirements } = apply

  const RequirementList = ({ items }: { items: string[] }) => (
    <ul className="mt-2 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
          <span className="text-primary-600">{item}</span>
        </li>
      ))}
    </ul>
  );

  const RequirementCard = ({
    title,
    list,
    categories,
  }: {
    title: string;
    list?: string[];
    categories?: Record<string, string[]>;
  }) => (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h3 className="font-serif text-xl font-bold text-slate-600">{title}</h3>
      <div className="mt-2 h-1 w-12 bg-amber-500"></div>

      {list && <div className="mt-6">{<RequirementList items={list} />}</div>}

      {categories && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-lg font-semibold text-primary-600">{cat}</h4>
              <RequirementList items={items} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Apply to Candelaria Institute"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Enroll Now</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Begin your journey with Candelaria Institute&apos;s Catholic School
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Application Process */}
      <section id="application-process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Enrollment Steps</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Thank you for your interest in Candelaria Institute. Follow the steps below to complete your enrollment. Ensure
                that all requirements are submitted as outlined.
              </p>
            </div>
            <div className="mt-10">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400">
                Start Application
              </Button>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-amber-500 md:left-[50%]"></div>

              {enrollmentSteps.map((step, index) => (
                <div key={index} className="relative mb-12 md:mb-16">
                  <div className={`flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="flex md:h-16 md:w-16 h-8 w-8 md:mr-8 items-center justify-center rounded-full bg-amber-500 z-10">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <div className={`mx-4 md:mx-8 md:w-[calc(40%-4rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <h3 className="font-serif text-xl font-bold text-slate-600">{step.title}</h3>
                      <p className="mt-2 text-primary-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section id="requirements" className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">
            Application Requirements
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500" />
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Please prepare the following documents and requirements according to your student category.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {enrollmentRequirements.map((req, index) => (
              <RequirementCard
                key={index}
                title={req.title}
                list={req.list}
                categories={req.categories}
              />
            ))}
          </div>
        </div>
      </section>

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
