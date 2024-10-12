"use client";
import Head from "next/head";
import Curve from "../components/Layout/Curve/Curve";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Teste from "@/components/teste/Teste";
import Teste2 from "@/components/teste/Teste2";
import ListImages from "@/components/ListImages";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoLogoInstagram } from "react-icons/io5";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        window.scrollTo(0, 0);

        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 1600);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            <Head>
                <title>Pedro Lucas</title>
                <meta name="description" content="Pedro Lucas Portifolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed right-0 top-1/2 flex -translate-y-1/2 transform flex-col space-y-4 pr-3">
                <a href="instagra"></a>
                <IoLogoInstagram size={20} />
                <IoLogoInstagram size={20} />
                <IoLogoInstagram size={20} />
            </div>

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
                <Teste2 />
                <ListImages />
            </Curve>
        </>
    );
}
