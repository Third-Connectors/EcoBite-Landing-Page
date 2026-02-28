import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const testimonials = [
    {
        quote: "Dulu kami buang 20–30 porsi setiap malam. Sekarang, hampir semua terjual lewat EcoBite. Pendapatan tambahan, limbah berkurang.",
        name: "Bapak Suharto", role: "Pemilik Warung Nasi Padang, Bandung", tag: "Restoran", accent: "orange" as const,
    },
    {
        quote: "Saya bisa makan siang enak dengan harga mahasiswa. Makanannya fresh, bukan sisa basi. EcoBite jadi bagian rutin hari saya.",
        name: "Ayu Rahmawati", role: "Mahasiswi, Jakarta", tag: "Pembeli", accent: "green" as const,
    },
    {
        quote: "Ampas sayuran dari restoran ini kualitasnya jauh lebih baik dari pasar. Ayam saya lebih sehat dan biaya pakan turun 30%.",
        name: "Pak Dedi", role: "Peternak Ayam, Bogor", tag: "Peternak", accent: "green" as const,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[var(--cream-dark)] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
                    <div>
                        <p className="section-label">Cerita Nyata</p>
                        <h2
                            style={{ fontFamily: "var(--font-display)" }}
                            className="mt-3 text-[clamp(2rem,5vw,3.5rem)] text-[var(--ink)] leading-[1.05]"
                        >
                            Mereka Sudah
                            <br />
                            Merasakannya.
                        </h2>
                    </div>
                    <Button variant="link" className="text-[var(--green)] hover:text-[var(--orange)] p-0 h-auto gap-2 self-start sm:self-auto" asChild>
                        <a href="#">
                            Lihat semua cerita
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </Button>
                </div>

                {/* Cards — 1 col mobile, 3 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((t) => {
                        const isOrange = t.accent === "orange";
                        return (
                            <Card
                                key={t.name}
                                className="relative bg-white rounded-2xl border border-[var(--ink)]/8 hover:border-[var(--orange)]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                            >
                                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                    <div
                                        aria-hidden="true"
                                        style={{ fontFamily: "var(--font-display)" }}
                                        className={`absolute top-3 right-5 text-6xl md:text-7xl leading-none select-none ${isOrange ? "text-[var(--orange)]/12" : "text-[var(--green)]/12"}`}
                                    >
                                        &ldquo;
                                    </div>
                                    <div className="flex-1">
                                        <Badge className={`rounded-full px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-[0.12em] uppercase ${isOrange ? "bg-[var(--orange)] text-white hover:bg-[var(--orange)]/90" : "bg-[var(--green)] text-white hover:bg-[var(--green-dark)]"
                                            }`}>
                                            {t.tag}
                                        </Badge>
                                        <blockquote style={{ fontFamily: "var(--font-body)" }} className="mt-4 text-[var(--ink-soft)] leading-relaxed text-sm md:text-[0.95rem]">
                                            {t.quote}
                                        </blockquote>
                                    </div>
                                    <Separator className="mt-5 bg-[var(--ink)]/8" />
                                    <div className="mt-4 flex items-center gap-3">
                                        <Avatar className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0">
                                            <AvatarFallback className={`text-white text-sm font-semibold ${isOrange ? "bg-[var(--orange)]" : "bg-[var(--green)]"}`}>
                                                {t.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-[var(--ink)]">{t.name}</div>
                                            <div style={{ fontFamily: "var(--font-body)" }} className="text-xs text-[var(--muted)]">{t.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Impact panel — 2×2 on mobile, 4-col on desktop */}
                <div className="mt-10 md:mt-14 bg-[var(--ink)] rounded-2xl p-7 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative overflow-hidden">
                    <div aria-hidden="true" className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[var(--orange)]/5 pointer-events-none" />
                    {[
                        { val: "18 Ton", label: "Makanan diselamatkan bulan ini" },
                        { val: "95%", label: "Restoran puas dalam 3 bulan" },
                        { val: "8 Kota", label: "Sudah beroperasi" },
                        { val: "2.3rb+", label: "Download bulan ini" },
                    ].map((item) => (
                        <div key={item.label} className="relative z-10">
                            <div style={{ fontFamily: "var(--font-display)" }} className="text-3xl md:text-4xl text-[var(--orange)]">{item.val}</div>
                            <div style={{ fontFamily: "var(--font-body)" }} className="mt-1 text-xs text-white/60 leading-snug">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
