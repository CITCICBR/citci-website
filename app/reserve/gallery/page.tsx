"use client"

import { useState } from "react"
import Image from "next/image"
import { AlbumModal } from "@/components/album-modal"
import { Button } from "@/components/ui/button"

export default function NewsEventsPage() {
    const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null)
    const albums = [
        {
            id: "school-life",
            title: "School Life",
            description: "Daily activities and moments from around our campus",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
        {
            id: "spiritual-activities",
            title: "Spiritual Activities",
            description: "Masses, retreats, and prayer services",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
        {
            id: "academic-events",
            title: "Academic Events",
            description: "Science fairs, debates, and academic competitions",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
        {
            id: "sports",
            title: "Sports",
            description: "Athletic competitions and physical education activities",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
        {
            id: "arts",
            title: "Arts & Culture",
            description: "Music performances, art exhibitions, and cultural celebrations",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
        {
            id: "community-service",
            title: "Community Service",
            description: "Outreach programs and volunteer activities",
            coverImage: "/placeholder.svg?height=400&width=600",
            images: [
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
        },
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="News & Events"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Gallery</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                        Explore the vibrant life of our school community through our collection of photos showcasing academic,
                        spiritual, and extracurricular activities.
                    </p>
                </div>
            </section>

            {/* News & Events Tabs */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 w-full">
                                    <Image src={album.coverImage || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-600">{album.title}</h3>
                                    <p className="text-gray-600 mb-4">{album.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {album.images.slice(0, 3).map((image, index) => (
                                            <div key={index} className="relative h-16 w-16 rounded-md overflow-hidden">
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`${album.title} thumbnail ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                        {album.images.length > 3 && (
                                            <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-900 flex items-center justify-center">
                                                <span className="text-white font-medium">+{album.images.length - 3}</span>
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setSelectedAlbum(album)}
                                        className="mt-4 text-slate-600 font-medium hover:underline block"
                                    >
                                        View Album
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AlbumModal
                isOpen={!!selectedAlbum}
                onClose={() => setSelectedAlbum(null)}
                album={selectedAlbum}
            />
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
