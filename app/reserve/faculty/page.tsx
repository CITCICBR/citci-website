import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FacultyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.png"
            alt="Faculty & Staff"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Faculty & Staff</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Meet the dedicated educators and staff who make Candelaria Institute&apos;s special
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Our Dedicated Team</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Candelaria Institute&apos;s Catholic School is blessed with exceptional faculty and staff who are committed to
                our mission of providing a Christ-centered education. Our teachers are not only experts in their
                academic fields but also role models of faith and character.
              </p>
              <p>
                Our faculty members hold advanced degrees in their areas of expertise and participate in ongoing
                professional development to stay current with best practices in education. Many of our teachers have
                been with Candelaria Institute&apos;s for over a decade, providing stability and continuity for our students.
              </p>
              <p>
                Our staff members work behind the scenes to ensure that the school runs smoothly and that our students
                have everything they need to succeed. From our administrative team to our maintenance staff, every
                member of the Candelaria Institute&apos;s community plays an important role in fulfilling our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Staff Directory */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Faculty & Staff Directory</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <Tabs defaultValue="administration" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="administration">Administration</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="support-staff">Support Staff</TabsTrigger>
                <TabsTrigger value="extended-day">Extended Day</TabsTrigger>
              </TabsList>

              <TabsContent value="administration" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Fr. Michael Thomas",
                      position: "Pastor",
                      email: "frmichael@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 100",
                      bio: "Fr. Michael has served as pastor of Candelaria Institute Parish since 2015. He works closely with the school administration to ensure that the school fulfills its mission as a ministry of the parish.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Elizabeth Johnson",
                      position: "Principal",
                      email: "ejohnson@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 101",
                      bio: "Mrs. Johnson has been the principal of Candelaria Institute since 2018. She holds a Master's degree in Educational Leadership and has over 20 years of experience in Catholic education.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Dr. Robert Williams",
                      position: "Vice Principal",
                      email: "rwilliams@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 102",
                      bio: "Dr. Williams oversees curriculum development, student discipline, and teacher mentoring. He holds a Ph.D. in Education and has been with Candelaria Institute for 10 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Sarah Thompson",
                      position: "Director of Admissions",
                      email: "sthompson@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 103",
                      bio: "Mrs. Thompson manages the admissions process and serves as a liaison to prospective families. She has been with Candelaria Institute for 8 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. David Martinez",
                      position: "Business Manager",
                      email: "dmartinez@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 104",
                      bio: "Mr. Martinez oversees the school's finances, facilities, and non-instructional staff. He has a background in business administration and has served at Candelaria Institute for 5 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Jennifer Wilson",
                      position: "Administrative Assistant",
                      email: "jwilson@stcatherines.edu",
                      phone: "(555) 123-4567 ext. 105",
                      bio: "Mrs. Wilson manages the school office, assists with daily operations, and is often the first point of contact for visitors. She has been with Candelaria Institute for 12 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((person) => (
                    <Card key={person.name} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-slate-600">{person.name}</h3>
                          <p className="text-amber-500">{person.position}</p>
                          <div className="mt-4 space-y-2">
                            <p className="flex items-center justify-center">
                              <Mail className="mr-2 h-4 w-4 text-amber-500" />
                              <a href={`mailto:${person.email}`} className="hover:text-amber-500">
                                {person.email}
                              </a>
                            </p>
                            <p className="flex items-center justify-center">
                              <Phone className="mr-2 h-4 w-4 text-amber-500" />
                              <a href={`tel:${person.phone.replace(/\D/g, "")}`} className="hover:text-amber-500">
                                {person.phone}
                              </a>
                            </p>
                          </div>
                          <p className="mt-4 text-primary-600">{person.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Sr. Mary Catherine",
                      position: "Religion Department Chair",
                      email: "smcatherine@stcatherines.edu",
                      bio: "Sr. Mary Catherine has been teaching at Candelaria Institute for 15 years. She holds a Master's degree in Religious Education and is passionate about helping students develop a personal relationship with Jesus Christ.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Jennifer Martinez",
                      position: "Language Arts Department Chair",
                      email: "jmartinez@stcatherines.edu",
                      bio: "Mrs. Martinez is an award-winning educator with a passion for literature and writing. She inspires students to express themselves creatively and to think critically about what they read.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. Robert Davis",
                      position: "Mathematics Department Chair",
                      email: "rdavis@stcatherines.edu",
                      bio: "Mr. Davis has been teaching mathematics for over 15 years. He is known for making complex mathematical concepts accessible and engaging for students of all abilities.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Dr. Thomas Reynolds",
                      position: "Science Department Chair",
                      email: "treynolds@stcatherines.edu",
                      bio: "Dr. Reynolds brings 20 years of experience as a research scientist to his role as Science Department Chair. He is dedicated to helping students see the harmony between faith and science.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. Michael Anderson",
                      position: "Social Studies Department Chair",
                      email: "manderson@stcatherines.edu",
                      bio: "Mr. Anderson has a passion for history and civics. He helps students understand the past and its relevance to current events from a Catholic perspective.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Maria Rodriguez",
                      position: "Enrichment Department Chair",
                      email: "mrodriguez@stcatherines.edu",
                      bio: "Mrs. Rodriguez oversees the art, music, physical education, Spanish, and technology programs. She is committed to helping students discover and develop their God-given talents.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Patricia Brown",
                      position: "Kindergarten Teacher",
                      email: "pbrown@stcatherines.edu",
                      bio: "Mrs. Brown has been teaching kindergarten for 18 years. She creates a nurturing environment where young children develop a love of learning through play and exploration.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Ms. Emily Davis",
                      position: "1st Grade Teacher",
                      email: "edavis@stcatherines.edu",
                      bio: "Ms. Davis specializes in early literacy and numeracy. She helps first graders build strong foundations in reading, writing, and mathematics.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Laura Wilson",
                      position: "3rd Grade Teacher",
                      email: "lwilson@stcatherines.edu",
                      bio: "Mrs. Wilson creates a classroom environment that fosters curiosity, critical thinking, and collaboration. She is known for her innovative teaching methods.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((person) => (
                    <Card key={person.name} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-slate-600">{person.name}</h3>
                          <p className="text-amber-500">{person.position}</p>
                          <p className="flex items-center justify-center mt-2">
                            <Mail className="mr-2 h-4 w-4 text-amber-500" />
                            <a href={`mailto:${person.email}`} className="hover:text-amber-500">
                              {person.email}
                            </a>
                          </p>
                          <p className="mt-4 text-primary-600">{person.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="support-staff" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Mrs. Susan Miller",
                      position: "School Counselor",
                      email: "smiller@stcatherines.edu",
                      bio: "Mrs. Miller provides social-emotional support for students and resources for families. She holds a Master's degree in School Counseling and has been with Candelaria Institute for 7 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Sarah Johnson",
                      position: "Librarian",
                      email: "sjohnson@stcatherines.edu",
                      bio: "Mrs. Johnson manages the school library, teaches library skills, and fosters a love of reading among students. She has been with Candelaria Institute for 10 years.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. James Wilson",
                      position: "Technology Coordinator",
                      email: "jwilson@stcatherines.edu",
                      bio: "Mr. Wilson oversees the school's technology infrastructure, provides technical support, and assists teachers with integrating technology into their lessons.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Karen Thompson",
                      position: "Resource Teacher",
                      email: "kthompson@stcatherines.edu",
                      bio: "Mrs. Thompson provides additional support for students with diverse learning needs. She works with classroom teachers to develop strategies that help all students succeed.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mrs. Mary Davis",
                      position: "School Nurse",
                      email: "mdavis@stcatherines.edu",
                      bio: "Mrs. Davis oversees student health services, administers medications, and provides first aid. She is a registered nurse with experience in pediatric care.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. Robert Thompson",
                      position: "Facilities Manager",
                      email: "rthompson@stcatherines.edu",
                      bio: "Mr. Thompson oversees the maintenance and security of the school campus. He ensures that our facilities provide a safe, clean, and comfortable learning environment.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((person) => (
                    <Card key={person.name} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-slate-600">{person.name}</h3>
                          <p className="text-amber-500">{person.position}</p>
                          <p className="flex items-center justify-center mt-2">
                            <Mail className="mr-2 h-4 w-4 text-amber-500" />
                            <a href={`mailto:${person.email}`} className="hover:text-amber-500">
                              {person.email}
                            </a>
                          </p>
                          <p className="mt-4 text-primary-600">{person.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="extended-day" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Mrs. Patricia Martinez",
                      position: "Extended Day Director",
                      email: "pmartinez@stcatherines.edu",
                      bio: "Mrs. Martinez oversees the before and after school care program. She creates a safe, nurturing environment where students can complete homework, engage in enrichment activities, and play.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Mr. David Johnson",
                      position: "Extended Day Assistant",
                      email: "djohnson@stcatherines.edu",
                      bio: "Mr. Johnson assists with the extended day program, focusing on outdoor activities and sports. He is known for his energy and enthusiasm.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Ms. Jennifer Wilson",
                      position: "Extended Day Assistant",
                      email: "jwilson@stcatherines.edu",
                      bio: "Ms. Wilson assists with the extended day program, specializing in arts and crafts activities. She helps students express their creativity after school hours.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((person) => (
                    <Card key={person.name} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative h-40 w-40 rounded-full overflow-hidden mb-6">
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-slate-600">{person.name}</h3>
                          <p className="text-amber-500">{person.position}</p>
                          <p className="flex items-center justify-center mt-2">
                            <Mail className="mr-2 h-4 w-4 text-amber-500" />
                            <a href={`mailto:${person.email}`} className="hover:text-amber-500">
                              {person.email}
                            </a>
                          </p>
                          <p className="mt-4 text-primary-600">{person.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Faculty Qualifications</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  Candelaria Institute&apos;s Catholic School is committed to hiring and retaining highly qualified faculty who
                  are dedicated to our mission and to the success of each student. Our teachers:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hold bachelor&apos;s degrees, with many having advanced degrees in their fields</li>
                  <li>Are certified teachers with specialized training in their subject areas</li>
                  <li>Participate in ongoing professional development</li>
                  <li>Are practicing Catholics who model the faith for their students</li>
                  <li>Have an average of 12 years of teaching experience</li>
                  <li>Maintain current certification in CPR and first aid</li>
                </ul>
                <p>
                  Our faculty members are not only excellent educators but also caring mentors who are committed to the
                  spiritual, intellectual, and personal growth of each student. They create classroom environments that
                  are both challenging and supportive, helping students develop their God-given talents and achieve
                  their full potential.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Candelaria Institute faculty"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl md:order-last">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Professional development"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-600">Professional Development</h2>
              <div className="mt-4">
                <div className="h-1 w-20 bg-amber-500"></div>
              </div>
              <div className="mt-8 space-y-4 text-primary-600">
                <p>
                  Candelaria Institute&apos;s is committed to the ongoing professional growth of our faculty and staff. We
                  believe that investing in our teachers benefits our students by ensuring that they receive the highest
                  quality education.
                </p>
                <p>Our professional development program includes:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Monthly faculty meetings focused on best practices in education</li>
                  <li>Diocesan in-service days and workshops</li>
                  <li>Opportunities to attend conferences and seminars in specialized areas</li>
                  <li>Collaboration with other Catholic schools in our diocese</li>
                  <li>Mentoring program for new teachers</li>
                  <li>Summer institutes and workshops</li>
                  <li>Faith formation opportunities for spiritual growth</li>
                </ul>
                <p>
                  Our teachers are lifelong learners who model intellectual curiosity and a commitment to growth for
                  their students. They bring the latest research-based teaching strategies to their classrooms while
                  remaining grounded in the timeless values of our Catholic faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Opportunities */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center">Employment Opportunities</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-slate-300">
            Join our team of dedicated educators and staff who are committed to providing an exceptional Catholic
            education.
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-700 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold">Current Openings</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-bold">Middle School Science Teacher</h4>
                  <p className="text-slate-300 mt-2">
                    Full-time position teaching science to grades 6-8. Candidates must have a bachelor&apos;s degree in
                    science or education, teaching certification, and experience teaching middle school science.
                    Catholic candidates preferred.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Elementary School Aide</h4>
                  <p className="text-slate-300 mt-2">
                    Part-time position assisting teachers in grades K-3. Candidates must have experience working with
                    young children and a commitment to Catholic education.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Substitute Teachers</h4>
                  <p className="text-slate-300 mt-2">
                    We are always accepting applications for substitute teachers at all grade levels. Candidates must
                    have a bachelor&apos;s degree and experience working with children.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold">How to Apply</h3>
                <div className="mt-2">
                  <div className="h-1 w-12 bg-amber-500"></div>
                </div>
                <p className="mt-4 text-slate-300">
                  To apply for a position at Candelaria Institute&apos;s Catholic School, please submit the following to{" "}
                  <a href="mailto:employment@stcatherines.edu" className="text-amber-400 hover:underline">
                    employment@stcatherines.edu
                  </a>
                  :
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-300">
                  <li>Cover letter indicating the position you are applying for</li>
                  <li>Current resume</li>
                  <li>Copy of teaching certificate (if applicable)</li>
                  <li>College transcripts</li>
                  <li>Three professional references</li>
                  <li>Philosophy of Catholic education (1-2 paragraphs)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
