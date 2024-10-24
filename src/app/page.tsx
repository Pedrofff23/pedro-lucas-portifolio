"use client";
import Head from "next/head";
import Curve from "../components/Layout/Curve/Curve";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Teste from "@/components/teste/Teste";
import Teste2 from "@/components/teste/Teste2";
// import ListImages from "@/components/ListImages";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoLogoInstagram } from "react-icons/io5";
import GetImages from "@/components/Gallery/GetImages";

export default function Home() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 1500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {isVisible && (
                <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 transform flex-col space-y-4 pr-3">
                    <a href="instagram">
                        <IoLogoInstagram size={20} />
                    </a>
                    <IoLogoInstagram size={20} />
                    <IoLogoInstagram size={20} />
                </div>
            )}
            <Curve backgroundColor={undefined}>
                <Navbar />
                <main>
                    <div className="content">
                        <section className="sn:px-6 mx-auto max-w-3xl px-4 md:max-w-5xl">
                            <HeroSection />
                        </section>
                    </div>
                    <div className="icons right-0 top-1/2 mr-10 -translate-y-1/2 transform sm:fixed">
                        <div className="flex flex-col items-center space-y-4 rounded-l-lg"></div>
                    </div>
                </main>

                <div className="flex min-h-screen items-center justify-center">
                    <Teste />
                </div>
                <div>
                    <Teste2 />
                </div>
            </Curve>
                <div>
                    <GetImages />
                </div>
        </>
    );
}
