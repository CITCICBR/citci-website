"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { School, Users, BookOpenIcon, Cross, Palette, Trophy } from "lucide-react"
import Image from "next/image"

const features = [
    {
        title: "Facilities",
        description: "Classrooms, science labs, library, and athletic facilities designed to enhance learning.",
        icon: <School className="h-8 w-8 text-amber-500" />,
        image: "/images/facilities.jpg",
        link: "/about/facilities",
    },
    {
        title: "Dedicated Faculty",
        description: "Experienced teachers committed to academic excellence and Catholic values.",
        icon: <Users className="h-8 w-8 text-amber-500" />,
        image: "/images/dedicated-faculty.jpg",
        link: "/faculty",
    },
    {
        title: "Academic Excellence",
        description: "Rigorous curriculum preparing students for success in college and beyond.",
        icon: <BookOpenIcon className="h-8 w-8 text-amber-500" />,
        image: "/images/academic-excellence.jpg",
        link: "/academics",
    },
    {
        title: "Community Engagement",
        description: "Instilling a spirit of service and social responsibility in every student.",
        icon: <Cross className="h-8 w-8 text-amber-500" />,
        image: "/images/community-engagement.jpg",
        link: "/faith-life",
    },
    {
        title: "Faith Formation",
        description: "Daily prayer, regular Mass, and religious education nurturing spiritual growth.",
        icon: <Palette className="h-8 w-8 text-amber-500" />,
        image: "/images/faith-formation.jpg",
        link: "/student-life/arts",
    },
]

export default function DiscoverCarousel() {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {features.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div key={index} className="relative h-[600px] rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 pt-20 w-full bg-gradient-to-t from-amber-500/90 to-transparent text-white p-4 z-10">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="text-sm mt-1 text-white">{item.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
