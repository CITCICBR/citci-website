import Image from "next/image"
import Link from "next/link"
import { ChevronRight, DollarSign, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fadein-transition"

export default function TuitionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Tuition & Fees"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Tuition & Fees</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">Investing in your child&apos;s Catholic education</p>
          </div>
        </FadeIn>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Tuition Overview</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Candelaria Institute&apos;s Catholic School is committed to providing an exceptional Catholic education at an
                affordable cost. We strive to keep tuition as low as possible while maintaining the high quality of our
                academic programs and facilities.
              </p>
              <p>
                We believe that a Catholic education is an investment in your child&apos;s future, providing academic
                excellence in a faith-filled environment that nurtures the whole child—mind, body, and spirit.
              </p>
              <p>
                Tuition covers approximately 80% of the actual cost of educating each student. The remaining 20% is
                covered by parish subsidies, fundraising efforts, and donations from generous supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Rates */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">2024-2025 Tuition Rates</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Our tuition rates for the 2024-2025 academic year are as follows:
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-center text-slate-600">Catholic Parishioners</h3>
                  <p className="mt-2 text-center text-primary-600">
                    Families who are registered, active members of a Catholic parish
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Preschool (3 days)</span>
                      <span className="font-bold">$5,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Preschool (5 days)</span>
                      <span className="font-bold">$7,200</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Kindergarten</span>
                      <span className="font-bold">$8,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Grades 1-8 (1 child)</span>
                      <span className="font-bold">$9,200</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Grades 1-8 (2 children)</span>
                      <span className="font-bold">$17,480</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Grades 1-8 (3+ children)</span>
                      <span className="font-bold">$24,840</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-center text-slate-600">Non-Parishioners</h3>
                  <p className="mt-2 text-center text-primary-600">
                    Families who are not registered members of a Catholic parish
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Preschool (3 days)</span>
                      <span className="font-bold">$5,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Preschool (5 days)</span>
                      <span className="font-bold">$7,200</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Kindergarten</span>
                      <span className="font-bold">$9,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Grades 1-8 (1 child)</span>
                      <span className="font-bold">$10,200</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="font-medium">Grades 1-8 (2 children)</span>
                      <span className="font-bold">$19,380</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Grades 1-8 (3+ children)</span>
                      <span className="font-bold">$27,540</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Fees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Additional Fees</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            In addition to tuition, the following fees apply for the 2024-2025 academic year:
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Registration Fee</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    A non-refundable registration fee of $350 per student is due at the time of enrollment or
                    re-enrollment. This fee covers administrative costs, textbooks, and basic school supplies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Technology Fee</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    A technology fee of $200 per student is due at the beginning of the school year. This fee supports
                    the maintenance and upgrading of our technology infrastructure, including computers, tablets, and
                    educational software.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Activity Fee</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    An activity fee of $150 per student is due at the beginning of the school year. This fee covers
                    field trips, special programs, and extracurricular activities throughout the year.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Graduation Fee</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    A graduation fee of $100 is due for eighth grade students in January. This fee covers the cost of
                    the graduation ceremony, diploma, cap and gown, and graduation activities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Extended Day Program</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    Our extended day program is available from 7:00 AM to 6:00 PM for an additional fee. Rates are $8
                    per hour or $250 per month for full-time care. Registration for this program is separate from school
                    registration.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Fundraising Commitment</h3>
                  <div className="mt-2">
                    <div className="h-1 w-12 bg-amber-500"></div>
                  </div>
                  <p className="mt-4 text-primary-600">
                    Each family is required to participate in our fundraising efforts by either raising $300 through our
                    various fundraisers or making a direct donation of $300 to the school.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Payment Plans</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Candelaria Institute&apos;s offers several payment options to accommodate family budgets. All tuition payments are
            processed through FACTS Tuition Management.
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-center text-slate-600">Annual Payment</h3>
                  <div className="mt-4 text-primary-600">
                    <p className="text-center">
                      Pay the full tuition amount by July 1, 2024, and receive a 3% discount on tuition.
                    </p>
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
                  <h3 className="font-serif text-xl font-bold text-center text-slate-600">Semi-Annual Payment</h3>
                  <div className="mt-4 text-primary-600">
                    <p className="text-center">
                      Pay tuition in two equal installments due on July 1, 2024, and January 1, 2025, and receive a 1.5%
                      discount on tuition.
                    </p>
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
                  <h3 className="font-serif text-xl font-bold text-center text-slate-600">Monthly Payment</h3>
                  <div className="mt-4 text-primary-600">
                    <p className="text-center">
                      Pay tuition in 10 monthly installments from July 2024 through April 2025. A $45 annual fee applies
                      for this payment plan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Financial Aid</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  Candelaria Institute&apos;s is committed to making Catholic education accessible to all families who desire
                  it for their children. We offer financial aid to families who demonstrate financial need.
                </p>
                <p>
                  Financial aid applications are processed through FACTS Grant & Aid Assessment, a third-party service
                  that provides an objective evaluation of a family&apos;s financial need.
                </p>
                <p>
                  In addition to need-based financial aid, we offer scholarships for academic achievement, leadership,
                  and service.
                </p>
              </div>
              <div className="mt-8 bg-sky-50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-bold text-slate-600">Financial Aid Timeline</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex justify-between">
                    <span>Applications Open</span>
                    <span className="font-medium">January 15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Priority Deadline</span>
                    <span className="font-medium">March 1</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Award Notifications</span>
                    <span className="font-medium">April 15</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/admissions/financial-aid"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Learn more about financial aid
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Financial Aid" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Frequently Asked Questions</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "When is tuition due?",
                answer:
                  "Tuition is due according to the payment plan you select. Annual payments are due by July 1, semi-annual payments are due July 1 and January 1, and monthly payments are due on the 5th or 20th of each month from July through April.",
              },
              {
                question: "Is there a sibling discount?",
                answer:
                  "Yes, we offer a 5% discount for the second child and a 10% discount for the third and subsequent children enrolled in grades K-8. Preschool tuition is not eligible for sibling discounts.",
              },
              {
                question: "What happens if I withdraw my child during the school year?",
                answer:
                  "Tuition is prorated by quarter. If a student withdraws during a quarter, tuition for the entire quarter is due. Registration and other fees are non-refundable.",
              },
              {
                question: "Are there additional costs not covered by tuition and fees?",
                answer:
                  "Yes, additional costs may include uniforms, school supplies not provided by the school, hot lunch (if chosen), field trips beyond those covered by the activity fee, and participation in certain extracurricular activities.",
              },
              {
                question: "Can I change my payment plan during the school year?",
                answer:
                  "Payment plan changes must be approved by the Business Office and may be subject to a processing fee. Please contact the Business Office to discuss your situation.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-lg font-bold text-slate-600">{item.question}</h3>
                <p className="mt-2 text-primary-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/admissions/faq"
              className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
            >
              View all frequently asked questions
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold">Questions About Tuition & Fees?</h2>
            <p className="mt-6 text-lg">
              Our Business Office is here to help. Contact us with any questions about tuition, payment plans, or
              financial aid.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-500 hover:bg-slate-100">
                Contact Business Office
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-400">
                Apply for Financial Aid
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
