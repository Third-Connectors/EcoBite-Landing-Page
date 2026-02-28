import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Harga — EcoBite",
    description: "Pilih paket EcoBite yang sesuai kebutuhan Anda. Gratis untuk memulai, tanpa biaya tersembunyi.",
};

const plans = [
    {
        name: "Starter",
        price: "Gratis",
        period: "",
        desc: "Untuk restoran kecil yang baru mulai mengurangi food waste.",
        accent: "green",
        features: [
            "Hingga 5 listing per hari",
            "Dashboard dasar",
            "Laporan bulanan",
            "Email support",
            "Profil restoran",
        ],
        cta: "Mulai Gratis",
        popular: false,
    },
    {
        name: "Pro",
        price: "Rp 299K",
        period: "/bulan",
        desc: "Untuk restoran aktif yang ingin memaksimalkan impact dan pendapatan.",
        accent: "orange",
        features: [
            "Unlimited listing",
            "Analytics lengkap",
            "Laporan real-time",
            "Priority support",
            "Profil unggulan (highlight)",
            "Integrasi POS",
            "Notifikasi push",
            "Multi-outlet (hingga 3)",
        ],
        cta: "Coba Pro 14 Hari",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "Untuk jaringan restoran dan bisnis food service berskala besar.",
        accent: "green",
        features: [
            "Semua fitur Pro",
            "Unlimited outlet",
            "Account manager dedicated",
            "API access",
            "Custom reporting",
            "SLA 99.9%",
            "Onboarding training",
            "Brand co-marketing",
        ],
        cta: "Hubungi Sales",
        popular: false,
    },
];

const faqs = [
    {
        q: "Apakah pembeli juga bayar biaya platform?",
        a: "Tidak. Pembeli tidak dikenakan biaya platform. Biaya hanya berlaku untuk restoran sesuai paket yang dipilih.",
    },
    {
        q: "Bisa pindah plan kapan saja?",
        a: "Ya, Anda bisa upgrade atau downgrade plan kapan saja. Perubahan akan berlaku di billing cycle berikutnya.",
    },
    {
        q: "Ada kontrak minimum?",
        a: "Tidak ada kontrak minimum untuk plan Starter dan Pro. Enterprise memiliki minimum 12 bulan.",
    },
    {
        q: "Bagaimana dengan peternak/petani?",
        a: "Pendaftaran untuk peternak dan petani selalu gratis. Tidak ada biaya untuk menerima limbah organik.",
    },
    {
        q: "Apakah ada trial untuk Plan Pro?",
        a: "Ya! Plan Pro menyediakan trial 14 hari tanpa kartu kredit. Coba semua fitur premium secara gratis.",
    },
];

export default function Harga() {
    return (
        <main>
            {/* ─── HERO ─────────────────────────── */}
            <section className="relative bg-[var(--cream)] pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden">
                <div aria-hidden="true" className="absolute top-20 right-10 w-64 h-64 bg-[var(--orange)]/5 rounded-full blur-3xl" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 w-56 h-56 bg-[var(--green)]/5 rounded-full blur-3xl" />

                <div className="relative max-w-3xl mx-auto px-5 md:px-10 text-center">
                    <Badge className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase bg-[var(--green)]/12 text-[var(--green)] hover:bg-[var(--green)]/20 mb-5">
                        Harga
                    </Badge>
                    <h1
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-[clamp(2.2rem,5.5vw,4rem)] text-[var(--ink)] leading-[1.05] mb-5"
                    >
                        Pilih Paket yang
                        <br />
                        <span className="text-[var(--green)]">Pas untuk Anda</span>.
                    </h1>
                    <p
                        style={{ fontFamily: "var(--font-body)" }}
                        className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-lg mx-auto"
                    >
                        Mulai gratis, upgrade kapan saja. Tidak ada biaya tersembunyi, tidak perlu kartu kredit.
                    </p>
                </div>
            </section>

            {/* ─── PRICING CARDS ─────────────── */}
            <section className="bg-[var(--cream)] pb-16 md:pb-24">
                <div className="max-w-5xl mx-auto px-5 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                        {plans.map((plan) => {
                            const isOrange = plan.accent === "orange";
                            return (
                                <Card
                                    key={plan.name}
                                    className={`relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${plan.popular
                                        ? "bg-[var(--ink)] text-white border-[var(--orange)]/30 shadow-2xl scale-[1.02] md:scale-105"
                                        : "bg-white border-[var(--ink)]/10 hover:shadow-xl"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <Badge className="bg-[var(--orange)] text-white rounded-full px-4 py-1 text-[0.6rem] font-semibold tracking-[0.1em] uppercase hover:bg-[var(--orange)]">
                                                Paling Populer
                                            </Badge>
                                        </div>
                                    )}
                                    <CardContent className="p-6 md:p-8">
                                        <h3
                                            style={{ fontFamily: "var(--font-display)" }}
                                            className={`text-xl mb-1 ${plan.popular ? "text-white" : "text-[var(--ink)]"}`}
                                        >
                                            {plan.name}
                                        </h3>
                                        <p
                                            style={{ fontFamily: "var(--font-body)" }}
                                            className={`text-sm mb-5 ${plan.popular ? "text-white/60" : "text-[var(--muted)]"}`}
                                        >
                                            {plan.desc}
                                        </p>
                                        <div className="mb-6">
                                            <span
                                                style={{ fontFamily: "var(--font-display)" }}
                                                className={`text-4xl ${plan.popular ? "text-[var(--orange)]" : isOrange ? "text-[var(--orange)]" : "text-[var(--green)]"}`}
                                            >
                                                {plan.price}
                                            </span>
                                            {plan.period && (
                                                <span
                                                    style={{ fontFamily: "var(--font-body)" }}
                                                    className={`text-sm ${plan.popular ? "text-white/50" : "text-[var(--muted)]"}`}
                                                >
                                                    {plan.period}
                                                </span>
                                            )}
                                        </div>
                                        <Button
                                            className={`w-full rounded-full gap-2 ${plan.popular
                                                ? "bg-[var(--orange)] text-white hover:bg-[var(--orange)]/90"
                                                : "bg-[var(--green)] text-white hover:bg-[var(--green-dark)]"
                                                }`}
                                        >
                                            {plan.cta}
                                        </Button>
                                        <Separator className={`my-6 ${plan.popular ? "bg-white/10" : ""}`} />
                                        <ul className="space-y-3">
                                            {plan.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2.5">
                                                    <svg
                                                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-[var(--orange)]" : "text-[var(--green)]"}`}
                                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    >
                                                        <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span
                                                        style={{ fontFamily: "var(--font-body)" }}
                                                        className={`text-sm ${plan.popular ? "text-white/70" : "text-[var(--ink-soft)]"}`}
                                                    >
                                                        {f}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ───────────────────────── */}
            <section className="bg-[var(--cream-dark)] py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-5 md:px-10">
                    <p className="section-label text-center">FAQ</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(1.8rem,4vw,3rem)] text-[var(--ink)] leading-[1.08] mb-12 text-center"
                    >
                        Pertanyaan <span className="text-[var(--green)]">Umum</span>.
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-white rounded-xl border border-[var(--ink)]/8 p-5 md:p-6">
                                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-base md:text-lg text-[var(--ink)] mb-2">
                                    {faq.q}
                                </h3>
                                <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-[var(--muted)] leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
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
                        Masih Ragu?
                    </h2>
                    <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-base md:text-lg max-w-lg mx-auto mb-8">
                        Mulai dengan plan Starter — gratis, tanpa komitmen. Upgrade kapan saja ketika bisnis berkembang.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-[var(--green)] rounded-full px-8 hover:bg-white/90 gap-2 font-semibold"
                    >
                        Mulai Gratis Sekarang
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>
            </section>
        </main>
    );
}
