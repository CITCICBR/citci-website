import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Gift, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fadein-transition"
import sholarship from "./scholarship.json"
import PageCTA from "@/components/page-cta"

export default function ScholarshipPage() {
    const { scholarshipContent, callToActionContent } = sholarship
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="Scholarships"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <FadeIn>
                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Scholarships</h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                            Explore financial assistance programs available to qualified students
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Overview */}
            <section id="overview" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-3xl font-bold text-slate-600">Scholarship Overview</h2>
                        <div className="mt-4 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500"></div>
                        </div>
                        <div className="mt-8 space-y-4 text-primary-600">
                            <p>
                                Candelaria Institute is committed to making quality education accessible to all.
                            </p>
                            <p>
                                Our institution offers various scholarships and financial aid programs in partnership with government agencies to assist students in need.
                            </p>
                            <p>
                                These programs aim to support academic advancement, vocational skills development, and upliftment of underserved communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Categories */}
            <section id="scholarships" className="py-20 bg-sky-50">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Types of Scholarships</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>

                    <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                        {scholarshipContent.map((scholarship, index) => (
                            <Card key={index} className="border-none shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500">
                                            <Gift className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-center text-slate-600">{scholarship.title}</h3>
                                    <p className="mt-4 text-center text-primary-600">{scholarship.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <PageCTA
                heading={callToActionContent.heading}
                description={callToActionContent.description}
                buttons={callToActionContent.buttons}
                color="bg-amber-500"
            />
        </main>
    )
}
