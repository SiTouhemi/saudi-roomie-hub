import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Search by city & vibe", d: "Filter by gender, budget, neighborhood, and amenities. Map view included." },
  { n: "02", t: "Chat with the host", d: "Message in Arabic or English. Get a video tour before you commit." },
  { n: "03", t: "Book & pay securely", d: "Mada, Apple Pay, or card via Moyasar. Funds held until you check in." },
  { n: "04", t: "Move in, hassle-free", d: "Digital lease, ID verification, and 24/7 support during your stay." },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-6 lg:px-12 py-24 lg:py-36 bg-foreground text-background relative grain overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-4">— How it works</p>
            <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance">
              Four taps from <span className="italic font-light text-primary-glow">searching</span> to <span className="italic font-light text-primary-glow">sleeping</span>.
            </h2>
            <p className="mt-6 text-background/70 text-lg max-w-md">
              We rebuilt the rental flow from scratch — no agents, no deposits in cash, no surprises.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-background/15 pt-8 grid grid-cols-[auto_1fr] gap-8"
              >
                <span className="font-display text-5xl lg:text-6xl text-background/30 leading-none">{s.n}</span>
                <div>
                  <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                  <p className="text-background/60 text-lg leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
