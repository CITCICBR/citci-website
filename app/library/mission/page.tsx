import LibraryFacilitiesCarousel from "@/components/library-carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import missionVision from "./mission.json"
import FadeIn from "@/components/fadein-transition"

export default function LibraryPage() {
    const { vision, mission } = missionVision
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="Academic Departments"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <FadeIn>
                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Mission & Vision</h1>
                        
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            At CITCI Library, we nurture morally grounded, digitally savvy learners through a welcoming space of knowledge, creativity, and community engagement.
                        </p>
                    </div>
                </FadeIn>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold text-slate-600">{vision.title}</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <div className="mt-8 p-8 bg-sky-50 rounded-xl shadow-md">
                            <p className="text-xl italic text-slate-600">
                                {vision.quote}
                            </p>
                        </div>
                        <div className="mt-8 space-y-4 text-primary-600">
                            {vision.paragraphs.map((p, index) => (
                                <p key={index}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold text-slate-600">{mission.title}</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <div className="mt-8 p-8 bg-white rounded-xl shadow-md">
                            <p className="text-xl italic text-slate-600">
                                {mission.quote}
                            </p>
                        </div>
                        <div className="mt-8 space-y-4 text-primary-600">
                            {mission.paragraphs.map((p: string, index: any) => (
                                <p key={index}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-slate-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Visit Our Library</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        We invite you to visit our library and explore the resources available to our students. Our librarians are
                        always happy to assist with research questions or book recommendations.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-slate-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
                    >
                        Contact Our Librarians
                    </Link>
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
