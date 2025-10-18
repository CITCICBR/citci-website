import Image from "next/image"
import { BookOpen, Heart, Cross, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ReligiousEducationPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="Religious Education"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Religious Education</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                        Forming disciples of Christ through faith, knowledge, and service
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold text-slate-600">Our Approach to Religious Education</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <div className="mt-8 space-y-4 text-primary-600">
                            <p>
                                At St. Mary's Catholic School, religious education is not just a subject—it's the foundation of our
                                educational mission. We integrate Catholic teachings and values throughout our curriculum and school
                                life, helping students develop a personal relationship with Jesus Christ and a deep understanding of
                                their faith.
                            </p>
                            <p>
                                Our religious education program is designed to nurture the spiritual growth of each student, providing
                                them with the knowledge, skills, and experiences they need to live as disciples of Christ in today's
                                world. Through prayer, worship, religious instruction, and service to others, students learn to
                                integrate faith into every aspect of their lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-600">Religious Education Curriculum</h2>
                            <div className="mt-4">
                                <div className="h-1 w-20 bg-amber-500"></div>
                            </div>
                            <div className="mt-8 space-y-4 text-primary-600">
                                <p>
                                    Our comprehensive religious education curriculum follows the guidelines of the Diocese and is rooted
                                    in Sacred Scripture, the Catechism of the Catholic Church, and the rich traditions of our faith. The
                                    curriculum is age-appropriate and spirals through the following key areas:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Catholic doctrine and moral teachings</li>
                                    <li>Sacred Scripture and Church history</li>
                                    <li>Liturgy, sacraments, and prayer</li>
                                    <li>Catholic social teaching and service</li>
                                    <li>Vocational discernment and personal spirituality</li>
                                </ul>
                                <p>
                                    Students attend religion classes daily, where they engage in discussions, projects, and activities
                                    that deepen their understanding of the Catholic faith and help them apply it to their daily lives.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Students in religion class"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sacramental Preparation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-last">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="First Communion celebration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-600">Sacramental Preparation</h2>
                            <div className="mt-4">
                                <div className="h-1 w-20 bg-amber-500"></div>
                            </div>
                            <div className="mt-8 space-y-4 text-primary-600">
                                <p>
                                    In partnership with parents and parishes, St. Mary's provides preparation for the sacraments of
                                    Reconciliation, First Holy Communion, and Confirmation. Our sacramental preparation programs include:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <strong>First Reconciliation and First Holy Communion:</strong> Typically prepared for and received
                                        in second grade, with special classes, retreats, and celebrations.
                                    </li>
                                    <li>
                                        <strong>Confirmation:</strong> Prepared for in eighth grade, with a focus on deepening faith,
                                        understanding the gifts of the Holy Spirit, and embracing the call to discipleship.
                                    </li>
                                </ul>
                                <p>
                                    Parents are actively involved in their children's sacramental preparation through meetings, home
                                    activities, and participation in special liturgies and events. We work closely with parish priests to
                                    ensure that students are well-prepared to receive these important sacraments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Components */}
            <section className="py-20 bg-slate-800 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-center">Key Components of Our Program</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="mt-8 max-w-3xl mx-auto text-center text-slate-300">
                        Our religious education program extends beyond the classroom to include various elements that foster
                        spiritual growth and faith development.
                    </p>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <BookOpen className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Scripture Study</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    Students engage with Sacred Scripture through age-appropriate Bible studies, reflection, and
                                    application to daily life.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Heart className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Prayer Life</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    Students learn various forms of prayer and develop a personal prayer life through daily practice and
                                    special prayer services.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Cross className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Liturgical Celebrations</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    Students participate in weekly Mass, holy days of obligation, and special liturgical celebrations
                                    throughout the year.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Users className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Service Learning</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    Students put faith into action through age-appropriate service projects that benefit the school,
                                    parish, and wider community.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Faith Formation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-center text-slate-600">
                        Faith Formation Beyond the Classroom
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
                        At St. Mary's, faith formation extends beyond formal religious education classes to include a variety of
                        experiences that nurture spiritual growth.
                    </p>

                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        <div className="bg-sky-50 p-8 rounded-xl">
                            <h3 className="font-serif text-xl font-bold text-slate-600">Retreats</h3>
                            <div className="mt-2">
                                <div className="h-1 w-12 bg-amber-500"></div>
                            </div>
                            <p className="mt-4 text-primary-600">
                                Students participate in age-appropriate retreats throughout the year, providing opportunities for
                                spiritual reflection, community building, and personal growth. These retreats are designed to help
                                students deepen their relationship with God and one another.
                            </p>
                        </div>
                        <div className="bg-sky-50 p-8 rounded-xl">
                            <h3 className="font-serif text-xl font-bold text-slate-600">Service Projects</h3>
                            <div className="mt-2">
                                <div className="h-1 w-12 bg-amber-500"></div>
                            </div>
                            <p className="mt-4 text-primary-600">
                                Through our service learning program, students engage in projects that address real community needs
                                while developing a deeper understanding of Catholic social teaching. These experiences help students
                                recognize the dignity of every person and their responsibility to serve others.
                            </p>
                        </div>
                        <div className="bg-sky-50 p-8 rounded-xl">
                            <h3 className="font-serif text-xl font-bold text-slate-600">Prayer Services</h3>
                            <div className="mt-2">
                                <div className="h-1 w-12 bg-amber-500"></div>
                            </div>
                            <p className="mt-4 text-primary-600">
                                Throughout the liturgical year, students participate in special prayer services that help them
                                understand and celebrate the seasons and feasts of the Church. These include Advent and Lenten services,
                                Stations of the Cross, May Crowning, and Living Rosary.
                            </p>
                        </div>
                        <div className="bg-sky-50 p-8 rounded-xl">
                            <h3 className="font-serif text-xl font-bold text-slate-600">Faith Families</h3>
                            <div className="mt-2">
                                <div className="h-1 w-12 bg-amber-500"></div>
                            </div>
                            <p className="mt-4 text-primary-600">
                                Our Faith Families program groups students from different grade levels together for special activities
                                and service projects. Led by eighth-grade students, these multi-age groups foster mentorship,
                                community-building, and shared faith experiences across the school.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Partnership */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Parent-teacher meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-600">Parent Partnership</h2>
                            <div className="mt-4">
                                <div className="h-1 w-20 bg-amber-500"></div>
                            </div>
                            <div className="mt-8 space-y-4 text-primary-600">
                                <p>
                                    We recognize that parents are the primary educators of their children in the faith. Our religious
                                    education program is designed to support and complement the faith formation that happens in the home.
                                    We partner with parents through:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Regular communication about what students are learning in religion classes</li>
                                    <li>Parent meetings and workshops on faith topics</li>
                                    <li>Family faith formation events and activities</li>
                                    <li>Resources and suggestions for continuing faith conversations at home</li>
                                    <li>Opportunities for parent involvement in liturgies, retreats, and service projects</li>
                                </ul>
                                <p>
                                    This partnership between home, school, and parish creates a strong foundation for students' lifelong
                                    faith journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-amber-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold">Experience Our Faith Community</h2>
                        <p className="mt-6 text-lg">
                            We invite you to learn more about our religious education program and how it nurtures the spiritual growth
                            of our students. Contact us to schedule a visit or to speak with our religion coordinator.
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
