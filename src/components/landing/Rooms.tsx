import { motion } from "framer-motion";
import r1 from "@/assets/room-1.jpg";
import r2 from "@/assets/room-2.jpg";
import r3 from "@/assets/room-3.jpg";

const rooms = [
  { img: r1, city: "Jeddah · Al Hamra", type: "Twin shared room", price: "SAR 1,200", tag: "Mixed", rating: "4.9" },
  { img: r2, city: "Riyadh · Al Malqa", type: "Bunk in studio", price: "SAR 950", tag: "Students", rating: "4.8" },
  { img: r3, city: "Mecca · Al Aziziyah", type: "Single in 3-bed", price: "SAR 1,450", tag: "Female-only", rating: "5.0" },
];

export function Rooms() {
  return (
    <section id="rooms" className="px-6 lg:px-12 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— Featured rooms</p>
            <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-balance max-w-2xl">
              Hand-picked spaces, <span className="italic font-light text-primary">not listings.</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-primary">View all 12,400 rooms →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((r, i) => (
            <motion.article
              key={r.city}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5 shadow-card">
                <img src={r.img} alt={`${r.type} in ${r.city}`} loading="lazy" width={1024} height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-xs font-medium">{r.tag}</div>
                <div className="absolute top-4 right-4 size-10 rounded-full bg-background/85 backdrop-blur grid place-items-center hover:bg-background transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{r.city}</div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{r.type}</h3>
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">★ {r.rating}</div>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-xl font-semibold">{r.price}</span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
