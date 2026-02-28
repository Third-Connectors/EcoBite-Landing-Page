const testimonials = [
    {
        quote:
            "Dulu kami buang 20–30 porsi setiap malam. Sekarang, hampir semua terjual lewat EcoBite. Pendapatan tambahan, limbah berkurang.",
        name: "Bapak Suharto",
        role: "Pemilik Warung Nasi Padang, Bandung",
        tag: "Restoran",
        accent: "orange",
    },
    {
        quote:
            "Saya bisa makan makan siang enak dengan harga mahasiswa. Makanannya fresh, bukan sisa basi. EcoBite jadi bagian rutin hari saya.",
        name: "Ayu Rahmawati",
        role: "Mahasiswi, Jakarta",
        tag: "Pembeli",
        accent: "green",
    },
    {
        quote:
            "Ampas sayuran dari restoran ini kualitasnya jauh lebih baik dari pasar. Ayam saya lebih sehat dan biaya pakan turun 30%.",
        name: "Pak Dedi",
        role: "Peternak Ayam, Bogor",
        tag: "Peternak",
        accent: "green",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-[var(--cream-dark)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="section-label">Cerita Nyata</p>
                        <h2
                            style={{ fontFamily: "var(--font-display)" }}
                            className="mt-3 text-[clamp(2.2rem,4.5vw,3.5rem)] text-[var(--ink)] leading-[1.05]"
                        >
                            Mereka Sudah
                            <br />
                            Merasakannya.
                        </h2>
                    </div>
                    <a
                        href="#"
                        style={{ fontFamily: "var(--font-body)" }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--green)] hover:text-[var(--orange)] transition-colors duration-200"
                    >
                        Lihat semua cerita
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="relative bg-white rounded-2xl p-8 border border-[var(--ink)]/8 hover:border-[var(--orange)]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
                        >
                            {/* Big quotemark */}
                            <div
                                aria-hidden="true"
                                style={{ fontFamily: "var(--font-display)" }}
                                className={`absolute top-4 right-6 text-7xl leading-none select-none ${t.accent === "orange" ? "text-[var(--orange)]/12" : "text-[var(--green)]/12"
                                    }`}
                            >
                                &ldquo;
                            </div>

                            <div>
                                <span
                                    className={t.accent === "orange" ? "tag-orange" : "tag-green"}
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    {t.tag}
                                </span>
                                <blockquote
                                    style={{ fontFamily: "var(--font-body)" }}
                                    className="mt-5 text-[var(--ink-soft)] leading-relaxed text-[0.95rem]"
                                >
                                    {t.quote}
                                </blockquote>
                            </div>

                            <div className="mt-6 pt-5 border-t border-[var(--ink)]/8 flex items-center gap-3">
                                {/* Avatar placeholder */}
                                <div
                                    className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold ${t.accent === "orange" ? "bg-[var(--orange)]" : "bg-[var(--green)]"
                                        }`}
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-[var(--ink)]">
                                        {t.name}
                                    </div>
                                    <div style={{ fontFamily: "var(--font-body)" }} className="text-xs text-[var(--muted)]">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Impact numbers panel */}
                <div className="mt-14 bg-[var(--ink)] rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
                    <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--orange)]/5" />
                    {[
                        { val: "18 Ton", label: "Makanan diselamatkan bulan ini" },
                        { val: "95%", label: "Restoran puas dalam 3 bulan" },
                        { val: "8 Kota", label: "Sudah beroperasi" },
                        { val: "2.3rb+", label: "Download bulan ini" },
                    ].map((item) => (
                        <div key={item.label} className="relative z-10">
                            <div
                                style={{ fontFamily: "var(--font-display)" }}
                                className="text-4xl text-[var(--orange)]"
                            >
                                {item.val}
                            </div>
                            <div style={{ fontFamily: "var(--font-body)" }} className="mt-1 text-xs text-white/60 leading-snug">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
