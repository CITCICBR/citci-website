import { FileText, Download, FileArchive, FileIcon as FilePdf } from "lucide-react"
import Image from "next/image"


export default function DownloadsPage() {
    const downloadCategories = [
        {
            id: "forms",
            title: "Forms",
            description: "Essential forms for students and parents",
            items: [
                { name: "Student Information Form", type: "PDF", size: "245 KB", icon: FilePdf },
                { name: "Medical Authorization Form", type: "PDF", size: "198 KB", icon: FilePdf },
                { name: "Parent Volunteer Form", type: "PDF", size: "156 KB", icon: FilePdf },
                { name: "Field Trip Permission Form", type: "PDF", size: "132 KB", icon: FilePdf },
                { name: "Technology Acceptable Use Policy", type: "PDF", size: "210 KB", icon: FilePdf },
            ],
        },
        {
            id: "handbooks",
            title: "Handbooks & Policies",
            description: "School policies and guidelines",
            items: [
                { name: "Student Handbook 2023-2024", type: "PDF", size: "3.2 MB", icon: FileArchive },
                { name: "Parent Handbook 2023-2024", type: "PDF", size: "2.8 MB", icon: FileArchive },
                { name: "Uniform Policy", type: "PDF", size: "420 KB", icon: FilePdf },
                { name: "Academic Integrity Policy", type: "PDF", size: "380 KB", icon: FilePdf },
                { name: "School Calendar 2023-2024", type: "PDF", size: "520 KB", icon: FilePdf },
            ],
        },
        {
            id: "newsletters",
            title: "Newsletters",
            description: "School newsletters and updates",
            items: [
                { name: "September 2023 Newsletter", type: "PDF", size: "1.8 MB", icon: FileText },
                { name: "October 2023 Newsletter", type: "PDF", size: "2.1 MB", icon: FileText },
                { name: "November 2023 Newsletter", type: "PDF", size: "1.9 MB", icon: FileText },
                { name: "December 2023 Newsletter", type: "PDF", size: "2.3 MB", icon: FileText },
                { name: "January 2024 Newsletter", type: "PDF", size: "1.7 MB", icon: FileText },
            ],
        },
        {
            id: "curriculum",
            title: "Curriculum Resources",
            description: "Academic resources and materials",
            items: [
                { name: "Elementary Curriculum Overview", type: "PDF", size: "1.5 MB", icon: FileArchive },
                { name: "Middle School Curriculum Guide", type: "PDF", size: "1.8 MB", icon: FileArchive },
                { name: "High School Course Catalog", type: "PDF", size: "2.2 MB", icon: FileArchive },
                { name: "Summer Reading List 2024", type: "PDF", size: "450 KB", icon: FilePdf },
                { name: "Technology Resources Guide", type: "PDF", size: "680 KB", icon: FilePdf },
            ],
        },
    ]

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-1.png"
                        alt="News & Events"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">Downloads</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-white">
                        Access important school documents, forms, and resources that you can download and print.
                    </p>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-12">
                        {downloadCategories.map((category) => (
                            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6 border-b">
                                    <h2 className="text-2xl font-bold text-slate-600">{category.title}</h2>
                                    <p className="text-gray-600">{category.description}</p>
                                </div>
                                <div className="divide-y">
                                    {category.items.map((item, index) => {
                                        const Icon = item.icon
                                        return (
                                            <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
                                                <div className="flex items-center">
                                                    <Icon className="h-6 w-6 text-slate-600 mr-3" />
                                                    <div>
                                                        <p className="font-medium">{item.name}</p>
                                                        <p className="text-sm text-gray-500">
                                                            {item.type} • {item.size}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className="flex items-center text-primary hover:text-slate-600/80">
                                                    <Download className="h-5 w-5 mr-1" />
                                                    <span>Download</span>
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}
