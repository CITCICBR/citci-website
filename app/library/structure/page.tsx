import Image from "next/image"
import FadeIn from "@/components/fadein-transition"
import ContentSection from "@/components/section"
export default function MissionPage() {

    const personnelData = [
        {
            heading: "President",
            intro: "Meet the visionary leader guiding the mission and direction of our institution.",
            members: [
                { name: "Rev. Fr. Marlon Lacal", position: "School President", image: "/images/faculty/lacal-m.jpg" },
            ],
        },
        {
            heading: "Academic Head",
            intro: "Get to know the academic leaders dedicated to nurturing and educating our young learners.",
            members: [
                { name: "Maria Lavella J. Torregosa", position: "Academic Head", image: "/images/faculty/torregosa-ml.jpg" },
            ],
        },
        {
            heading: "OSAS",
            intro: "Meet the personnel ensuring holistic student development through support and services.",
            members: [
                { name: "Charlot Dacera", position: "OSAS", image: "/images/faculty/dacera-c.jpg" },
            ],
        },
        {
            heading: "Librarian",
            intro: "Introducing our librarian who ensures access to knowledge and resources for the school community.",
            members: [
                { name: "Christian James P. Quimzon", position: "Librarian", image: "/images/faculty/quimzon-c.jpg" },
            ],
        },
        {
            heading: "Library Staff",
            intro: "Meet our dedicated library staff who support learning through resource management and student assistance.",
            members: [
                { name: "Marie Jean P. Dagandara", position: "Library Staff", image: "/images/faculty/dagandara-m.jpg" },
                { name: "Riza O. Sagaysay", position: "Library Staff", image: "/images/faculty/sagaysay-r.jpg" },
            ],
        },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="Mission & Vision"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <FadeIn>
                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Organizational Structure</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Meet the dedicated leadership team that guides our school community with wisdom, faith, and a commitment to
                            excellence in education.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {personnelData.map((group, index) => (
                <ContentSection
                    key={index}
                    grid={group.members.length === 1 ? "1" : "2"}
                    background={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    headingColor="text-slate-600"
                    textColor="text-black"
                    heading={group.heading}
                    intro={group.intro}
                >
                    {group.members.map((member, i) => (
                        <div key={i} className="text-center">
                            <div className="relative h-80 w-60 mx-auto rounded-lg overflow-hidden mb-6 bg-white shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-bold text-slate-600">{member.name}</h3>
                            <p className="text-amber-500">{member.position}</p>
                        </div>
                    ))}
                </ContentSection>
            ))}
        </main>
    )
}
