import type { Metadata } from "next";
import Favicon from '/public/logo.ico';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "./styles.scss";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Pedro Lucas",
    description: "Pedro Lucas Portifolio",
    icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <MaxWidthWrapper>{children}</MaxWidthWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
