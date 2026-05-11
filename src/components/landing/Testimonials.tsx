const quotes = [
  { q: "Found a quiet female-only room in Olaya in two days. The host was verified, the price was fair, and Mada payment just worked.", a: "Noura A.", r: "Renter · Riyadh" },
  { q: "I host four beds in Jeddah. Manam pays me on time every month and handles everything I used to dread.", a: "Khalid S.", r: "Host · Jeddah" },
  { q: "Came to Mecca for work. Booked a single room from the airport. Keys in my hand by sunset.", a: "Ibrahim M.", r: "Renter · Mecca" },
];

export function Testimonials() {
  return (
    <section className="px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— Trusted by 80,000+ Saudis</p>
        <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance max-w-3xl mb-16">
          Real keys, <span className="italic font-light text-primary">real reviews.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-border p-8 bg-background hover:shadow-card transition-shadow">
              <div className="text-primary text-3xl font-display leading-none mb-4">"</div>
              <blockquote className="text-foreground/90 leading-relaxed">{q.q}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium">{q.a}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
