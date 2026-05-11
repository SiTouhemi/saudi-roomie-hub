import { motion } from "framer-motion";

export function Hosts() {
  return (
    <section id="hosts" className="px-6 lg:px-12 py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— For hosts</p>
          <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance">
            Rent the empty bed. <span className="italic font-light text-primary">Earn every month.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            List your spare room in under 5 minutes. We handle verification,
            payments, and disputes. You just hand over the key.
          </p>

          <ul className="mt-8 space-y-4">
            {["Free listings, always", "Payouts to your Saudi bank in 48 hours", "Damage protection up to SAR 25,000", "Smart calendar — sync with your team"].map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground/90">
                <span className="size-6 rounded-full bg-primary/10 grid place-items-center mt-0.5 shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a href="#download" className="mt-10 inline-flex items-center gap-2 bg-foreground text-background rounded-full pl-6 pr-2 py-2 text-base font-medium shadow-elegant hover:shadow-2xl transition-all group">
            Start hosting
            <span className="size-9 rounded-full bg-primary grid place-items-center transition-transform group-hover:translate-x-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl bg-background shadow-elegant p-8 lg:p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">This month</div>
                <div className="font-display text-5xl mt-1">SAR 8,420</div>
              </div>
              <div className="rounded-full bg-emerald-500/10 text-emerald-700 px-3 py-1.5 text-xs font-medium">+12.4%</div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Ahmed K.", room: "Bunk · Olaya", amount: "1,200" },
                { name: "Fatima R.", room: "Single · Hamra", amount: "1,450" },
                { name: "Yousef M.", room: "Twin · Malqa", amount: "950" },
              ].map((b) => (
                <div key={b.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/60">
                  <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-medium text-sm">
                    {b.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{b.name}</div>
                    <div className="text-xs text-muted-foreground">{b.room}</div>
                  </div>
                  <div className="font-display font-semibold">+{b.amount}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Next payout</span>
              <span className="font-medium">Tomorrow, 9:00</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden lg:block rounded-2xl bg-foreground text-background p-5 shadow-elegant max-w-[220px]">
            <div className="text-3xl font-display">94%</div>
            <div className="text-xs text-background/70 mt-1">of hosts re-list within 30 days</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
