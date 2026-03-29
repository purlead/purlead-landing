"use client";

const sectors = [
  "Auto-écoles",
  "Installateurs PAC",
  "Plombiers",
  "Climaticiens",
  "Couvreurs",
  "Électriciens",
  "Menuisiers",
  "Paysagistes",
  "Agents immobiliers",
  "Dentistes",
  "Ostéopathes",
  "Coaches sportifs",
  "Salons de coiffure",
  "Garages auto",
  "Restaurateurs",
  "Photographes",
];

export function SocialProofBanner() {
  const doubled = [...sectors, ...sectors];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm uppercase tracking-wider text-[#94A3B8]/60 font-medium">
          Nous aidons les pros locaux de tous secteurs
        </p>
      </div>
      <div className="relative mask-linear-gradient">
        <div className="flex animate-scroll whitespace-nowrap">
          {doubled.map((sector, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-4 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#94A3B8]/70 text-sm font-medium hover:text-[#F0F0F5] hover:bg-white/[0.06] transition-all duration-300 shrink-0"
            >
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
