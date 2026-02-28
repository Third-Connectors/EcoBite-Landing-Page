import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Limbah Organik — EcoBite",
    description: "Program limbah organik EcoBite menghubungkan restoran dengan peternak dan petani. Dapatkan sisa sayuran, kulit buah, dan ampas berkualitas.",
};

const wasteTypes = [
    {
        title: "Sisa Sayuran & Buah",
        desc: "Potongan sayuran, kulit buah, dan sisa prep dapur yang masih segar dan bernutrisi untuk pakan ternak.",
    },
    {
        title: "Ampas Biji-bijian",
        desc: "Ampas kopi, sisa fermentasi, dan residu serealia — kaya nutrisi untuk kompos atau pakan campuran.",
    },
    {
        title: "Sisa Protein & Tulang",
        desc: "Tulang, sisa daging, dan lemak yang dapat diolah menjadi tepung tulang atau pakan ternak olahan.",
    },
    {
        title: "Roti & Bakery Sisa",
        desc: "Roti kadaluarsa, sisa pastry, dan produk bakery — cocok untuk pakan ternak unggas dan babi.",
    },
];

const benefits = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 14l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Terpercaya & Terjadwal",
        desc: "Jadwal pengambilan limbah yang konsisten. Tidak ada ketidakpastian, restoran dan peternak sama-sama tenang.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4v20M4 14h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
        title: "Harga Jauh Lebih Murah",
        desc: "Biaya pakan jauh lebih rendah dibanding beli dari supplier konvensional. Hemat hingga 80%.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 20V12l10-8 10 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="10" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
        title: "Kurangi Biaya Disposal",
        desc: "Restoran tidak perlu bayar mahal untuk pembuangan limbah. Win-win untuk kedua pihak.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M18 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Dampak Lingkungan Positif",
        desc: "Setiap kg limbah yang terpakai = berkurang sampah organik di TPA. Kontribusimu tercatat di dashboard.",
    },
];

export default function LimbahOrganik() {
    return (
        <main>
            {/* ─── HERO ─────────────────────────── */}
            <section className="relative bg-[var(--cream)] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
                <div aria-hidden="true" className="absolute top-10 right-10 w-80 h-80 bg-[var(--green)]/5 rounded-full blur-3xl" />
                <div aria-hidden="true" className="absolute bottom-0 left-10 w-56 h-56 bg-[var(--orange)]/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-5 md:px-10">
                    <div className="max-w-2xl">
                        <Badge className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-[var(--green)]/12 text-[var(--green)] hover:bg-[var(--green)]/20 mb-5">
                            Limbah Organik
                        </Badge>
                        <h1
                            style={{ fontFamily: "var(--font-display)" }}
                            className="text-[clamp(2.2rem,5.5vw,4rem)] text-[var(--ink)] leading-[1.05] mb-5"
                        >
                            Limbah Restoran,
                            <br />
                            <span className="text-[var(--green)]">Nutrisi Peternakan</span>.
                        </h1>
                        <p
                            style={{ fontFamily: "var(--font-body)" }}
                            className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-8"
                        >
                            EcoBite menghubungkan sisa organik restoran dengan peternak dan petani yang membutuhkan.
                            Murah, terpercaya, dan berdampak bagi lingkungan.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                size="lg"
                                className="bg-[var(--green)] text-white rounded-full px-7 hover:bg-[var(--green-dark)] gap-2"
                            >
                                Daftar Sebagai Peternak
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
                                <Link href="/untuk-restoran">Saya Restoran</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── JENIS LIMBAH ──────────────── */}
            <section className="bg-[var(--ink)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label text-white/40">Jenis Limbah</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.08] mb-12"
                    >
                        Apa Saja yang <span className="text-[var(--green-light)]">Tersedia</span>?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {wasteTypes.map((w) => (
                            <div key={w.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300">
                                <div className="text-3xl mb-4">{w.icon}</div>
                                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg text-white mb-2">
                                    {w.title}
                                </h3>
                                <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-white/60 leading-relaxed">
                                    {w.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── BENEFITS ──────────────────── */}
            <section className="bg-[var(--cream)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label">Keuntungan</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] leading-[1.08] mb-12"
                    >
                        Menguntungkan <span className="text-[var(--green)]">Semua Pihak</span>.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {benefits.map((b) => (
                            <Card
                                key={b.title}
                                className="group bg-[var(--cream-dark)] hover:bg-white border border-[var(--ink)]/10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-[var(--green)]/10 text-[var(--green)]">
                                        {b.icon}
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl text-[var(--ink)] mb-2">
                                        {b.title}
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-[var(--muted)] leading-relaxed">
                                        {b.desc}
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
                        Siap Dapatkan Pakan Berkualitas?
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-8">
                        Bergabung dengan jaringan EcoBite dan dapatkan akses ke limbah organik berkualitas dari restoran terdekat.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            className="bg-white text-[var(--green)] rounded-full px-8 hover:bg-white/90 gap-2 font-semibold"
                        >
                            Daftar Peternak / Petani
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 border-white/30 text-white hover:bg-white/10 font-semibold"
                            asChild
                        >
                            <Link href="/untuk-restoran">Saya Restoran</Link>
                        </Button>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)" }} className="mt-4 text-white/50 text-xs">
                        Sudah tersedia di 12 kota · Gratis pendaftaran
                    </p>
                </div>
            </section>
        </main>
    );
}
