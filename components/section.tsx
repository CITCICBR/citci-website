"use client";

type ContentSectionProps = {
    id?: string;
    grid: string;
    heading: string;
    intro: string;
    background: string;
    headingColor: string;
    textColor: string;
    children: React.ReactNode
    footer?: React.ReactNode
};

export default function ContentSection({
    id,
    grid,
    heading,
    intro,
    background,
    headingColor,
    textColor,
    children,
    footer
}: ContentSectionProps) {
    return (
        <section id={id} className={`py-20 ${background} ${headingColor}`}>
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-3xl font-bold text-center">{heading}</h2>
                <div className="mt-4 flex justify-center">
                    <div className="h-1 w-20 bg-amber-500"></div>
                </div>
                <p className={`mt-8 max-w-3xl mx-auto text-center ${textColor}`}>{intro}</p>
                <div className={`mt-16 grid gap-8 md:grid-cols-${grid} items-center`}>
                    {children}
                </div>
                {footer}
            </div>
        </section>
    );
}
