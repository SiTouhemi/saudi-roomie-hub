export function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-7 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-sm">م</div>
              <span className="font-display text-xl font-semibold">Manam</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Saudi Arabia's home for shared rooms. Verified hosts, fair prices,
              and a key in your pocket — all in one app.
            </p>
          </div>

          {[
            { t: "Renters", l: ["Browse rooms", "Cities", "How it works", "Safety"] },
            { t: "Hosts", l: ["List a room", "Host hub", "Payouts", "Insurance"] },
            { t: "Company", l: ["About", "Careers", "Press", "Contact"] },
          ].map((c) => (
            <div key={c.t} className="md:col-span-2 lg:col-span-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{c.t}</div>
              <ul className="space-y-2.5">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="text-sm hover:text-primary transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Manam · Riyadh, Kingdom of Saudi Arabia</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">العربية</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
