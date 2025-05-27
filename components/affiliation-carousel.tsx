"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, } from "./ui/carousel"

interface AffiliateSlide {
    image: string
    name: string
}

interface CarouselProps {
    affilation: AffiliateSlide[]
}

export default function AffiliateCarousel({ affilation }: CarouselProps) {

    return (
        <div className="w-full max-w-6xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {affilation.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div key={index} className="text-center">
                                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-6">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-slate-600">{item.name}</h3>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
