import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function VisitPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Visit Candelaria Institute"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Visit Our Campus</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Experience the Candelaria Institute&apos;s difference firsthand
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Visit Our School</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                We invite you to visit our beautiful campus and experience the Candelaria Institute&apos;s difference
                firsthand. A campus visit is the best way to learn about our programs, meet our faculty and staff, and
                see our students in action.
              </p>
              <p>
                We offer several ways to visit our school, including personal tours, open houses, and shadow days for
                prospective students. We look forward to welcoming you to our campus!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Options */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Ways to Visit</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Choose the visit option that works best for your family:
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-center text-slate-600">Personal Tours</h3>
                <div className="mt-4 text-primary-600">
                  <p className="text-center">
                    Schedule a personal tour of our campus with our Admissions Director. Tours are available Monday
                    through Friday during school hours and can be tailored to your specific interests.
                  </p>
                  <div className="mt-6 text-center">
                    <Button className="bg-amber-500 hover:bg-amber-400">Schedule a Tour</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-center text-slate-600">Open Houses</h3>
                <div className="mt-4 text-primary-600">
                  <p className="text-center">
                    Attend one of our scheduled open houses to tour the campus, meet faculty and staff, and learn about
                    our programs. Open houses are held throughout the year.
                  </p>
                  <div className="mt-6 text-center">
                    <Button className="bg-amber-500 hover:bg-amber-400">View Open House Schedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-center text-slate-600">Shadow Days</h3>
                <div className="mt-4 text-primary-600">
                  <p className="text-center">
                    Prospective students in grades 1-8 can spend a day at Candelaria Institute&apos;s, attending classes and
                    experiencing our school firsthand. Shadow days are available by appointment.
                  </p>
                  <div className="mt-6 text-center">
                    <Button className="bg-amber-500 hover:bg-amber-400">Schedule a Shadow Day</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Open Houses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Upcoming Open Houses</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Join us for one of our upcoming open houses to learn more about Candelaria Institute&apos;s Catholic School:
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  date: "October 15, 2024",
                  time: "9:00 AM - 11:00 AM",
                  title: "Fall Open House",
                  description:
                    "Tour our campus, meet our faculty and staff, and learn about our programs for the 2025-2026 school year.",
                },
                {
                  date: "November 12, 2024",
                  time: "6:00 PM - 8:00 PM",
                  title: "Evening Open House",
                  description:
                    "A special evening event for families who cannot attend during the day. Tour our campus and meet our community.",
                },
                {
                  date: "January 28, 2025",
                  time: "9:00 AM - 11:00 AM",
                  title: "Catholic Schools Week Open House",
                  description:
                    "Celebrate Catholic Schools Week with us! Tour our campus, observe classes in session, and see our students in action.",
                },
                {
                  date: "March 15, 2025",
                  time: "10:00 AM - 12:00 PM",
                  title: "Spring Open House",
                  description:
                    "Learn about our programs for the 2025-2026 school year. This is a great opportunity for families considering a transfer for the fall.",
                },
              ].map((event, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">{event.title}</h3>
                    <div className="mt-2 flex items-center text-sm text-slate-500">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <p className="mt-4 text-primary-600">{event.description}</p>
                    <div className="mt-6">
                      <Button className="w-full bg-amber-500 hover:bg-amber-400">Register</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Tour */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Schedule a Personal Tour</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  Personal tours are available Monday through Friday during school hours. Tours typically last about an
                  hour and include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A meeting with our Admissions Director</li>
                  <li>A comprehensive tour of our campus</li>
                  <li>Classroom observations</li>
                  <li>An opportunity to meet with teachers and administrators</li>
                  <li>Information about our curriculum, extracurricular activities, and admissions process</li>
                </ul>
                <p>
                  To schedule a tour, please complete the form or contact our Admissions Office at (555) 123-4568 or{" "}
                  <a href="mailto:admissions@stcatherines.edu" className="text-amber-500 hover:underline">
                    admissions@stcatherines.edu
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Tour Request Form</h3>
                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Student Name(s) and Grade(s)</Label>
                      <Input id="student-name" placeholder="e.g., John Smith - 3rd grade" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-date">Preferred Date</Label>
                      <Input id="preferred-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comments">Additional Comments</Label>
                      <Textarea id="comments" placeholder="Any specific areas of interest or questions?" rows={3} />
                    </div>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Campus Map & Directions</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Candelaria Institute&apos;s Catholic School is conveniently located in the heart of Faithville.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=800" alt="Campus Map" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-start mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mr-4">
                  <MapPin className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-600">Address</h3>
                  <p className="mt-1 text-primary-600">
                    123 Blessed Way
                    <br />
                    Faithville, CA 90210
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-serif text-lg font-bold text-slate-600">Directions</h3>
                <div className="mt-2">
                  <div className="h-1 w-12 bg-amber-500"></div>
                </div>
                <div className="mt-4 space-y-4 text-primary-600">
                  <div>
                    <p className="font-medium">From the North:</p>
                    <p>
                      Take Highway 101 South to Exit 25. Turn right onto Main Street and continue for 2 miles. Turn left
                      onto Blessed Way. The school will be on your right.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">From the South:</p>
                    <p>
                      Take Highway 101 North to Exit 23. Turn left onto Central Avenue and continue for 1.5 miles. Turn
                      right onto Blessed Way. The school will be on your left.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">From the East:</p>
                    <p>Take Highway 80 West to Highway 101 South. Follow directions from the North.</p>
                  </div>
                  <div>
                    <p className="font-medium">From the West:</p>
                    <p>Take Highway 280 East to Highway 101 North. Follow directions from the South.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-serif text-lg font-bold text-slate-600">Parking</h3>
                <div className="mt-2">
                  <div className="h-1 w-12 bg-amber-500"></div>
                </div>
                <p className="mt-4 text-primary-600">
                  Visitor parking is available in the main parking lot in front of the school office. Please check in at
                  the office upon arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center">Virtual Tour</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-slate-300">
            Can&apos;t visit in person? Take a virtual tour of our campus to see our facilities and learning
            environments.
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=600&width=1200" alt="Virtual Tour" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400">
                  Start Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Frequently Asked Questions</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long do tours typically last?",
                answer:
                  "Personal tours typically last about an hour, but we can adjust the length based on your schedule and interests.",
              },
              {
                question: "Can I bring my child on the tour?",
                answer:
                  "Yes, we encourage you to bring your child on the tour. It's a great opportunity for them to see the school and get a feel for the environment.",
              },
              {
                question: "What should I expect during an open house?",
                answer:
                  "Open houses include a welcome presentation, guided tours of the campus, opportunities to meet faculty and staff, and information about our programs and admissions process.",
              },
              {
                question: "How do I schedule a shadow day for my child?",
                answer:
                  "Shadow days can be scheduled by contacting our Admissions Office. We'll match your child with a current student in their grade level for the day.",
              },
              {
                question: "Is there a dress code for campus visits?",
                answer:
                  "While there is no formal dress code for visitors, we recommend business casual attire for parents and comfortable, modest clothing for students.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-sky-50 p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-lg font-bold text-slate-600">{item.question}</h3>
                <p className="mt-2 text-primary-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold">Ready to Visit Candelaria Institute&apos;s?</h2>
            <p className="mt-6 text-lg">
              We look forward to welcoming you to our campus and showing you what makes Candelaria Institute&apos;s special.
              Schedule a tour or register for an open house today!
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-500 hover:bg-slate-100">
                Schedule a Tour
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-400">
                Register for Open House
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
