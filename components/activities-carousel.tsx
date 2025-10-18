"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { School, Users, BookOpenIcon, Cross, Palette, Trophy } from "lucide-react"
import Image from "next/image"

const activities = [
    {
        image: "/images/school-activities/alumni.jpg",
        title: "50th Alumni Homecoming",
        description: `It was a blast! Here are some highlights from the Alumni Night showcasing different batches with their Boho-themed outfits! 
      Congratulations to all who made it possible, especially to the host batch of 1999!`,
    },
    {
        image: "/images/school-activities/founding-anniversary.jpg",
        title: "121st Founding Anniversary",
        description: "Candelarians played sports and parlor games with the spirit of camaraderie, enjoying the game while building friendship with each other.",
    },
    {
        image: "/images/school-activities/festival-of-talents.jpg",
        title: "Festival of Talents",
        description: `Elementary departments from Candelaria Institute of Technology of Cabadbaran, 
      Inc. and Fr. Urios Academic of Magallanes, Inc. showcased their God-given gifts in this year's Festival of Talents`,
    },
    {
        image: "/images/school-activities/athletics.jpg",
        title: "Division Athletic Meet",
        description: "Congratulations to our Candelarians who bagged a lot of medals last Division Athletic Meet held at Caraga State University Cabadbaran Campus",
    },
    {
        image: "/images/school-activities/bsp-gsp.jpg",
        title: "BSP & GSP Encampment",
        description: "Joint BSP and GSP Encampment Elementary department at Calo Farm, Brgy. Sanghan, Cabadbaran City. A memorable moment for our Frolicsome Candelarians",
    },
    {
        image: "/images/school-activities/rosary-month.jpg",
        title: "Rosary Month",
        description: "The culmination of the Month of Rosary. Candelarians prayed the Rosary and offered roses to the Blessed Virgin Mary. Afterwards, each section competed in the Parade of Mary",
    },
]

export default function ActivitiesCarousel() {
    return (
        <div className="w-full max-w-9xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {activities.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div key={index} className="relative h-[600px] rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute pt-24 bottom-0 w-full bg-gradient-to-t from-amber-500/100 to-transparent text-white p-4">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
