"use client"
import FadeIn from "@/components/fadein-transition"
import PageCTA from "@/components/page-cta"
import Image from "next/image"
import _facilities from "../data.json"
import { useState } from "react"
import { AlbumModal } from "@/components/album-modal"
export default function FacilitiesPage() {
  const { callToActionContent, facilitiesContent } = _facilities

  const [selectedAlbum, setSelectedAlbum] = useState<typeof facilitiesContent[0] | null>(null)

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
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Our Facilities</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              Simple, safe, and student-centered—our facilities reflect our commitment to quality education and care.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-4">Creating Spaces for Excellence</h2>
            <p className="text-gray-700">
              While modest in scale, the facilities at Candelaria Institute are thoughtfully maintained to support a safe,
              nurturing, and engaging learning environment. Each space is purposefully designed to foster growth—academically,
              spiritually, and socially—reflecting our deep commitment to quality education and community-centered development.
            </p>
          </div>
        </div>
      </section>

      <section id="facilities" className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesContent.map((album) => (
              <div
                id={album.id}
                key={album.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image src={album.coverImage || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {album.images.slice(0, 3).map((image, index) => (
                      <div key={index} className="relative h-10 w-10 rounded-md overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${album.title} thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {album.images.length > 3 && (
                      <div className="relative h-10 w-10 rounded-md overflow-hidden bg-gray-900 flex items-center justify-center">
                        <span className="text-white font-medium">+{album.images.length - 3}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-600">{album.title}</h3>
                  <p className="text-gray-600 mb-4">{album.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {album.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

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

      {/* Campus Map Section */}
      <section id="campus-map" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-600 mb-6 text-center">
              Campus Map
            </h2>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.56055381051993!2d125.53153360518368!3d9.123507027660576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301a2d2eb260d91%3A0xbc1c12349dcf14df!2sCandelaria%20Institute%20of%20Technology%20of%20Cabadbaran%20Inc.!5e1!3m2!1sen!2sph!4v1746866947639!5m2!1sen!2sph"
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