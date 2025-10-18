"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselSlide {
    image?: string
    video?: string
    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
}

const slides: CarouselSlide[] = [
    {
        image: "/images/banner.jpg",
        title: "Guided by the Light of a Star",
        subtitle: "Empowered by faith and service, we illuminate the path to lifelong learning and compassionate leadership.",
        buttonText: "Enroll Now",
        buttonLink: "/admissions/apply",
        secondaryButtonText: "Contact Us",
        secondaryButtonLink: "/admissions/visit",
    },
    {
        image: "/images/banner-1.png",
        title: "Excellence Rooted in Values",
        subtitle: "At CITCI, we nurture morally upright, intellectually equipped, and service-driven individuals ready to make a difference.",
        buttonText: "Our Academics",
        buttonLink: "/academics",
    },
    {
        image: "/images/banner-2.jpg",
        title: "Building Futures with Purpose",
        subtitle: "Through holistic education and inspired teaching, we prepare students to lead with integrity in a changing world.",
        buttonText: "Our Curriculum",
        buttonLink: "/academics/curriculum",
    },
]

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [fadeInClass, setFadeInClass] = useState("opacity-0 translate-y-4")

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    useEffect(() => {
        setFadeInClass("opacity-100 translate-y-0 transition-all duration-1000 ease-out") // Small delay before the transition starts
        const interval = setInterval(() => {
            nextSlide()
        }, 6000)

        return () => {
            // clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Carousel slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {/* Background image */}
                    <div className="absolute inset-0">
                        {slide.image && (
                            <Image
                                src={slide.image || "/images/banner.jpg"}
                                alt={slide.title}
                                fill
                                className="object-cover brightness-50"
                                priority={index === 0}
                            />
                        )}
                        {slide.video && (
                            <iframe
                                src={`https://www.facebook.com/100064053070090/videos/1518130332395907`}
                                className="h-full w-full object-cover"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        )}
                    </div>

                    {/* Content with fade-up transition */}
                    <div className={`transition-all ${fadeInClass} flex items-center justify-center h-full`}>
                        <div className="container px-4 text-center">
                            <div className="mb-6 flex justify-center">
                                <div className="relative h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80" >
                                    <Image
                                        src="/images/logo.png"
                                        alt="School Logo"
                                        fill
                                        className="object-contain h-100 w-100"
                                    />
                                </div>
                            </div>
                            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                {slide.title}
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-xl text-white">{slide.subtitle}</p>
                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-400">
                                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                                </Button>
                                {slide.secondaryButtonText && (
                                    <Button asChild size="lg" variant="outline" className="border-amber-600 text-amber-500 hover:bg-white/10 hover:text-primary">
                                        <Link href={slide.secondaryButtonLink || "#"}>{slide.secondaryButtonText}</Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ))}

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-black/50"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-black/50"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? "bg-amber-500" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentSlide ? "true" : "false"}
                    />
                ))}
            </div>
        </section>
    )
}
