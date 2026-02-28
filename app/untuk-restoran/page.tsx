import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Untuk Restoran — EcoBite",
    description: "Ubah sisa makanan jadi peluang. Posting menu sisa, jangkau pembeli baru, dan kurangi food waste hanya dari dashboard EcoBite.",
};

const benefits = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="3" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        title: "Posting dalam 60 Detik",
        desc: "Foto, harga, selesai. Interface simpel yang bisa digunakan saat sibuk menjelang tutup. Tanpa training.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 20V12l10-8 10 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="10" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
        title: "Analitik Dampak Nyata",
        desc: "Lihat berapa kg makanan diselamatkan, pendapatan tambahan, dan jejak karbon yang berkurang lewat dashboard.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4v20M4 9h20M4 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        title: "Penjadwalan Fleksibel",
        desc: "Set waktu pickup sesuai operasional restoran. Tidak ada yang perlu menunggu terlalu lama.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Notifikasi Real-time",
        desc: "Terima notifikasi saat ada pesanan baru, siap pickup, atau review dari pembeli secara real-time.",
    },
];

const steps = [
    { num: "01", title: "Daftar & Verifikasi", desc: "Buat akun restoran, unggah dokumen, dan verifikasi dalam hitungan menit." },
    { num: "02", title: "Posting Menu Sisa", desc: "Foto makanan, set harga diskon, tentukan waktu pickup. Selesai." },
    { num: "03", title: "Pembeli Datang", desc: "Pembeli terdekat menemukan listing kamu, pesan, dan ambil sesuai jadwal." },
    { num: "04", title: "Terima Pembayaran", desc: "Dana otomatis masuk ke rekening restoran setelah pickup selesai." },
];

export default function UntukRestoran() {
    return (
        <main>
            {/* ─── HERO ─────────────────────────── */}
            <section className="relative bg-[var(--cream)] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
                {/* Decorative bg elements */}
                <div aria-hidden="true" className="absolute top-16 right-0 w-72 h-72 bg-[var(--orange)]/5 rounded-full blur-3xl" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 w-56 h-56 bg-[var(--green)]/5 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-5 md:px-10">
                    <div className="max-w-2xl">
                        <Badge className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-[var(--orange)]/12 text-[var(--orange)] hover:bg-[var(--orange)]/20 mb-5">
                            Untuk Restoran
                        </Badge>
                        <h1
                            style={{ fontFamily: "var(--font-display)" }}
                            className="text-[clamp(2.2rem,5.5vw,4rem)] text-[var(--ink)] leading-[1.05] mb-5"
                        >
                            Ubah Sisa Makanan
                            <br />
                            Jadi <span className="text-[var(--orange)]">Peluang Baru</span>.
                        </h1>
                        <p
                            style={{ fontFamily: "var(--font-body)" }}
                            className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-8"
                        >
                            Setiap hari, makanan berkualitas terbuang sia-sia. Dengan EcoBite, jual menu sisa ke pembeli terdekat,
                            tambah pendapatan, dan kurangi limbah — semuanya dari satu dashboard.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                size="lg"
                                className="bg-[var(--orange)] text-white rounded-full px-7 hover:bg-[var(--orange)]/90 gap-2"
                            >
                                Daftarkan Restoran
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
                    </div>

                    {/* Stats */}
                    <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
                        {[
                            { val: "500+", label: "Restoran Terdaftar" },
                            { val: "12 Ton", label: "Makanan Diselamatkan" },
                            { val: "40–70%", label: "Diskon untuk Pembeli" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <div style={{ fontFamily: "var(--font-display)" }} className="text-2xl md:text-3xl text-[var(--orange)]">
                                    {s.val}
                                </div>
                                <div style={{ fontFamily: "var(--font-body)" }} className="mt-1 text-xs text-[var(--muted)] leading-snug">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CARA KERJA ─────────────────── */}
            <section className="bg-[var(--ink)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label text-white/40">Langkah Mudah</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.08] mb-12"
                    >
                        Mulai dalam <span className="text-[var(--orange)]">4 Langkah</span>.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((s) => (
                            <div key={s.num} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/8 transition-all duration-300">
                                <div
                                    style={{ fontFamily: "var(--font-display)" }}
                                    className="text-3xl text-[var(--orange)]/30 mb-3"
                                >
                                    {s.num}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg text-white mb-2">
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

            {/* ─── BENEFITS ──────────────────── */}
            <section className="bg-[var(--cream)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <p className="section-label">Kenapa EcoBite</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] leading-[1.08] mb-12"
                    >
                        Fitur yang <span className="text-[var(--orange)]">Memudahkan</span> Operasional.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        {benefits.map((b) => (
                            <Card
                                key={b.title}
                                className="group bg-[var(--cream-dark)] hover:bg-white border border-[var(--ink)]/10 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <CardContent className="p-6 md:p-8">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-[var(--orange)]/10 text-[var(--orange)]">
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
                        Siap Mengurangi Food Waste?
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-8">
                        Bergabung dengan ratusan restoran yang sudah menyelamatkan makanan dan menambah pendapatan bersama EcoBite.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[var(--green)] rounded-full px-8 hover:bg-white/90 gap-2 font-semibold"
                    >
                        Daftarkan Restoran Gratis
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <p style={{ fontFamily: "var(--font-body)" }} className="mt-4 text-white/50 text-xs">
                        Gratis untuk memulai · Tidak perlu kartu kredit
                    </p>
                </div>
            </section>
        </main>
    );
}
