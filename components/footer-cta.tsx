import { Button } from "@/components/ui/button";

interface CTASectionProps {
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonAction?: () => void;
    secondaryButtonText: string;
    secondaryButtonAction?: () => void;
    className: string;
    children?: React.ReactNode;
}

export default function CTASection({
    title,
    description,
    primaryButtonText,
    primaryButtonAction,
    secondaryButtonText,
    secondaryButtonAction,
    className,
    children
}: CTASectionProps) {
    return (
        <section className={className}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl font-bold md:text-4xl">{title}</h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1 w-20 bg-amber-500"></div>
                    </div>
                    <p className="mt-8 text-lg text-slate-300">
                        {description}
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-amber-500 hover:bg-amber-400"
                            onClick={primaryButtonAction}
                        >
                            {primaryButtonText}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-primary border-primary hover:bg-white/10 hover:text-primary"
                            onClick={secondaryButtonAction}
                        >
                            {secondaryButtonText}
                        </Button>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
}
