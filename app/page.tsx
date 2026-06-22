import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"
import { getIcon } from "@/lib/icon-utils"
import HeroCarousel from "@/components/hero-carousel"
import CTASection from "@/components/footer-cta"
import DiscoverCarousel from "@/components/discover-carousel"
import page from './page.json'
import ContentSection from "@/components/section"
import ActivitiesCarousel from "@/components/activities-carousel"
import WelcomeSection from "@/components/home/welcome-section"
import HighlightsSection from "@/components/home/highlights-section"
import CurriculumOverviewSection from "@/components/home/curriculum-overview-section"
import ScholarshipsSection from "@/components/home/scholarships-section"
import AccreditationSection from "@/components/home/accreditation-section"
import ContactSection from "@/components/home/contact-section"

export default function Home() {
  const {
    curriculumOverviewContent,
    highlightsContent,
    scholarshipContent,
    communityCOntent,
    academicCalendarContent } = page

  return (
    <main className="min-h-screen">
      <HeroCarousel />

      <WelcomeSection
        heading="Welcome to Candelaria Institute"
        message="Welcome to CITCI — a place where faith, excellence, and service come together to shape the leaders of tomorrow. Rooted in Catholic values and inspired by Mary, our model, we are committed to providing a nurturing and academically challenging environment that develops learners who are Christ-centered, socially responsible, and globally competitive."
        learnMore="Learn more about our mission"
      />

      <HighlightsSection
        heading="Faith. Service. Excellence."
        highlights={highlightsContent}
      />

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-white md:text-4xl">
            Discover Candelaria Institute of Technology
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-6 text-center text-lg text-slate-300 max-w-3xl mx-auto mb-20">
            Uncover a learning community where faith, excellence, and service shape future leaders. Whether you're pursuing academic achievement or technical skills,
            Candelaria Institute is where your journey begins. Come and see what makes us a beacon of hope and opportunity!
          </p>
          <DiscoverCarousel />
        </div>
      </section>

      <CurriculumOverviewSection
        heading={curriculumOverviewContent.heading}
        intro={curriculumOverviewContent.intro}
        items={curriculumOverviewContent.items}
      />

      <ScholarshipsSection items={scholarshipContent} />

      <AccreditationSection />

      <ContentSection
        grid="1"
        background="bg-gray-50"
        headingColor="text-slate-600"
        textColor="text-black"
        heading={academicCalendarContent.heading}
        intro={academicCalendarContent.intro} >
        <div className=" text-center">
          <Link
            href="/academics/calendar"
            className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400 transition-colors"
          >
            {academicCalendarContent.linkLabel}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-10 md:grid-cols-2">
          {academicCalendarContent.info.map((info, index) => (
            <div key={index} >
              <h3 className="text-xl font-semibold text-slate-700 my-2">{info.title}</h3>
              <div className="h-1 w-12 bg-amber-500 rounded"></div>
              <div className="mt-8 grid gap-2 md:grid-cols-2 item-center">
                {info.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 my2">
                    <div className="flex h-16 w-12 items-center justify-center ">
                      <Calendar className="h-10 w-10 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm text-slate-700">{item.label}</h4>
                      <h2 className="font-serif text-sm font-bold text-amber-500 ">{item.value}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
            School Activities
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-6 text-center text-lg text-amber-600 max-w-3xl mx-auto mb-10">
            Our students shine beyond the classroom through various clubs, leadership opportunities, service projects, and fun events throughout the year.
          </p>
          <ActivitiesCarousel />
        </div>
      </section >

      <CTASection
        className="py-20 bg-slate-800 text-white"
        title="Join Our School Family"
        description="We invite you to discover the Candelaria Institute difference. Schedule a tour, attend an open house, or apply today to begin your journey with our school community."
        primaryButtonText="Enroll Now"
        secondaryButtonText="Request Information"
      >
        <div className="mt-16 grid gap-6 md:grid-cols-6 place-items-center">
          {communityCOntent.map(({ icon, title, total }, index) => (
            <div key={index} className="flex flex-col items-center text-center ">
              <div className="flex h-16 w-16 items-center justify-center mb-2">
                {getIcon(icon, "h-12 w-12 text-white")}
              </div>
              <h4 className="font-sans text-sm text-white no-wrap">{title}</h4>
              <h2 className="font-serif font-bold text-4xl text-amber-500">{total}</h2>
            </div>
          ))}
        </div>
      </CTASection>

      <ContactSection />
    </main >
  )
}
