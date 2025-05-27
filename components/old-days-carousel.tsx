"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Activity = {
    image: string;
    title: string;
};

export default function OldDaysCarousel({ activities }: { activities: Activity[] }) {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {activities.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-700/100 to-transparent text-white p-4">
                                    <h3 className="text-lg font-bold pt-20">{item.title}</h3>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
