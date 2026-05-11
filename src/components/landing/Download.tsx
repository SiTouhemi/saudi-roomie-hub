import { motion } from "framer-motion";

export function Download() {
  return (
    <section id="download" className="px-6 lg:px-12 py-24 lg:py-32">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-ink text-background p-10 lg:p-20 relative overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-background/50 mb-4">— Download Manam</p>
            <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance">
              Your next room is one tap away.
            </h2>
            <p className="mt-6 text-background/70 text-lg max-w-md">
              Free on iOS and Android. Built for Saudi, in Arabic and English.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-3 bg-background text-foreground rounded-2xl px-6 py-4 hover:scale-[1.02] transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Download on</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-3 bg-background text-foreground rounded-2xl px-6 py-4 hover:scale-[1.02] transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.61 1.81A2 2 0 0 0 3 3.24v17.52c0 .53.21 1.03.58 1.42L13.36 12 3.61 1.81zM14.76 13.4l2.39 2.39-11.8 6.81 9.41-9.2zm5.39-3.11L17.28 8.6l-2.52 2.52 2.52 2.52 2.87-1.7c1.13-.66 1.13-2.32 0-2.99zM5.35 1.99l11.8 6.81-2.39 2.39L5.35 1.99z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-72 rounded-full border border-background/20 grid place-items-center">
                <div className="size-56 rounded-full border border-background/20 grid place-items-center">
                  <div className="size-40 rounded-full bg-gradient-primary grid place-items-center font-display text-7xl text-primary-foreground shadow-elegant">
                    م
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-background/10 backdrop-blur border border-background/20 px-4 py-2 text-sm">
              4.9 ★ · App Store
            </div>
            <div className="absolute bottom-4 left-4 rounded-full bg-background/10 backdrop-blur border border-background/20 px-4 py-2 text-sm">
              200K+ downloads
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
