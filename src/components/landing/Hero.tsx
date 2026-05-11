import { motion } from "framer-motion";
import heroRoom from "@/assets/hero-room.jpg";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: (i: number = 0) => ({
    y: 0, opacity: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 px-6 lg:px-12 overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Now serving 14 cities across the Kingdom
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display text-[3.25rem] sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-tighter text-balance text-foreground"
          >
            A bed of your own.<br />
            <span className="italic font-light text-primary">A city</span> to share.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Manam connects you with verified shared rooms across Saudi Arabia —
            from Riyadh studios to Jeddah villas. Monthly stays, fair prices,
            zero awkward roommate hunts.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#rooms" className="group inline-flex items-center gap-2 bg-foreground text-background rounded-full pl-6 pr-2 py-2 text-base font-medium shadow-elegant hover:shadow-2xl transition-all">
              Find a room
              <span className="size-9 rounded-full bg-primary grid place-items-center transition-transform group-hover:translate-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </a>
            <a href="#hosts" className="text-base font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-primary transition-colors">
              Become a host →
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-14 flex items-center gap-8 lg:gap-12 pt-8 border-t border-border/60"
          >
            <Stat value="12k+" label="Verified rooms" />
            <Stat value="98%" label="Stays approved" />
            <Stat value="4.9★" label="Renter rating" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={heroRoom} alt="A serene shared bedroom in Riyadh with natural light" className="w-full h-full object-cover" width={1080} height={1350} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-xs font-medium">Olaya · Riyadh</span>
              <span className="rounded-full bg-foreground/80 backdrop-blur text-background px-3 py-1.5 text-xs font-medium">Female-only</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 backdrop-blur-xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Shared room · monthly</div>
                <div className="font-display text-xl font-semibold">SAR 1,450 <span className="text-sm font-sans text-muted-foreground font-normal">/ mo</span></div>
              </div>
              <button className="size-11 rounded-full bg-foreground text-background grid place-items-center hover:bg-primary transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
          <div className="absolute -top-4 -left-6 hidden lg:flex items-center gap-2 rounded-full bg-background border border-border shadow-card px-4 py-2 text-sm">
            <span className="size-2 rounded-full bg-emerald-500" />
            <span className="font-medium">Sara just booked</span>
            <span className="text-muted-foreground">· 2m ago</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
