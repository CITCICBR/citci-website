import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Heart, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FaithLifePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Faith Life at Candelaria Institute"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Faith Life</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Growing in faith, hope, and love as disciples of Christ
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Our Catholic Identity</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                At Candelaria Institute&apos;s, our Catholic identity permeates all aspects of school life. We are committed to
                forming disciples of Christ through prayer, worship, religious instruction, and service to others.
              </p>
              <p>
                Our faith life program is designed to help students develop a personal relationship with Jesus Christ
                and a deep understanding of the Catholic faith. Through daily prayer, weekly Mass, and regular
                opportunities for reconciliation, students grow in their faith and learn to live as disciples of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mass and Sacraments */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Mass & Sacraments</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  The celebration of the Eucharist is at the heart of our school community. Students attend Mass weekly,
                  with special liturgies for holy days and important school events.
                </p>
                <p>
                  Students actively participate in the liturgy as altar servers, lectors, gift bearers, and choir
                  members. These opportunities help students develop a deeper understanding and appreciation of the
                  Mass.
                </p>
                <p>
                  In addition to the Mass, students have regular opportunities to receive the Sacrament of
                  Reconciliation. Our second-grade students prepare for and receive the sacraments of First
                  Reconciliation and First Holy Communion, while our eighth-grade students prepare for Confirmation.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/faith-life/mass-schedule"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  View Mass schedule
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="School Mass" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-last">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Students in prayer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Prayer Life</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  Prayer is an integral part of daily life at Candelaria Institute&apos;s. Each school day begins and ends with
                  prayer, and students pray before meals and at the beginning of each class.
                </p>
                <p>
                  Students learn traditional Catholic prayers and are encouraged to develop a personal prayer life.
                  Throughout the year, students participate in special prayer services, Eucharistic Adoration, and the
                  Stations of the Cross during Lent.
                </p>
                <p>
                  Our school community also gathers for monthly prayer services focused on different virtues and the
                  liturgical seasons. These services help students understand the richness of Catholic prayer traditions
                  and the importance of prayer in their daily lives.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/faith-life/prayer"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Learn more about our prayer life
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith Formation */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center">Faith Formation</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-slate-300">
            Our comprehensive faith formation program helps students grow in their relationship with God and develop a
            deep understanding of the Catholic faith.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-slate-700 border-none">
              <CardContent className="p-6">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                  <Calendar className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center">Retreats</h3>
                <p className="mt-4 text-slate-300 text-center">
                  Students participate in age-appropriate retreats throughout the year, providing opportunities for
                  spiritual growth and reflection.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    href="/faith-life/retreats"
                    className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-none">
              <CardContent className="p-6">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                  <Heart className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center">Service Projects</h3>
                <p className="mt-4 text-slate-300 text-center">
                  Students put their faith into action through service projects that benefit the local community and
                  beyond.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    href="/faith-life/service"
                    className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-none">
              <CardContent className="p-6">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                  <Bookmark className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-bold text-center">Religious Instruction</h3>
                <p className="mt-4 text-slate-300 text-center">
                  Our comprehensive religious education program helps students develop a deep understanding of Catholic
                  teachings and traditions.
                </p>
                <div className="mt-6 text-center">
                  <Link
                    href="/academics/religious-education"
                    className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liturgical Year */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Celebrating the Liturgical Year</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            At Candelaria Institute&apos;s, we celebrate the richness of the Catholic liturgical year, helping students
            understand the seasons, feasts, and traditions of our faith.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold text-slate-600">Advent & Christmas</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                During Advent, students participate in special prayer services, prepare Advent wreaths, and engage in
                service projects. Our Christmas celebrations include a school-wide pageant and special liturgies.
              </p>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold text-slate-600">Lent & Easter</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                During Lent, students participate in the Stations of the Cross, reconciliation services, and almsgiving
                projects. Our Easter celebrations include special liturgies and activities that help students understand
                the joy of the Resurrection.
              </p>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold text-slate-600">Marian Devotions</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                We honor Mary, the Mother of God, through special devotions in October and May. Students participate in
                the Living Rosary, May Crowning, and other Marian celebrations.
              </p>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold text-slate-600">Saints & Holy Days</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Throughout the year, we celebrate the feasts of saints and holy days of obligation. Students learn about
                the lives of the saints and how they can follow their example of holiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faith & Family */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Family Mass" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Faith & Family Partnership</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  At Candelaria Institute&apos;s, we recognize that parents are the primary educators of their children in the
                  faith. We work in partnership with families to nurture the spiritual growth of our students.
                </p>
                <p>
                  Throughout the year, we offer family faith formation events, parent prayer groups, and opportunities
                  for families to participate in liturgies and service projects together.
                </p>
                <p>
                  We also provide resources and support to help parents continue faith formation at home, creating a
                  strong connection between school, home, and parish.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/faith-life/family"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Learn more about our family faith programs
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold">Join Our Faith Community</h2>
            <p className="mt-6 text-lg">
              We invite you to experience the rich faith life at Candelaria Institute&apos;s Catholic School. Visit our campus,
              attend a school Mass, or join us for a special liturgical celebration.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-500 hover:bg-slate-100">
                Schedule a Visit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-400">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
