
import Link from 'next/link';
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
            <h1 className="text-9xl font-bold text-slate-700 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Oops! This page does not exist.</p>
            <Link href="/">
                <Button>Go to Home</Button>
            </Link>
        </div>
    );
}