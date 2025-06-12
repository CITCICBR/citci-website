import { Button } from "@/components/ui/button"
import Image from "next/image"
import guidelines from "../data.json"
import FadeIn from "@/components/fadein-transition"
import PageCTA from "@/components/page-cta"

export default function LibraryPage() {
    const { libraryGuidelines, callToActionContent } = guidelines
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
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">School Library</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Our library serves as the heart of academic inquiry and intellectual growth at Candelaria Institute,
                            providing resources that inspire learning, creativity, and spiritual development.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Digital Resources Section */}
            <section id="guidelines" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-600 text-center">Library Guidelines</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <p className="text-gray-700 text-center my-8">
                            The CITCI Library is committed to providing a quiet, respectful, and resource-rich environment for study and research.
                            All users are expected to observe silence, handle materials responsibly, and respect library policies.
                            Borrowing privileges, computer access, and study areas are available to support academic needs.
                        </p>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <section className="p-10 space-y-10 text-gray-900 bg-white max-w-5xl mx-auto leading-relaxed">
                                {libraryGuidelines.map((entry, idx) => (
                                    <div className="space-y-4" key={idx}>
                                        <h2 className="text-3xl font-extrabold text-blue-900">{entry.title}</h2>
                                        {entry.paragraphs?.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                        {entry.list && (
                                            <ul className="list-decimal list-inside ml-6 space-y-1">
                                                {entry.list.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </section>
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
