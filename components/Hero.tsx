"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[var(--cream)] pt-14 md:pt-16 overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />

            {/* Decorative circles — hidden on very small screens */}
            <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-24 -right-24 w-[420px] md:w-[580px] h-[420px] md:h-[580px] rounded-full border-[1.5px] border-[var(--ink)]/10 pointer-events-none"
            />
            <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-10 -right-10 w-[300px] md:w-[440px] h-[300px] md:h-[440px] rounded-full border-[1.5px] border-[var(--orange)]/20 pointer-events-none"
            />

            {/* Spinning badge — desktop only */}
            <div
                className="absolute top-24 right-10 md:top-28 md:right-24 hidden md:flex items-center justify-center w-24 h-24 md:w-28 md:h-28 animate-spin-slow pointer-events-none"
                aria-hidden="true"
            >
                <svg viewBox="0 0 120 120" className="absolute inset-0">
                    <defs>
                        <path id="circle-text" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                    </defs>
                    <text fill="var(--green)" fontSize="10.5" fontFamily="var(--font-body)" fontWeight="600" letterSpacing="3">
                        <textPath href="#circle-text">SELAMATKAN MAKANAN • KURANGI LIMBAH • </textPath>
                    </text>
                </svg>
                <div className="w-8 h-8 rounded-full bg-[var(--orange)] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-24 pb-16 md:pb-20">
                {/* Pre-headline */}
                <div className="animate-fade-up">
                    <Badge className="bg-[var(--orange)] text-white hover:bg-[var(--orange)]/90 rounded-full px-3 md:px-4 py-1 text-[0.65rem] md:text-xs font-semibold tracking-[0.12em] uppercase">
                        Platform Food Rescue Pertama di Indonesia
                    </Badge>
                </div>

                {/* Headline */}
                <div className="mt-5 md:mt-8 max-w-4xl animate-fade-up delay-200">
                    <h1
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-[clamp(2.8rem,10vw,7rem)] leading-[0.95] text-[var(--ink)] tracking-tight"
                    >
                        Makanan Sisa
                        <br />
                        <span className="text-[var(--green)]">Tetap Berharga.</span>
                    </h1>
                </div>

                {/* Body */}
                <div className="mt-5 md:mt-8 max-w-xl animate-fade-up delay-300">
                    <p
                        style={{ fontFamily: "var(--font-body)" }}
                        className="text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
                    >
                        Restoran punya sisa makanan layak saat tutup? EcoBite menjualnya ke pembeli
                        dengan harga hemat — dan menyalurkan limbah organik ke peternak &amp; petani.
                        Semua terhubung, tidak ada yang terbuang.
                    </p>
                </div>

                {/* CTA row */}
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4 animate-fade-up delay-400">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-[var(--ink)] text-white rounded-full px-7 hover:bg-[var(--green)] transition-all duration-300 gap-2"
                        asChild
                    >
                        <a href="#">
                            Daftar Gratis
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full sm:w-auto text-[var(--ink)] hover:text-[var(--green)] hover:bg-transparent gap-3 px-0 justify-start sm:justify-center"
                        asChild
                    >
                        <a href="#">
                            <span className="w-10 h-10 rounded-full border-2 border-[var(--ink)]/20 flex items-center justify-center">
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <path d="M2 2l8 5-8 5V2z" fill="currentColor" />
                                </svg>
                            </span>
                            Lihat Cara Kerja
                        </a>
                    </Button>
                </div>

                {/* Stats row */}
                <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[var(--ink)]/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up delay-500">
                    {[
                        { value: "2.4T+", label: "Ton makanan terbuang/tahun di RI" },
                        { value: "500+", label: "Restoran bergabung" },
                        { value: "12rb+", label: "Porsi diselamatkan" },
                        { value: "0 Rp", label: "Biaya daftar untuk restoran" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-5xl text-[var(--green)]">
                                {s.value}
                            </div>
                            <div className="mt-1 text-xs md:text-sm text-[var(--muted)] leading-snug" style={{ fontFamily: "var(--font-body)" }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wave separator */}
            <div
                className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-[var(--ink)] [clip-path:polygon(0_60%,100%_0,100%_100%,0_100%)]"
                aria-hidden="true"
            />
        </section>
    );
}
