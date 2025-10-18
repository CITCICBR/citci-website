import Image from "next/image"
import FadeIn from "@/components/fadein-transition"
import ContentSection from "@/components/section"
import administrationJson from "../data.json"
export default function AlumniAssociation() {
    const {alumniAssociation} = administrationJson
    
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
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Administration</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Meet the dedicated leadership team that guides our school community with wisdom, faith, and a commitment to
                            excellence in Catholic education.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {alumniAssociation.map((group, index) => (
                <ContentSection
                    id={group.id}
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
