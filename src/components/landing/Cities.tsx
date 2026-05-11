import riyadh from "@/assets/riyadh.jpg";

const cities = [
  { name: "Riyadh", count: "4,820", featured: true },
  { name: "Jeddah", count: "3,140" },
  { name: "Mecca", count: "1,260" },
  { name: "Medina", count: "980" },
  { name: "Dammam", count: "740" },
  { name: "Khobar", count: "520" },
  { name: "Taif", count: "310" },
  { name: "Abha", count: "180" },
];

export function Cities() {
  return (
    <section id="cities" className="px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— Across the Kingdom</p>
            <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance">
              From <span className="italic font-light text-primary">Riyadh</span> rooftops to <span className="italic font-light text-primary">Jeddah</span> shorelines.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          <a href="#" className="md:col-span-7 relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-auto group">
            <img src={riyadh} alt="Riyadh skyline at golden hour" loading="lazy" width={1024} height={768}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-background">
              <div className="text-xs uppercase tracking-widest opacity-70 mb-3">Most loved</div>
              <h3 className="font-display text-5xl lg:text-7xl tracking-tighter">Riyadh</h3>
              <div className="mt-3 text-background/80">4,820 shared rooms · from SAR 800/mo</div>
            </div>
          </a>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 content-start">
            {cities.slice(1).map((c) => (
              <a key={c.name} href="#" className="group rounded-2xl border border-border p-5 lg:p-6 hover:bg-muted transition-colors">
                <div className="font-display text-2xl lg:text-3xl tracking-tight">{c.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.count} rooms</div>
                <div className="mt-4 inline-flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
