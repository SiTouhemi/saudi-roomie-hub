const items = [
  "Verified hosts", "Monthly leases", "Female-only options", "No broker fees",
  "Pay with Mada", "Apple Pay", "Live chat with hosts", "Identity-verified renters",
  "Bilingual support", "تأجير آمن",
];

export function Marquee() {
  return (
    <section className="border-y border-border bg-foreground text-background py-5 overflow-hidden">
      <div className="flex marquee gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12 text-sm font-medium tracking-wide">
            {it}
            <span className="size-1.5 rounded-full bg-primary-glow" />
          </span>
        ))}
      </div>
    </section>
  );
}
