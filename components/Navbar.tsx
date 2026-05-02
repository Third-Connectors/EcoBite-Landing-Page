"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Cara Kerja", href: "/#cara-kerja" },
    { label: "Untuk Restoran", href: "/untuk-restoran" },
    { label: "Untuk Pembeli", href: "/untuk-pembeli" },
    { label: "Limbah Organik", href: "/limbah-organik" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header
                style={{ fontFamily: "var(--font-body)" }}
                className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--ink)]/10"
            >
                <div className="max-w-7xl mx-auto px-5 md:px-10 h-14 md:h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden">
                            <Image
                                src="/logo.webp"
                                alt="EcoBite Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span
                            style={{ fontFamily: "var(--font-display)" }}
                            className="text-lg md:text-xl text-[var(--ink)] group-hover:text-[var(--green)] transition-colors duration-200"
                        >
                            EcoBite
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink-soft)]">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover-underline hover:text-[var(--green)] transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full px-5 text-[var(--ink)] border-[var(--ink)]/20 hover:bg-[var(--ink)]/5 gap-2"
                            asChild
                        >
                            <a href="/ecobite.apk" download="ecobite.apk">
                                Download App
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </Button>
                        <Button
                            size="sm"
                            className="bg-[var(--green)] text-white rounded-full px-5 hover:bg-[var(--green-dark)] gap-2"
                            asChild
                        >
                            <Link href="#">
                                Mulai Sekarang
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <span
                            className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-[1.5px] bg-[var(--ink)] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-[var(--ink)]/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setOpen(false)}
                />

                {/* Drawer panel */}
                <div
                    className={`absolute top-14 left-0 right-0 bg-[var(--cream)] border-b border-[var(--ink)]/10 shadow-xl transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col px-5 py-4" style={{ fontFamily: "var(--font-body)" }}>
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="py-3.5 text-base font-medium text-[var(--ink)] border-b border-[var(--ink)]/8 last:border-0 hover:text-[var(--green)] transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2 flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="w-full rounded-full justify-center gap-2 text-[var(--ink)] border-[var(--ink)]/20 hover:bg-[var(--ink)]/5"
                                asChild
                            >
                                <a href="/ecobite.apk" download="EcoBite.apk" onClick={() => setOpen(false)}>
                                    Download App
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </a>
                            </Button>
                            <Button
                                className="w-full bg-[var(--green)] text-white rounded-full hover:bg-[var(--green-dark)] justify-center"
                                asChild
                            >
                                <Link href="#" onClick={() => setOpen(false)}>Mulai Sekarang</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
