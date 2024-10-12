"use client";
import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const anim = (variants) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
    };
};

export default function Curve({ children, backgroundColor }) {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    
    return (
        <div className="page curve" style={{ backgroundColor }}>
            <div
                style={{ opacity: dimensions.width == null ? 1 : 0 }}
                className="background"
            />
            {searchParams.toString() === "" ? (
                <>
                    <motion.p className="route" {...anim(text)}>
                        Pedro Lucas
                        <Image src="/Photos/IMG-20240628-WA0070.jpg" width={500} height={50} alt="Logo" />
                    </motion.p>
                </>
            ) : (
                <>
                
                </>
            )}

            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
}

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};