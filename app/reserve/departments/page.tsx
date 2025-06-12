import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen">
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
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Academic Departments</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
            Meet our dedicated faculty and explore our academic offerings
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-600">Our Academic Departments</h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <div className="mt-8 space-y-4 text-primary-600">
              <p>
                Candelaria Institute&apos;s Catholic School is organized into academic departments that work collaboratively to
                provide a comprehensive, faith-integrated education. Our dedicated faculty members are experts in their
                fields and are committed to helping students reach their full potential.
              </p>
              <p>
                Each department is led by a department chair who oversees curriculum development, instructional
                practices, and professional development. Our teachers participate in ongoing professional learning to
                stay current with best practices and to continually enhance their teaching skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Explore Our Departments</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <Tabs defaultValue="religion" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="religion">Religion</TabsTrigger>
                <TabsTrigger value="language-arts">Language Arts</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="social-studies">Social Studies</TabsTrigger>
                <TabsTrigger value="enrichment">Enrichment</TabsTrigger>
              </TabsList>

              <TabsContent value="religion" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Religion Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Religion Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Religion Department is at the heart of our Catholic identity. Our religion teachers are
                        certified catechists who are passionate about sharing the Catholic faith with students and
                        helping them develop a personal relationship with Jesus Christ.
                      </p>
                      <p>
                        The department oversees religious instruction at all grade levels, sacramental preparation,
                        liturgical celebrations, prayer services, retreats, and service learning opportunities. Religion
                        teachers work closely with our parish priests and the diocesan Office of Catholic Schools to
                        ensure that our program is faithful to Church teachings.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Sr. Mary Catherine, Department Chair (Middle School Religion)</li>
                        <li>Mrs. Elizabeth Davis (Elementary Religion)</li>
                        <li>Fr. Michael Thomas (Sacramental Preparation)</li>
                        <li>Mrs. Sarah Johnson (Early Childhood Religion)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="language-arts" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Language Arts Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Language Arts Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Language Arts Department is dedicated to developing strong reading, writing, speaking, and
                        listening skills. Our language arts teachers foster a love of literature and help students
                        become effective communicators.
                      </p>
                      <p>
                        The department offers a comprehensive program that includes phonics, reading comprehension,
                        grammar, composition, vocabulary development, and literature analysis. Students are exposed to a
                        variety of literary genres and are encouraged to think critically about what they read.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mrs. Jennifer Martinez, Department Chair (Middle School Language Arts)</li>
                        <li>Ms. Rebecca Thompson (5th Grade Language Arts)</li>
                        <li>Mrs. Laura Wilson (3rd-4th Grade Language Arts)</li>
                        <li>Ms. Emily Davis (1st-2nd Grade Language Arts)</li>
                        <li>Mrs. Patricia Brown (Kindergarten Language Arts)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mathematics" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Mathematics Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Mathematics Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Mathematics Department is committed to developing students&apos; mathematical thinking,
                        problem-solving skills, and appreciation for the beauty and order of mathematics. Our math
                        teachers use a variety of instructional approaches to meet the needs of all learners.
                      </p>
                      <p>
                        The department offers a sequential program that builds conceptual understanding, procedural
                        fluency, and application skills. Students engage in hands-on activities, collaborative
                        problem-solving, and real-world applications of mathematical concepts.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mr. Robert Davis, Department Chair (Middle School Mathematics)</li>
                        <li>Mrs. Susan Miller (5th Grade Mathematics)</li>
                        <li>Mr. James Wilson (3rd-4th Grade Mathematics)</li>
                        <li>Mrs. Karen Thompson (1st-2nd Grade Mathematics)</li>
                        <li>Ms. Michelle Garcia (Kindergarten Mathematics)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="science" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Science Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Science Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Science Department fosters scientific literacy, inquiry skills, and an appreciation for
                        God&apos;s creation. Our science teachers engage students in hands-on experiments and
                        investigations that develop critical thinking and problem-solving skills.
                      </p>
                      <p>
                        The department offers a comprehensive program that includes life, earth, and physical sciences.
                        Students learn scientific concepts and principles through inquiry-based learning, laboratory
                        experiences, and field studies. The curriculum integrates Catholic teachings on stewardship of
                        creation and the relationship between faith and science.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Dr. Thomas Reynolds, Department Chair (Middle School Science)</li>
                        <li>Mrs. Catherine Lee (5th Grade Science)</li>
                        <li>Mr. David Johnson (3rd-4th Grade Science)</li>
                        <li>Ms. Sarah Williams (1st-2nd Grade Science)</li>
                        <li>Mrs. Elizabeth Brown (Kindergarten Science)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="social-studies" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Social Studies Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Social Studies Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Social Studies Department helps students understand history, geography, cultures, and civic
                        responsibility from a Catholic perspective. Our social studies teachers foster critical
                        thinking, cultural awareness, and an appreciation for diverse perspectives.
                      </p>
                      <p>
                        The department offers a comprehensive program that includes history, geography, economics, and
                        civics. Students learn about their role as global citizens and develop an understanding of
                        Catholic social teaching and its application to historical and contemporary issues.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mr. Michael Anderson, Department Chair (Middle School Social Studies)</li>
                        <li>Mrs. Patricia Martinez (5th Grade Social Studies)</li>
                        <li>Ms. Jennifer Wilson (3rd-4th Grade Social Studies)</li>
                        <li>Mr. Robert Thompson (1st-2nd Grade Social Studies)</li>
                        <li>Mrs. Mary Johnson (Kindergarten Social Studies)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="enrichment" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Enrichment Department"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">Enrichment Department</h3>
                    <div className="mt-2">
                      <div className="h-1 w-12 bg-amber-500"></div>
                    </div>
                    <div className="mt-4 space-y-4 text-primary-600">
                      <p>
                        The Enrichment Department provides specialized instruction in art, music, physical education,
                        Spanish, and technology. Our enrichment teachers help students develop their talents, explore
                        new interests, and grow in areas beyond the core academic subjects.
                      </p>
                      <p>
                        The department offers a variety of programs that enhance the core curriculum and provide
                        opportunities for creative expression, physical activity, language acquisition, and
                        technological literacy. These programs contribute to the development of the whole child and help
                        students discover and develop their God-given talents.
                      </p>
                      <h4 className="font-serif text-lg font-bold text-slate-600 mt-6">Department Faculty</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Mrs. Maria Rodriguez, Department Chair (Art)</li>
                        <li>Mr. James Wilson (Physical Education)</li>
                        <li>Ms. Elizabeth Davis (Music)</li>
                        <li>Señora Carmen Lopez (Spanish)</li>
                        <li>Mr. David Thompson (Technology)</li>
                        <li>Mrs. Sarah Johnson (Library)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Faculty Spotlight</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Meet some of our outstanding faculty members who are dedicated to providing an exceptional Catholic
            education.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sr. Mary Catherine",
                position: "Religion Department Chair",
                bio: "Sr. Mary Catherine has been teaching at Candelaria Institute for 15 years. She holds a Master's degree in Religious Education and is passionate about helping students develop a personal relationship with Jesus Christ.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Thomas Reynolds",
                position: "Science Department Chair",
                bio: "Dr. Reynolds brings 20 years of experience as a research scientist to his role as Science Department Chair. He is dedicated to helping students see the harmony between faith and science.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Jennifer Martinez",
                position: "Language Arts Department Chair",
                bio: "Mrs. Martinez is an award-winning educator with a passion for literature and writing. She inspires students to express themselves creatively and to think critically about what they read.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((faculty) => (
              <Card key={faculty.name} className=" shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-48 w-48 rounded-full overflow-hidden mb-6">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-600">{faculty.name}</h3>
                    <p className="text-amber-500">{faculty.position}</p>
                    <p className="mt-4 text-primary-600">{faculty.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/faculty" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400">
              Meet our full faculty
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Department Resources */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-slate-600">Department Resources</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-amber-500"></div>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-primary-600">
            Our academic departments provide various resources to support student learning and parent involvement.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Curriculum Guides</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Each department provides detailed curriculum guides that outline learning objectives, content standards,
                and major units of study for each grade level.
              </p>
              <div className="mt-6">
                <Link
                  href="/academics/curriculum"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  View curriculum guides
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Homework Help</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Departments offer resources to support students with homework, including study guides, practice
                problems, and online tutorials. Teachers are also available for extra help during designated times.
              </p>
              <div className="mt-6">
                <Link
                  href="/academics/homework-help"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Access homework resources
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Enrichment Opportunities</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Departments provide information about academic competitions, clubs, summer programs, and other
                enrichment opportunities that allow students to explore their interests and develop their talents.
              </p>
              <div className="mt-6">
                <Link
                  href="/student-life/clubs"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Explore enrichment opportunities
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Parent Resources</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Departments provide resources to help parents support their child&apos;s learning at home, including
                reading lists, educational websites, and tips for reinforcing classroom learning.
              </p>
              <div className="mt-6">
                <Link
                  href="/parent-resources"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Access parent resources
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Technology Resources</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Departments utilize various educational technologies to enhance learning. Information about these tools,
                including login instructions and user guides, is available for students and parents.
              </p>
              <div className="mt-6">
                <Link
                  href="/academics/technology"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Access technology resources
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-600">Department News</h3>
              <div className="mt-2">
                <div className="h-1 w-12 bg-amber-500"></div>
              </div>
              <p className="mt-4 text-primary-600">
                Stay updated on department activities, student achievements, upcoming events, and curriculum highlights
                through department newsletters and the school blog.
              </p>
              <div className="mt-6">
                <Link
                  href="/news-events"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400"
                >
                  Read department news
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold">Meet Our Faculty</h2>
            <p className="mt-6 text-lg">
              We invite you to visit our campus and meet our dedicated faculty members. Schedule a tour or attend an
              open house to learn more about our academic programs and see our teachers in action.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions/visit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-amber-500 shadow transition-colors hover:bg-slate-100"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-400"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
