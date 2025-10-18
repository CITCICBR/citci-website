import FadeIn from "@/components/fadein-transition"
import PageCTA from "@/components/page-cta"
import { LibraryBig } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import service from "../data.json"

export default function LibraryPage() {
    const { callToActionContent, libraryCollection } = service
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
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Library Services</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Our library serves as the heart of academic inquiry and intellectual growth at Candelaria Institute,
                            providing resources that inspire learning, creativity, and spiritual development.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-4">
                                A Center for Learning and Discovery
                            </h2>
                            <p className="text-gray-700 mb-4">
                                The Candelaria Institute Library provides students with access to a rich collection of books, digital resources,
                                and research materials that support our curriculum and encourage a lifelong love of reading and
                                learning.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our library is staffed by professional librarians who work closely with teachers to integrate
                                information literacy skills into classroom instruction and provide guidance to students in their
                                research and reading endeavors.
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-primary-600">
                                <h3 className="font-bold text-slate-600 mb-2">Library Hours</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <span className="font-medium">Basic Education | Monday - Friday:</span> 8:00 AM - 5:00 PM
                                    </li>
                                    <li>
                                        <span className="font-medium">College | Monday - Friday:</span> 8:00 AM - 5:00 PM
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="St. Mary's School Library"
                                fill
                                className="object-cover"
                            />
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

            {/* Collections Section */}
            <section id="collections" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-600 text-center">Discover a World of Knowledge</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="text-lg max-w-2xl mx-auto my-8 text-center">
                        Explore a wide range of disciplines—from science and technology to arts and society.
                        This collection offers insights into how our world works, how we live, and how we innovate.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {libraryCollection.map((collection) => (
                            <div key={collection.id} className="flex items-start gap-2 my-8">
                                <div className="flex h-16 w-12 items-center justify-center ">
                                    <LibraryBig className="h-10 w-10 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-600 mb-2 text-start">{collection.name}</h3>
                                    <p className="text-gray-700 text-start">{collection.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collections Section */}
            <section id="how-to-access" className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl text-slate-600 font-bold mb-6">How to Access the Resources?</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="text-lg max-w-2xl mx-auto my-8">
                        Easily access a wide range of academic journals, articles, and eBooks on Zendy by creating an account,
                        selecting a suitable plan, and browsing or searching through curated categories. With a few clicks, you can explore and read high-quality online resources anytime, anywhere.
                    </p>
                    <Link
                        href="https://zendy.io/"
                        className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
                    >
                        Visit Zendy
                    </Link>
                </div>
                <div className="container mx-auto px-4 items-center">
                    <div className="my-8 aspect-video h-[200vh] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
                        <div className="relative h-full w-full">
                            <Image
                                alt="Instructions"
                                src="/images/instructions.jpg"
                                fill
                                loading="lazy"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <PageCTA
                color="bg-amber-500"
                heading={callToActionContent.heading}
                description={callToActionContent.description}
                buttons={callToActionContent.buttons}
            />
        </main>
    )
}
