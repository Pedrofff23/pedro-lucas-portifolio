import React, { useEffect, useState } from "react";
import { Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

const font = Caveat({
    weight: "700",
    subsets: ["latin"],
});

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {isVisible && (
                <header className="icons fixed top-0 z-50 mx-auto w-full px-4 py-10 sm:px-20">
                    <div className="flex items-center justify-between">
                        <div>teste</div>
                        <div className="absolute left-1/2 -translate-x-1/2 transform">
                            <Link
                                to="home"
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <div className="container flex items-center space-x-2">
                                    <h3
                                        className={cn(
                                            font.className,
                                            "text-2xl",
                                        )}
                                    >
                                        Pedro Lucas
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <a
                                className="rounded-full bg-[#121212] px-8 py-4 text-lg text-white"
                                href="mailto:email@provedor.com.br"
                            >
                                Entrar em contato
                            </a>
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
}

export default Navbar;
