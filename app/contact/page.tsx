import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FadeIn from "@/components/fadein-transition"
import contactData from './contact.json';
import PageCTA from "@/components/page-cta"

export default function ContactPage() {
  const {
    contactInformation,
    heroSection,
    mapSection,
    departmentDirectory,
    ctaSection } = contactData;
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Contact Candelaria Institute"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <FadeIn>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">{heroSection.title}</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
              {heroSection.description}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">{contactInformation.header}</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  {contactInformation.welcomeMessage}
                </p>
                <p>
                  Our office staff is available Monday through Friday during school hours to assist you. We look forward
                  to hearing from you!
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mr-4">
                    <MapPin className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-600">Address</h3>
                    <p className="mt-1 text-primary-600">
                      {contactInformation.address.line1}
                      <br />
                      {contactInformation.address.city}, {contactInformation.address.province}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mr-4">
                    <Phone className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-600">Phone</h3>
                    <p className="mt-1 text-primary-600">
                      {contactInformation.phone}
                      <br />
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mr-4">
                    <Mail className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-600">Email</h3>
                    <p className="mt-1 text-primary-600">
                      {contactInformation.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 mr-4">
                    <Clock className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-600">Office Hours</h3>
                    <p className="mt-1 text-primary-600">
                      {contactInformation.officeHours.days}
                      <br />
                      Closed on weekends and holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold text-slate-600">Contact Form</h3>
                  <p className="mt-2 text-primary-600">
                    Please fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="tuition">Tuition & Financial Aid</SelectItem>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-400">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">{mapSection.header}</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            {mapSection.description}
          </p>

          <div className="mt-12 aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <div className="relative h-full w-full">
              <iframe
                title="Campus Map"
                src={mapSection.mapEmbedUrl}
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

      {/* Department Directory */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">{departmentDirectory.header}</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            {departmentDirectory.description}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departmentDirectory.departments.map((item, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-slate-600">{item.department}</h3>
                  <div className="mt-2">
                    <div className="h-0.5 w-12 bg-amber-500"></div>
                  </div>
                  <div className="mt-4 space-y-2 text-primary-600">
                    <p>{item.contact}</p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-amber-500" />
                      <a href={`mailto:${item.email}`} className="hover:text-amber-500">
                        {item.email}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-amber-500" />
                      <a href={`tel:${item.phone.replace(/\D/g, "")}`} className="hover:text-amber-500">
                        {item.phone}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        heading={ctaSection.header}
        description={ctaSection.description}
        buttons={ctaSection.buttons}
        color={"bg-amber-500"}
      />
    </main>
  )
}
