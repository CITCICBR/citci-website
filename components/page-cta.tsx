import Link from "next/link";

interface CTASectionProps {
    heading: string;
    description: string;
    buttons: any;
    color: string;
}

export default function PageCTA({
    heading,
    description,
    buttons,
    color
}: CTASectionProps) {
    return (
        <section className={`py-20 ${color} text-white`}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl font-bold">{heading}</h2>
                    <p className="mt-6 text-lg">{description}</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {buttons.map((button: any, index: number) => (
                            <Link
                                key={index}
                                href={button.href}
                                className={`inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow 
                                    transition-colors border border-white bg-white text-amber-500 hover:bg-amber-500 hover:text-white`}
                            >
                                {button.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
