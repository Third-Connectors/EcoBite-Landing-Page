import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links: Record<string, string[]> = {
    Platform: ["Cara Kerja", "Untuk Restoran", "Untuk Pembeli", "Limbah Organik", "Harga"],
    Perusahaan: ["Tentang Kami", "Blog", "Press Kit", "Karir", "Kontak"],
    Hukum: ["Syarat & Ketentuan", "Kebijakan Privasi", "Cookie Policy"],
};

const socials = ["IG", "TW", "TK", "LI"];

export default function Footer() {
    return (
        <footer className="bg-[var(--ink)] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[var(--green)] rounded-full blob-clip flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7 1C4.2 1 2 3.2 2 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2.8-2.2-5-5-5z" fill="white" />
                                    <circle cx="7" cy="6" r="1.8" fill="#2e6417" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: "var(--font-display)" }} className="text-xl">
                                EcoBite
                            </span>
                        </div>
                        <p style={{ fontFamily: "var(--font-body)" }} className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Menyelamatkan makanan. Menghubungkan ekosistem. Satu pickup dalam satu waktu.
                        </p>

                        {/* Social buttons */}
                        <div className="mt-6 flex gap-3">
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
                            <h4
                                style={{ fontFamily: "var(--font-body)" }}
                                className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5"
                            >
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Button
                                            variant="link"
                                            className="p-0 h-auto text-sm text-white/60 hover:text-white"
                                            asChild
                                        >
                                            <a href="#">{item}</a>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-white/30">
                    © 2026 EcoBite. Hak cipta dilindungi.
                </p>
                <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-white/30">
                        Third Connector
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                    <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-[var(--green)]">
                        Carbon Neutral 2026
                    </span>
                </div>
            </div>
        </footer>
    );
}
