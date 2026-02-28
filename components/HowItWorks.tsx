import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const restaurantSteps = [
    { num: "01", title: "Daftarkan Restoran", desc: "Buat akun gratis, isi profil restoranmu dalam 5 menit. Tidak ada biaya setup." },
    { num: "02", title: "Posting Makanan Saat Mau Tutup", desc: "Foto makanan sisa layak dari dapurmu, tentukan harga diskon, dan terbitkan listing." },
    { num: "03", title: "Pembeli Datang & Ambil", desc: "Pembeli memesan lewat app dan mengambil langsung di restoranmu. Cepat, mudah, zero delivery." },
];

const farmerSteps = [
    { num: "01", title: "Daftar sebagai Peternak/Petani", desc: "Daftarkan usahamu — peternak ayam, sapi, atau kebun kompos semua bisa bergabung." },
    { num: "02", title: "Pilih Limbah Organik dari Resto", desc: "Lihat listing limbah organik — sisa sayuran, kulit buah, tulang — dari restoran terdekat." },
    { num: "03", title: "Jadwalkan Pengambilan", desc: "Buat jadwal ambil langsung dari restoran. Limbah organik berkualitas untuk pakanmu." },
];

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="bg-[var(--ink)] py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
                    <div>
                        <p className="section-label text-[var(--orange)]">Cara Kerja</p>
                        <h2
                            style={{ fontFamily: "var(--font-display)" }}
                            className="mt-3 text-[clamp(2rem,6vw,4rem)] text-white leading-[1.05]"
                        >
                            Tiga Langkah.
                            <br />
                            <span className="text-[var(--orange)]">Semua Terhubung.</span>
                        </h2>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)" }} className="max-w-xs text-white/60 text-sm md:text-base leading-relaxed">
                        EcoBite mempertemukan tiga pihak dalam satu ekosistem yang saling menguntungkan.
                    </p>
                </div>

                {/* Two columns — stacks on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12">
                    {/* Restoran → Pembeli */}
                    <div className="bg-[var(--cream)] rounded-2xl p-6 md:p-8">
                        <div className="mb-6 md:mb-8">
                            <Badge className="bg-[var(--green)] text-white hover:bg-[var(--green-dark)] rounded-full px-3 md:px-4 py-1 text-[0.65rem] font-semibold tracking-[0.1em] uppercase">
                                Restoran → Pembeli
                            </Badge>
                        </div>
                        <div className="space-y-6 md:space-y-8">
                            {restaurantSteps.map((step, i) => (
                                <div key={step.num}>
                                    <div className="flex gap-4 md:gap-5">
                                        <div
                                            style={{ fontFamily: "var(--font-display)" }}
                                            className="text-4xl md:text-5xl text-[var(--orange)]/25 leading-none select-none flex-shrink-0 w-10 md:w-12"
                                        >
                                            {step.num}
                                        </div>
                                        <div>
                                            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg md:text-xl text-[var(--ink)] leading-tight mb-1.5">
                                                {step.title}
                                            </h3>
                                            <p style={{ fontFamily: "var(--font-body)" }} className="text-[var(--muted)] text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {i < restaurantSteps.length - 1 && <Separator className="mt-6 md:mt-8 bg-[var(--ink)]/8" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Restoran → Peternak */}
                    <div className="bg-[var(--green)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
                        <div aria-hidden="true" className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
                        <div aria-hidden="true" className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                        <div className="mb-6 md:mb-8 relative z-10">
                            <Badge variant="outline" className="text-white border-white/40 rounded-full px-3 md:px-4 py-1 text-[0.65rem] font-semibold tracking-[0.1em] uppercase bg-transparent hover:bg-white/10">
                                Restoran → Peternak/Petani
                            </Badge>
                        </div>
                        <div className="space-y-6 md:space-y-8 relative z-10">
                            {farmerSteps.map((step, i) => (
                                <div key={step.num}>
                                    <div className="flex gap-4 md:gap-5">
                                        <div
                                            style={{ fontFamily: "var(--font-display)" }}
                                            className="text-4xl md:text-5xl text-white/20 leading-none select-none flex-shrink-0 w-10 md:w-12"
                                        >
                                            {step.num}
                                        </div>
                                        <div>
                                            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg md:text-xl text-white leading-tight mb-1.5">
                                                {step.title}
                                            </h3>
                                            <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-sm leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {i < farmerSteps.length - 1 && <Separator className="mt-6 md:mt-8 bg-white/15" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Connector row — stacked vertically on mobile */}
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    {["Restoran", "EcoBite", "Pembeli + Peternak"].map((node, i) => (
                        <div key={node} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                            <div
                                style={{ fontFamily: "var(--font-body)" }}
                                className="bg-white/10 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20"
                            >
                                {node}
                            </div>
                            {i < 2 && (
                                <>
                                    {/* Arrow down on mobile, right on desktop */}
                                    <svg className="block sm:hidden" width="8" height="20" viewBox="0 0 8 20" fill="none">
                                        <path d="M4 0v16M1 13l3 3 3-3" stroke="#ff773d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg className="hidden sm:block" width="28" height="8" viewBox="0 0 28 8" fill="none">
                                        <path d="M0 4h24M21 1l3 3-3 3" stroke="#ff773d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
