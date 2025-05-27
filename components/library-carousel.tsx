"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FacilitySlide {
    image: string
    title: string
    description: string
}

const facilities: FacilitySlide[] = [
    {
        image: "/placeholder.svg?height=600&width=1200&text=Reading+Area",
        title: "Quiet Reading Area",
        description: "A serene space designed for focused studying and reading.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200&text=Computer+Stations",
        title: "Computer Stations",
        description: "Fully equipped computer stations for research and academic work.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200&text=Study+Rooms",
        title: "Private Study Rooms",
        description: "Dedicated rooms for group discussions and project collaboration.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200&text=Children's+Corner",
        title: "Children's Corner",
        description: "A colorful section with books and activities for young readers.",
    },
    {
        image: "/placeholder.svg?height=600&width=1200&text=Archives",
        title: "Archives & Special Collections",
        description: "Access rare books, historical documents, and special materials.",
    },
]

export default function LibraryFacilitiesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === facilities.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? facilities.length - 1 : prev - 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-[500px] w-full overflow-hidden bg-gray-100">
            {/* Carousel slides */}
            {facilities.map((facility, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <Image
                            src={facility.image}
                            alt={facility.title}
                            fill
                            className="object-cover brightness-75"
                            priority={index === 0}
                        />
                    </div>

                    {/* Bottom-left content */}
                    <div className="absolute bottom-8 left-8 z-10 text-white max-w-md">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">{facility.title}</h2>
                        <p className="text-base md:text-lg">{facility.description}</p>
                    </div>
                </div>
            ))}

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                {facilities.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? "bg-amber-500" : "bg-white/50 hover:bg-white/80"}`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide ? "true" : "false"}
                    />
                ))}
            </div>
        </section>
    )
}
