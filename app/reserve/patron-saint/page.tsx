import Image from "next/image"
import { Calendar, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fadein-transition"

export default function PatronSaintPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="St. Mary, Our Patron Saint"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <FadeIn>
                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Our Patron Saint</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            St. Mary, Mother of God - Our Guide and Inspiration
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold text-slate-600">St. Mary, Mother of God</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <div className="mt-8 space-y-4 text-primary-600">
                            <p>
                                Our school is honored to be under the patronage of St. Mary, the Mother of God. As the mother of Jesus
                                Christ, Mary holds a special place in the Catholic faith and serves as a model of faith, humility, and
                                devotion for our entire school community.
                            </p>
                            <p>
                                Mary's unwavering "yes" to God's plan, her steadfast presence throughout Jesus' life, and her role as
                                the first disciple inspire us to live our own faith with similar courage and commitment. Her example
                                guides our educational mission and shapes our school culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life of Mary */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-600">The Life of Mary</h2>
                            <div className="mt-4">
                                <div className="h-1 w-20 bg-amber-500"></div>
                            </div>
                            <div className="mt-8 space-y-4 text-primary-600">
                                <p>
                                    Mary was born to Joachim and Anne, who had been childless for many years before her birth. According
                                    to tradition, her parents had promised to dedicate her to God's service, and Mary was presented at the
                                    Temple at a young age.
                                </p>
                                <p>
                                    The pivotal moment in Mary's life came when the Angel Gabriel appeared to her, announcing that she had
                                    been chosen to be the mother of the Messiah. Despite her initial confusion, Mary responded with
                                    complete trust: "Behold, I am the handmaid of the Lord. May it be done to me according to your word"
                                    (Luke 1:38).
                                </p>
                                <p>
                                    Throughout Jesus' life, Mary was present at key moments—from the wedding at Cana, where she prompted
                                    Jesus' first public miracle, to the foot of the cross, where Jesus entrusted her to the care of the
                                    apostle John. After Jesus' ascension, Mary was present with the apostles at Pentecost, witnessing the
                                    birth of the Church.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image src="/placeholder.svg?height=800&width=600" alt="Image of Mary" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Mary in Our School */}
            <section className="py-20 bg-slate-800 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-center text-white">Mary in Our School</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="mt-8 max-w-3xl mx-auto text-center text-slate-300">
                        As our patron saint, Mary's presence is felt throughout our school community in many ways.
                    </p>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Calendar className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Marian Celebrations</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    We honor Mary through special celebrations throughout the year, including the Feast of the Immaculate
                                    Conception, the Feast of Our Lady of Guadalupe, and May Crowning. These celebrations help students
                                    develop a devotion to Mary and understand her role in salvation history.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <BookOpen className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Marian Prayer</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    Students learn and pray traditional Marian prayers, including the Hail Mary, the Angelus, and the
                                    Rosary. Each class participates in the Living Rosary during October (the Month of the Rosary) and May
                                    (the Month of Mary).
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-700 border-none">
                            <CardContent className="p-6">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-600">
                                    <Heart className="h-8 w-8 text-amber-500" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-center text-white">Living Mary's Virtues</h3>
                                <p className="mt-4 text-slate-300 text-center">
                                    We encourage students to follow Mary's example by living her virtues in their daily lives. Our
                                    character education program highlights these virtues and recognizes students who exemplify them.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* School History */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-last">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Historic image of the school"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-slate-600">Our School's Connection to St. Mary</h2>
                            <div className="mt-4">
                                <div className="h-1 w-20 bg-amber-500"></div>
                            </div>
                            <div className="mt-8 space-y-4 text-primary-600">
                                <p>
                                    St. Mary's Catholic School was founded in 1925 by the Sisters of Mercy, who dedicated the school to
                                    the Blessed Virgin Mary. The sisters chose Mary as the school's patron because of her perfect example
                                    of discipleship and her special role in the Church.
                                </p>
                                <p>
                                    Throughout our school's history, we have maintained a strong devotion to Mary and have sought to
                                    instill in our students a deep appreciation for her role in salvation history. The beautiful statue of
                                    Mary in our main entrance and the Marian garden on our campus serve as daily reminders of our patron
                                    saint's presence in our school community.
                                </p>
                                <p>
                                    Each year, we celebrate our school's feast day on the Solemnity of Mary, Mother of God (January 1),
                                    with special activities and prayer services throughout the week when we return from Christmas break.
                                    This celebration helps strengthen our community's connection to our patron saint and our Catholic
                                    identity.
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
                        <h2 className="font-serif text-3xl font-bold">Learn More About Our Catholic Identity</h2>
                        <p className="mt-6 text-lg">
                            We invite you to explore how our devotion to St. Mary shapes our school community and educational mission.
                            Visit our campus to experience our Catholic identity firsthand.
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
