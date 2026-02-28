"use client";

const tickers = [
    "Makanan Tersisa Layak",
    "Limbah Organik Berguna",
    "Hemat untuk Pembeli",
    "Pakan Ternak Berkualitas",
    "Zero Food Waste",
    "Mendukung Petani Lokal",
    "Ekosistem Berkelanjutan",
];

export default function TickerBanner() {
    const doubled = [...tickers, ...tickers];

    return (
        <div className="bg-[var(--orange)] py-4 overflow-hidden">
            <div className="ticker-wrap">
                <div className="ticker-inner">
                    {doubled.map((item, i) => (
                        <span
                            key={i}
                            style={{ fontFamily: "var(--font-body)" }}
                            className="inline-flex items-center gap-4 px-6 text-white font-semibold text-sm tracking-widest uppercase whitespace-nowrap"
                        >
                            {item}
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/50" />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
