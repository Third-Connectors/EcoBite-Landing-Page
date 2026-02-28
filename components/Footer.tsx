import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links: Record<string, { label: string; href: string }[]> = {
    Platform: [
        { label: "Cara Kerja", href: "/#cara-kerja" },
        { label: "Untuk Restoran", href: "/untuk-restoran" },
        { label: "Untuk Pembeli", href: "/untuk-pembeli" },
        { label: "Limbah Organik", href: "/limbah-organik" },
        { label: "Harga", href: "/harga" },
    ],
    Perusahaan: [
        { label: "Tentang Kami", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Karir", href: "#" },
        { label: "Kontak", href: "#" },
    ],
    Hukum: [
        { label: "Syarat & Ketentuan", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Cookie Policy", href: "#" },
    ],
};

const socials = ["IG", "TW", "TK", "LI"];

export default function Footer() {
    return (
        <footer className="bg-[var(--ink)] text-white">
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {/* Brand column — full width on mobile */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                            <div className="w-7 h-7 bg-[var(--green)] rounded-full flex items-center justify-center">
                                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                    <path d="M7 1C4.2 1 2 3.2 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.8-2.2-5-5-5z" fill="white" />
                                    <circle cx="7" cy="6" r="1.8" fill="#2e6417" />
                                </svg>
                            </div>
                            <Link href="/" style={{ fontFamily: "var(--font-display)" }} className="text-xl hover:text-[var(--green-light)] transition-colors">
                                EcoBite
                            </Link>
                        </div>
                        <p style={{ fontFamily: "var(--font-body)" }} className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Menyelamatkan makanan. Menghubungkan ekosistem. Satu pickup dalam satu waktu.
                        </p>
                        <div className="mt-5 flex gap-2">
                            {socials.map((s) => (
                                <Button
                                    key={s}
                                    variant="outline"
                                    size="icon-sm"
                                    className="rounded-full border-white/20 bg-transparent text-white/50 hover:border-[var(--orange)] hover:text-[var(--orange)] hover:bg-transparent text-xs font-semibold"
                                    asChild
                                >
                                    <a href="#" aria-label={s}>{s}</a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Nav columns */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 style={{ fontFamily: "var(--font-body)" }} className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <Button variant="link" className="p-0 h-auto text-sm text-white/60 hover:text-white" asChild>
                                            <Link href={item.href}>{item.label}</Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="bg-white/10" />

            <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
                <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-white/30 text-center sm:text-left">
                    © 2026 EcoBite. Hak cipta dilindungi.
                </p>
                <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-white/30">Third Connector</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                    <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-[var(--green)]">Carbon Neutral 2026</span>
                </div>
            </div>
        </footer>
    );
}
