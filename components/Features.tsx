const features = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="3" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        tag: "Restoran",
        title: "Posting dalam 60 Detik",
        desc: "Foto, harga, selesai. Interface yang dirancang untuk digunakan saat pikiran sibuk menjelang tutup. Tidak perlu training.",
        accent: "orange",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 24c0-4.4 4.5-8 10-8s10 3.6 10 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        tag: "Pembeli",
        title: "Harga Hemat, Kualitas Terjaga",
        desc: "Makanan diskon 40–70% dari harga normal. Layak dimakan, bukan makanan reject. Tersedia di sekitar lokasi kamu.",
        accent: "green",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M18 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        tag: "Peternak & Petani",
        title: "Limbah Organik Berkualitas",
        desc: "Dapatkan sisa sayuran, kulit buah, ampas biji-bijian dari restoran terdekat. Murah, terpercaya, terjadwal sesuai kebutuhan.",
        accent: "green",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4l2.5 7.5H24l-6.5 4.5 2.5 7.5L14 19l-6 4.5 2.5-7.5L4 11.5h7.5L14 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
        tag: "Platform",
        title: "Sistem Penilaian Transparan",
        desc: "Rating dan review dua arah. Restoran dinilai konsistensi kualitasnya, pembeli dan peternak juga menjaga reputasi.",
        accent: "orange",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 20V12l10-8 10 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="10" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        ),
        tag: "Restoran",
        title: "Analitik Dampak Nyata",
        desc: "Lihat berapa kg makanan diselamatkan, pendapatan tambahan, dan jejak karbon yang berkurang lewat dashboard restoranmu.",
        accent: "green",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4v20M4 9h20M4 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        tag: "Platform",
        title: "Penjadwalan Fleksibel",
        desc: "Restoran bisa set waktu pickup, peternak bisa pilih slot pengambilan limbah. Tidak ada yang menunggu terlalu lama.",
        accent: "orange",
    },
];

function FeatureCard({
    feature,
}: {
    feature: (typeof features)[0];
}) {
    const isOrange = feature.accent === "orange";
    return (
        <div className="group relative bg-[var(--cream-dark)] hover:bg-white border border-[var(--ink)]/10 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default overflow-hidden">
            {/* Accent corner */}
            <div
                aria-hidden="true"
                className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[80px] transition-all duration-300 ${isOrange
                        ? "bg-[var(--orange)]/8 group-hover:bg-[var(--orange)]/15"
                        : "bg-[var(--green)]/8 group-hover:bg-[var(--green)]/15"
                    }`}
            />

            <div
                className={`mb-5 inline-flex p-3 rounded-xl ${isOrange
                        ? "bg-[var(--orange)]/10 text-[var(--orange)]"
                        : "bg-[var(--green)]/10 text-[var(--green)]"
                    }`}
            >
                {feature.icon}
            </div>

            <div className="mb-3">
                <span className={`text-xs font-semibold tracking-[0.12em] uppercase ${isOrange ? "text-[var(--orange)]" : "text-[var(--green)]"}`} style={{ fontFamily: "var(--font-body)" }}>
                    {feature.tag}
                </span>
            </div>

            <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-xl text-[var(--ink)] mb-3 leading-tight"
            >
                {feature.title}
            </h3>
            <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-[var(--muted)] leading-relaxed">
                {feature.desc}
            </p>
        </div>
    );
}

export default function Features() {
    return (
        <section className="bg-[var(--cream)] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-2xl mb-14">
                    <p className="section-label">Fitur Unggulan</p>
                    <h2
                        style={{ fontFamily: "var(--font-display)" }}
                        className="mt-3 text-[clamp(2.2rem,4.5vw,3.6rem)] text-[var(--ink)] leading-[1.05]"
                    >
                        Satu Platform,
                        <br />
                        Tiga Keuntungan.
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f) => (
                        <FeatureCard key={f.title} feature={f} />
                    ))}
                </div>
            </div>
        </section>
    );
}
