import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Calendar,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Users,
  Gift,
} from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import CTASection from "@/components/footer-cta"
import DiscoverCarousel from "@/components/discover-carousel"
import page from './page.json'
import ContentSection from "@/components/section"
import { Card, CardContent } from "@/components/ui/card"
import ActivitiesCarousel from "@/components/activities-carousel"

export default function Home() {
  const {
    curriculumOverviewContent,
    highlightsContent,
    scholarshipContent,
    communityCOntent,
    academicCalendarContent } = page

  const handleIcons = (icon: string, className?: string) => {
    switch (icon) {
      case "Calendar":
        return <Calendar className={className} />
      case "BookOpen":
        return <BookOpen className={className}/>
      case "Mail":
        return <Mail className={className}/>
      case "Phone":
        return <Phone className={className}/>
      case "MapPin":
        return <MapPin className={className}/>
      case "Users":
        return <Users className={className}/>
      case "Gift":
        return <Gift className={className}/>
    }
  }
  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Message */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600 md:text-4xl">
              Welcome to Candelaria Institute
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <p className="mt-8 text-lg text-primary-600">
              Welcome to CITCI — a place where faith, excellence, and service come together to shape the leaders of tomorrow. Rooted in Catholic values and inspired by Mary, our model,
              we are committed to providing a nurturing and academically challenging environment that develops learners who are Christ-centered, socially responsible, and globally competitive.
            </p>
            <div className="mt-10">
              <Link href="/about/mission" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
                Learn more about our mission
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faith, Academics, Community */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
            Faith. Service. Excellence.
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {highlightsContent.map(({ icon, title, description }, index) => (
              <div key={index} className="border-none p-6 text-center rounded-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-700">
                  {handleIcons(icon, "h-8 w-8 text-amber-400")}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-600">{title}</h3>
                <p className="mt-4 text-primary-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Showcase */}
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

      {/* Curriculum Overview */}
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
            {curriculumOverviewContent.items.map((item, index) => {
              const isEven = index % 2 === 0;
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

      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">Scholarships & Aid</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Candelaria Institute offers several scholarship and government-aid programs to help students pursue quality education.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {scholarshipContent.map((scholarship, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-amber-500">
                      <Gift className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h1 className="font-bold text-slate-600">{scholarship.title}</h1>
                  <p className="text-slate-600 mt-2 text-sm">{scholarship.description}</p>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-700">
            Accreditation & Certification
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-4 text-primary-600 max-w-2xl mx-auto">
            Candelaria Institute is recognized and accredited by national organizations, ensuring quality and accessible education for all students.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="text-center px-4">
              <div className="relative h-60 w-48 mx-auto mb-6">
                <Image
                  src={"/images/tesda.png"}
                  alt="TESDA"
                  fill
                  className=""
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">
                TESDA Accredited
              </h3>
              <p className="mt-2 text-slate-600">
                We offer programs recognized by the Technical Education and Skills Development Authority (TESDA), aligning with national competency standards.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="relative h-60 w-48 mx-auto  mb-6">
                <Image
                  src={"/images/peac.png"}
                  alt="PEAC"
                  fill
                  className=""
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">
                Educational Service Contracting PEAC Certified
              </h3>
              <p className="mt-2 text-slate-600">
                As a PEAC-certified institution, we participate in the ESC program to support affordable and quality private education for junior high school students.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Student Activities Carousel */}
      <section className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">
            School Activities
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-6 text-center text-lg text-primary-600 max-w-3xl mx-auto mb-10">
            Our students shine beyond the classroom through various clubs, leadership opportunities, service projects, and fun events throughout the year.
          </p>
          <ActivitiesCarousel />
        </div>
      </section >

      {/* Admissions CTA */}
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
                {handleIcons(icon, "h-12 w-12 text-white")}
              </div>
              <h4 className="font-sans text-sm text-white no-wrap">{title}</h4>
              <h2 className="font-serif font-bold text-4xl text-amber-500">{total}</h2>
            </div>
          ))}
        </div>
      </CTASection>

      {/* News and Events */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600 md:text-4xl">News & Upcoming Events</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
            </div>
            <Link
              href="/news-events"
              className="mt-4 md:mt-0 inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
            >
              View all news and events
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: "May 15, 2024",
                title: "Spring Concert",
                description: "Join us for an evening of music performed by our talented students.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                date: "May 16, 2024",
                title: "First Holy Communion",
                description: "Our second grade students will be receiving their First Holy Communion.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                date: "May 17, 2024",
                title: "Field Day",
                description: "Annual field day with games and activities for all grade levels.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((event, index) => (
              <div key={index} className="relative h-72 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-700/90 to-transparent text-white p-4">
                  <div className="flex items-center text-sm text-slate-300 mb-1">
                    <Calendar className="mr-2 h-4 w-4 text-amber-500" />
                    <span className="text-amber-500">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-600">{event.title}</h3>
                  <p className="text-sm mt-1 text-white">{event.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 mt-2"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600 md:text-4xl">Contact Us</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <Phone className="h-6 w-6 text-sky-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">Call Us</h3>
              <p className="mt-2 text-primary-600">(0981) 234 7323</p>
              <p className="mt-1 text-primary-600">Monday - Friday: 8:30 AM - 3:30 PM</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <Mail className="h-6 w-6 text-sky-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">Email Us</h3>
              <p className="mt-2 text-primary-600">candelariainstitute@yahoo.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <MapPin className="h-6 w-6 text-sky-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-600">Visit Us</h3>
              <p className="mt-2 text-primary-600">Brgy. 1, Funcion St.</p>
              <p className="mt-1 text-primary-600">Cabadbaran City, Agusan del Norte 8605</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/contact" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
              View full contact information
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main >
  )
}
