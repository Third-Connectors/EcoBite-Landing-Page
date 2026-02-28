import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header
            style={{ fontFamily: "var(--font-body)" }}
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/90 backdrop-blur-sm border-b border-[var(--ink)]/10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-[var(--green)] rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2C5 2 3 4.5 3 7c0 3.5 5 9 5 9s5-5.5 5-9c0-2.5-2-5-5-5z" fill="white" />
                            <circle cx="8" cy="7" r="2" fill="#2e6417" />
                        </svg>
                    </div>
                    <span
                        style={{ fontFamily: "var(--font-display)" }}
                        className="text-xl text-[var(--ink)] group-hover:text-[var(--green)] transition-colors duration-200"
                    >
                        EcoBite
                    </span>
                </a>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--ink-soft)]">
                    {["Cara Kerja", "Untuk Restoran", "Untuk Pembeli", "Limbah Organik"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover-underline hover:text-[var(--green)] transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex text-[var(--ink)] hover:text-[var(--green)] hover:bg-[var(--green)]/8"
                        asChild
                    >
                        <a href="#">Masuk</a>
                    </Button>

                    <Button
                        size="sm"
                        className="bg-[var(--green)] text-white rounded-full px-5 hover:bg-[var(--green-dark)] gap-2"
                        asChild
                    >
                        <a href="#">
                            Mulai Sekarang
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M2 7h10M7 2l5 5-5 5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
