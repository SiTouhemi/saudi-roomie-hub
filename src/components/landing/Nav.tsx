import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-background/70 backdrop-blur-xl border border-border/60 pl-6 pr-2 py-2 shadow-soft">
        <a href="#" className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-sm">م</div>
          <span className="font-display text-xl font-semibold tracking-tight">Manam</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#rooms" className="hover:text-foreground transition">Rooms</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#cities" className="hover:text-foreground transition">Cities</a>
          <a href="#hosts" className="hover:text-foreground transition">For hosts</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:block text-sm px-4 py-2 text-foreground/80 hover:text-foreground transition">العربية</button>
          <a href="#download" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium hover:bg-primary transition-colors">
            Get the app
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
