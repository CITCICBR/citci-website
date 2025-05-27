import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Clock, User, Tag, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewsEventsPage() {
  const newsItems = [
    {
      id: "new-science-lab",
      title: "New Science Laboratory Opens",
      excerpt: "State-of-the-art facilities enhance our STEM program with advanced equipment for hands-on learning.",
      date: "March 15, 2024",
      author: "Principal Williams",
      category: "Facilities",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "academic-excellence",
      title: "Students Win Regional Math Competition",
      excerpt: "Our math team placed first in the regional competition, advancing to the state finals next month.",
      date: "March 10, 2024",
      author: "Mrs. Chen",
      category: "Achievements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "lenten-retreat",
      title: "Annual Lenten Retreat Announced",
      excerpt:
        "Join us for a day of prayer and reflection as we prepare for Easter. All students and families are welcome.",
      date: "March 5, 2024",
      author: "Campus Ministry",
      category: "Spiritual Life",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "parent-teacher",
      title: "Parent-Teacher Conferences Scheduled",
      excerpt: "Spring conferences will be held March 25-26. Online registration is now open for all parents.",
      date: "February 28, 2024",
      author: "Administration Office",
      category: "Events",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "sports-championship",
      title: "Basketball Team Advances to Championships",
      excerpt: "Our varsity basketball team has advanced to the diocesan championships after an undefeated season.",
      date: "February 20, 2024",
      author: "Athletic Department",
      category: "Sports",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "enrollment-2024",
      title: "Enrollment for 2024-2025 Now Open",
      excerpt:
        "Applications for the upcoming academic year are now being accepted. Early enrollment discounts available.",
      date: "February 15, 2024",
      author: "Admissions Office",
      category: "Admissions",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "Events", count: 8 },
    { name: "Achievements", count: 6 },
    { name: "Spiritual Life", count: 5 },
    { name: "Admissions", count: 3 },
    { name: "Sports", count: 4 },
    { name: "Facilities", count: 2 },
  ]
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map((item) => (
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
                          href={`/news-announcements/${item.id}`}
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

            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-600 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-slate-600">
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-slate-600 mb-4">Subscribe to Updates</h3>
                <p className="text-gray-600 mb-4">Receive our newsletter with the latest news and announcements.</p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Newsletter */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold">School Newsletter</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-slate-300">
                <p>
                  Stay informed about all the happenings at Candelaria Institute&apos;s by subscribing to our weekly
                  newsletter, &quot;The Cardinal Chronicle.&quot; The newsletter includes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Principal&apos;s message</li>
                  <li>Upcoming events and important dates</li>
                  <li>Classroom highlights and student achievements</li>
                  <li>Parish news and faith formation opportunities</li>
                  <li>Parent Association updates</li>
                  <li>Sports scores and athletic announcements</li>
                </ul>
                <p>
                  Current families receive the newsletter automatically via email every Friday. Alumni, parishioners,
                  and community members are welcome to subscribe using the form below.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md text-slate-600 w-full sm:w-auto"
                />
                <Button className="bg-amber-500 hover:bg-amber-400">Subscribe</Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="School newsletter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Connect With Us</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Follow us on social media for daily updates, photos, and more from Candelaria Institute&apos;s Catholic School.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-500 hover:bg-amber-400">
                <Facebook className="mr-2 h-4 w-4" />
                Google Calendar
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-400">
                <Instagram className="mr-2 h-4 w-4" />
                Apple Calendar
              </Button>
              <Button className="bg-amber-500 hover:bg-amber-400">
                <Twitter className="mr-2 h-4 w-4" />
                Outlook Calendar
              </Button>
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
