import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Untuk Pembeli — EcoBite",
    description: "Beli makanan enak dengan harga hemat 40–70%. Berkualitas, bukan reject. EcoBite menghubungkan kamu dengan restoran terdekat.",
};

const reasons = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10S19.5 4 14 4z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Harga Hemat 40–70%",
        desc: "Makanan dari restoran terpercaya dengan diskon besar. Bukan makanan reject kualitas tetap terjaga.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path d="M7 24c0-3.5 3.5-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14 2l1.5 3H18l-2.5 2 1 3L14 8l-2.5 2 1-3L10 5h2.5L14 2z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.3" />
            </svg>
        ),
        title: "Dari Restoran Terverifikasi",
        desc: "Setiap restoran diverifikasi dan punya rating transparan. Kamu tahu kualitas sebelum membeli.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4v10l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
        title: "Pickup Cepat & Mudah",
        desc: "Pesan lewat app, pilih slot waktu, datang dan ambil. Tidak perlu antre, tidak perlu menunggu.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M18 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Dampak Lingkungan Nyata",
        desc: "Setiap pembelian mengurangi food waste. Lacak kontribusi lingkunganmu lewat profil EcoBite.",
    },
];

const howItWorks = [
    { num: "01", title: "Temukan Restoran", desc: "Buka aplikasi, lihat listing makanan dari restoran di sekitar lokasi kamu." },
    { num: "02", title: "Pilih & Pesan", desc: "Pilih makanan yang kamu mau, bayar langsung lewat app dengan harga diskon." },
    { num: "03", title: "Ambil Pesanan", desc: "Datang ke restoran sesuai slot waktu yang dipilih, tunjukkan kode pesanan, dan ambil." },
];

export default function UntukPembeli() {
    return (
        <main>
            {/* ─── HERO ─────────────────────────── */}
            <section className="relative bg-[var(--cream)] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
                <div aria-hidden="true" className="absolute top-20 left-0 w-64 h-64 bg-[var(--green)]/5 rounded-full blur-3xl" />
                <div aria-hidden="true" className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--orange)]/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-5 md:px-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
                        <div className="max-w-2xl">
                            <Badge className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-[var(--green)]/12 text-[var(--green)] hover:bg-[var(--green)]/20 mb-5">
                                Untuk Pembeli
                            </Badge>
                            <h1
                                style={{ fontFamily: "var(--font-display)" }}
                                className="text-[clamp(2.2rem,5.5vw,4rem)] text-[var(--ink)] leading-[1.05] mb-5"
                            >
                                Makanan Enak,
                                <br />
                                <span className="text-[var(--green)]">Harga Bersahabat</span>.
                            </h1>
                            <p
                                style={{ fontFamily: "var(--font-body)" }}
                                className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-8"
                            >
                                Nikmati makanan berkualitas dari restoran sekitar dengan diskon 40–70%.
                                Bukan makanan sisa yang buruk ini makanan layak dengan harga lebih baik.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    size="lg"
                                    className="bg-[var(--green)] text-white rounded-full px-7 hover:bg-[var(--green-dark)] gap-2"
                                >
                                    Mulai Belanja
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-7 border-[var(--ink)]/15 text-[var(--ink)] hover:bg-[var(--ink)]/5"
                                    asChild
                                >
                                    <Link href="/#cara-kerja">Lihat Cara Kerja</Link>
                                </Button>
                            </div>

                            {/* Social proof */}
                            <div className="mt-10 flex flex-wrap gap-6 items-center">
                                <div className="flex -space-x-2">
                                    {[
                                        "bg-[var(--green)]",
                                        "bg-[var(--orange)]",
                                        "bg-[var(--green-light)]",
                                        "bg-[var(--orange)]/80",
                                        "bg-[var(--green)]/80",
                                    ].map((bg, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 md:w-9 md:h-9 rounded-full ${bg} border-2 border-[var(--cream)] flex items-center justify-center text-white text-[10px] font-bold`}
                                        >
                                            {["L", "E", "S", "T", "A"][i]}
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontFamily: "var(--font-body)" }} className="text-xs md:text-sm text-[var(--muted)]">
                                    <strong className="text-[var(--ink)]">2,500+</strong> pembeli sudah bergabung
                                </p>
                            </div>
                        </div>

                        {/* Floating Card - Meal Listing Simulation */}
                        <div className="relative w-full max-w-md lg:max-w-none flex-1 flex justify-center lg:justify-end">
                            <div className="relative z-10 bg-white border border-[var(--ink)]/10 rounded-2xl p-5 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-16 h-16 rounded-xl bg-[var(--cream-dark)] flex items-center justify-center text-[var(--orange)]">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                                            <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                                            <path d="M12 12v4" />
                                            <path d="M9 14h6" />
                                        </svg>
                                    </div>
                                    <Badge className="bg-[var(--orange)] text-white rounded-full">Diskon 60%</Badge>
                                </div>
                                <div className="space-y-1 mb-4">
                                    <h3 className="font-bold text-[var(--ink)] text-lg">Nasi Goreng Spesial</h3>
                                    <p className="text-xs text-[var(--muted)]">Restoran Bintang Jaya • 800m</p>
                                </div>
                                <div className="flex items-end gap-3 mb-4">
                                    <div className="text-2xl font-black text-[var(--green)]">Rp 12.000</div>
                                    <div className="text-sm text-[var(--muted)] line-through mb-1">Rp 30.000</div>
                                </div>
                                <Button className="w-full bg-[var(--green)] text-white hover:bg-[var(--green-dark)] rounded-xl py-5 h-auto font-bold">
                                    Pesan Sekarang
                                </Button>
                                
                                {/* Secondary Floating Element */}
                                <div className="absolute -bottom-8 -left-6 bg-[var(--ink)] text-white p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-subtle">
                                    <div className="w-6 h-6 rounded-full bg-[var(--orange)] flex items-center justify-center text-[10px]">🔥</div>
                                    <div className="text-[10px] font-bold uppercase tracking-tight">Sisa 2 Porsi lagi!</div>
                                </div>
                            </div>
                            
                            {/* Decorative circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[var(--orange)]/5 rounded-full pointer-events-none" />
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-16 md:mt-24 pt-8 border-t border-[var(--ink)]/5 flex flex-wrap justify-between gap-8 animate-fade-up">
                        {[
                            { val: "40-70%", label: "Potongan Harga" },
                            { val: "1.2rb+", label: "Restoran Pilihan" },
                            { val: "4.8/5", label: "Rating Pengguna" },
                            { val: "24/7", label: "Update Menu" },
                        ].map((s) => (
                            <div key={s.label}>
                                <div style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-[var(--green)]">{s.val}</div>
                                <div style={{ fontFamily: "var(--font-body)" }} className="text-xs text-[var(--muted)] uppercase tracking-widest mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CARA KERJA ─────────────────── */}
            <section className="bg-[var(--ink)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label text-white/40">Sederhana & Cepat</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.08] mb-12"
                    >
                        Tiga Langkah <span className="text-[var(--green-light)]">Mudah</span>.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {howItWorks.map((s) => (
                            <div key={s.num} className="relative p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300">
                                <div
                                    style={{ fontFamily: "var(--font-display)" }}
                                    className="text-4xl text-[var(--green-light)] mb-3"
                                >
                                    {s.num}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl text-white mb-2">
                                    {s.title}
                                </h3>
                                <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-white/60 leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── ALASAN ────────────────────── */}
            <section className="bg-[var(--cream)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label">Kenapa EcoBite</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] leading-[1.08] mb-12"
                    >
                        Hemat Uang, <span className="text-[var(--green)]">Selamatkan Bumi</span>.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {reasons.map((r) => (
                            <Card
                                key={r.title}
                                className="group bg-[var(--cream-dark)] hover:bg-white border border-[var(--ink)]/10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-[var(--green)]/10 text-[var(--green)]">
                                        {r.icon}
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl text-[var(--ink)] mb-2">
                                        {r.title}
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-[var(--muted)] leading-relaxed">
                                        {r.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ───────────────────────── */}
            <section className="bg-[var(--green)] py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.08] mb-4"
                    >
                        Makan Enak, Harga Hemat?
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-8">
                        Gabung bersama ribuan pembeli yang sudah menikmati makanan berkualitas dengan harga yang lebih bersahabat.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[var(--green)] rounded-full px-8 hover:bg-white/90 gap-2 font-semibold"
                    >
                        Mulai Belanja Sekarang
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <p style={{ fontFamily: "var(--font-body)" }} className="mt-4 text-white/50 text-xs">
                        Gratis download · Langsung pakai
                    </p>
                </div>
            </section>
        </main>
    );
}
