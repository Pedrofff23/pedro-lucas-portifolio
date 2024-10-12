"use client";
import ListImages from "@/components/ListImages";
import Navbar from "@/components/Navbar";
import Teste from "@/components/teste/Teste";
import Teste2 from "@/components/teste/Teste2";
import { ModeToggle } from "@/components/theme-toggle";
import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        // Disable scrolling
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        // Re-enable scrolling after the animation ends
        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 3000); // Match this duration with your animation duration

        // Cleanup timeout if the component unmounts before the animation ends
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div id="home" className="intro text-4xl sm:text-7xl">
                <h2>Pedro Lucas</h2>
            </div>

            <Navbar />
            <main >
                <div className="content">

                    <section className=" mx-auto max-w-3xl px-4 sn:px-6 md:max-w-5xl">
                        <HeroSection />
                    </section>
                </div>
                <div className="icons sm:fixed right-0 top-1/2 transform -translate-y-1/2 mr-10 ">
                    <div className="flex flex-col items-center space-y-4 rounded-l-lg">
                        <Instagram className="text-white text-xl" size={20} />
                        <Instagram className="text-white text-xl" size={20} />
                        <Instagram className="text-white text-xl" size={20} />
                    </div>
                </div>
            </main>

            <div className="flex min-h-screen items-center justify-center">
                <Teste />
            </div>
            <Teste2 />
            <ListImages />
        </>
    );
}
