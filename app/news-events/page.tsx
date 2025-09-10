import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import eventsList from "./events.json"


export default function NewsEventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="News & Events"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">News & Events</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Stay updated with the latest happenings at Candelaria Institute&apos;s
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Upcoming Events Calendar</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            View our calendar for upcoming events, holidays, and important dates. Click on an event for more details.
          </p>

          <div className="mt-12 text-center">
            <Link
              href="/academics/calendar"
              className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
            >
              View full calendar
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{item.date}</span>
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span>{item.author}</span>
                      </div>
                      <Link
                        href={`${item.link}`}
                        className="text-slate-600 font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              <div className="mt-8 flex justify-center">
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">Load More</button>
              </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold">Ready to Join Our Community?</h2>
            <p className="mt-6 text-lg">
              We invite you to take the next step in providing your child with an exceptional Catholic education.
              Contact our Admissions Office to schedule a tour or apply today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-500 hover:bg-slate-100">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-400">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
