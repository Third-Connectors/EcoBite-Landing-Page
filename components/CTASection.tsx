import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="relative bg-[var(--green)] rounded-3xl px-10 py-16 md:py-20 overflow-hidden">
                    {/* Decorative circles */}
                    <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 w-96 h-96 rounded-full border-[80px] border-[var(--green-dark)]/30 translate-x-1/3 -translate-y-1/3 pointer-events-none"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[60px] border-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none"
                    />

                    {/* Stamp badge */}
                    <div
                        aria-hidden="true"
                        className="absolute top-8 right-8 md:right-16 w-28 h-28 rounded-full border-2 border-[var(--orange)] flex items-center justify-center"
                    >
                        <div className="absolute inset-1.5 rounded-full border border-[var(--orange)]/40" />
                        <span
                            style={{ fontFamily: "var(--font-display)" }}
                            className="text-[var(--orange)] text-[10px] font-bold tracking-[0.15em] uppercase text-center leading-tight px-3"
                        >
                            Gratis<br />Selamanya
                        </span>
                    </div>

                    <div className="relative z-10 max-w-2xl">
                        <Badge className="bg-[var(--orange)] text-white hover:bg-[var(--orange)]/90 rounded-full px-4 py-1 text-xs font-semibold tracking-[0.12em] uppercase">
                            Bergabung Sekarang
                        </Badge>

                        <h2
                            style={{ fontFamily: "var(--font-display)" }}
                            className="mt-5 text-[clamp(2.4rem,5vw,4rem)] text-white leading-[1.05]"
                        >
                            Jadilah Bagian dari
                            <br />
                            Gerakan Ini.
                        </h2>

                        <p
                            style={{ fontFamily: "var(--font-body)" }}
                            className="mt-5 text-white/70 text-lg max-w-lg leading-relaxed"
                        >
                            Apakah kamu restoran, pembeli yang ingin hemat, atau peternak yang butuh
                            bahan organik — tempatmu ada di EcoBite.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="bg-[var(--orange)] text-white rounded-full px-8 hover:brightness-95 gap-2"
                                asChild
                            >
                                <a href="#">
                                    Daftar sebagai Restoran
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                                asChild
                            >
                                <a href="#">Download Aplikasi</a>
                            </Button>
                        </div>

                        <p
                            style={{ fontFamily: "var(--font-body)" }}
                            className="mt-6 text-white/50 text-sm"
                        >
                            Sudah 500+ restoran bergabung. Tidak perlu kartu kredit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
