import FadeIn from "@/components/fadein-transition"
import Image from "next/image"
import services from "../data.json"
import PageCTA from "@/components/page-cta"
export default function LibraryPage() {

    const { callToActionContent } = services
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
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Explore Zendy: Your Gateway to Knowledge</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Unlock a world of academic resources anytime, anywhere with Zendy—Candelaria Institute's trusted online
                            platform for research, learning, and discovery. Dive into thousands of journals, eBooks, and scholarly content to support your educational journey!
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Overview Section */}
            <section id="zendy" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <div className=" aspect-video w-full max-w-20xxl mx-auto rounded-xl overflow-hidden shadow-xl">
                        <div className="relative h-full w-full">
                            <iframe
                                title="Campus Map"
                                src="https://zendy.io/"
                                width="100%"
                                height="100%"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full border-0"
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
