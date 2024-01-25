import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-center bg-sky-500">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-semibold text-white drop-shadow-md">
                    🔐 Auth test
                </h1>
                <p className="text-white text-lg">
                    A simple authentification service
                </p>
            </div>
        </main>
    );
}
