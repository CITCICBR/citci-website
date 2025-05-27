import LibraryFacilitiesCarousel from "@/components/library-carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import guidelines from "./guidelines.json"
import FadeIn from "@/components/fadein-transition"

export default function LibraryPage() {
    const { libraryGuidelines } = guidelines
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
            <section className="py-12 bg-gray-50">
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

const collections = [
    {
        id: 1,
        name: "General Collection",
        icon: "📚",
        description: "Over 15,000 fiction and non-fiction titles spanning all grade levels and subject areas.",
    },
    {
        id: 2,
        name: "Reference Collection",
        icon: "🔍",
        description: "Encyclopedias, dictionaries, atlases, and other reference materials for in-library use.",
    },
    {
        id: 3,
        name: "Catholic Collection",
        icon: "✝️",
        description: "Books on Catholic theology, saints' lives, Church history, and spiritual formation.",
    },
    {
        id: 4,
        name: "Periodicals",
        icon: "📰",
        description: "Current and back issues of magazines and newspapers relevant to curriculum and student interests.",
    },
    {
        id: 5,
        name: "Audio-Visual Materials",
        icon: "🎧",
        description: "Educational DVDs, CDs, and audiobooks to support diverse learning styles.",
    },
    {
        id: 6,
        name: "Teacher Resources",
        icon: "👩‍🏫",
        description: "Professional development materials and curriculum resources for faculty use.",
    },
]

const services = [
    {
        id: 1,
        name: "Research Assistance",
        icon: "🔍",
        description:
            "Our librarians provide one-on-one help with research projects, citation formatting, and locating resources.",
    },
    {
        id: 2,
        name: "Information Literacy Instruction",
        icon: "📊",
        description: "Classroom sessions on research skills, digital citizenship, and evaluating information sources.",
    },
    {
        id: 3,
        name: "Reading Promotion",
        icon: "📖",
        description: "Book clubs, reading challenges, and author visits to foster a love of reading.",
    },
    {
        id: 4,
        name: "Technology Support",
        icon: "💻",
        description: "Assistance with educational technology tools, digital resources, and computer use.",
    },
    {
        id: 5,
        name: "Interlibrary Loan",
        icon: "🔄",
        description: "Access to materials from other libraries when resources are not available in our collection.",
    },
    {
        id: 6,
        name: "Study Spaces",
        icon: "🪑",
        description: "Quiet areas for individual study and collaborative spaces for group projects.",
    },
]

const digitalResources = [
    { id: 1, name: "EBSCO Host" },
    { id: 2, name: "JSTOR" },
    { id: 3, name: "Britannica School" },
    { id: 4, name: "World Book Online" },
    { id: 5, name: "Gale Resources" },
    { id: 6, name: "ProQuest" },
]
