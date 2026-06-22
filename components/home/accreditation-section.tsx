import Image from "next/image"

export default function AccreditationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-slate-700">
          Accreditation & Certification
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-20 bg-amber-500"></div>
        </div>
        <p className="mt-4 text-amber-600 max-w-2xl mx-auto">
          Candelaria Institute is recognized and accredited by national organizations, ensuring quality and accessible education for all students.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="text-center px-4">
            <div className="relative h-60 w-48 mx-auto mb-6">
              <Image
                src={"/images/tesda.png"}
                alt="TESDA"
                fill
                className=""
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">
              TESDA Accredited
            </h3>
            <p className="mt-2 text-slate-600">
              We offer programs recognized by the Technical Education and Skills Development Authority (TESDA), aligning with national competency standards.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="relative h-60 w-48 mx-auto  mb-6">
              <Image
                src={"/images/peac.png"}
                alt="PEAC"
                fill
                className=""
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-600">
              Educational Service Contracting PEAC Certified
            </h3>
            <p className="mt-2 text-slate-600">
              As a PEAC-certified institution, we participate in the ESC program to support affordable and quality private education for junior high school students.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
