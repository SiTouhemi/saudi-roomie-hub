import { motion } from "framer-motion";
import { useRef } from "react";
import k1 from "@/assets/cat-kitchen-1.jpg";
import k2 from "@/assets/cat-kitchen-2.jpg";
import k3 from "@/assets/cat-kitchen-3.jpg";
import k4 from "@/assets/cat-kitchen-4.jpg";
import k5 from "@/assets/cat-kitchen-5.jpg";
import p1 from "@/assets/cat-private-1.jpg";
import p2 from "@/assets/cat-private-2.jpg";
import p3 from "@/assets/cat-private-3.jpg";
import p4 from "@/assets/cat-private-4.jpg";
import p5 from "@/assets/cat-private-5.jpg";

type Listing = {
  img: string;
  city: string;
  title: string;
  price: string;
  rating: string;
  tag?: string;
};

const kitchenHomes: Listing[] = [
  { img: k1, city: "Riyadh · Al Olaya", title: "Marble chef kitchen · 4 beds", price: "SAR 3,200", rating: "4.96", tag: "Group" },
  { img: k2, city: "Riyadh · Hittin", title: "Villa with island kitchen", price: "SAR 4,500", rating: "4.92", tag: "Up to 8" },
  { img: k3, city: "Jeddah · Al Shati", title: "Open-plan apartment, 6 guests", price: "SAR 2,800", rating: "4.89" },
  { img: k4, city: "Riyadh · KAFD", title: "Penthouse with skyline kitchen", price: "SAR 5,400", rating: "5.0", tag: "Premium" },
  { img: k5, city: "Jeddah · Al Hamra", title: "Family kitchen, large dining", price: "SAR 2,950", rating: "4.87" },
];

const privateRooms: Listing[] = [
  { img: p1, city: "Mecca · Al Aziziyah", title: "Quiet single, warm tones", price: "SAR 1,250", rating: "4.94", tag: "Solo" },
  { img: p2, city: "Riyadh · Al Malqa", title: "Minimal queen room, balcony", price: "SAR 1,650", rating: "4.91" },
  { img: p3, city: "Jeddah · Al Rawdah", title: "Boutique room, arched window", price: "SAR 1,800", rating: "4.97", tag: "Female-only" },
  { img: p4, city: "Riyadh · Al Yasmin", title: "Bright study room, desk + shelves", price: "SAR 1,400", rating: "4.88", tag: "Students" },
  { img: p5, city: "Jeddah · Al Salamah", title: "Elegant en-suite room", price: "SAR 2,100", rating: "5.0" },
];

function Row({ items }: { items: Listing[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1) => {
    ref.current?.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <div className="relative -mx-6 lg:-mx-12">
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 lg:px-12 pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
            className="snap-start shrink-0 w-[78%] sm:w-[46%] md:w-[32%] lg:w-[23%] xl:w-[19%] group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-3 shadow-card">
              <img
                src={item.img}
                alt={`${item.title} in ${item.city}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {item.tag && (
                <div className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[11px] font-medium">
                  {item.tag}
                </div>
              )}
            </div>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground truncate">
                  {item.city}
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight truncate">
                  {item.title}
                </h3>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1 shrink-0 mt-1">
                ★ {item.rating}
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline gap-1">
              <span className="font-display text-base font-semibold">{item.price}</span>
              <span className="text-xs text-muted-foreground">/ month</span>
            </div>
          </motion.article>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scroll(-1)}
        className="hidden md:grid absolute left-2 top-1/3 -translate-y-1/2 size-10 rounded-full bg-background border border-border shadow-soft place-items-center hover:bg-accent transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scroll(1)}
        className="hidden md:grid absolute right-2 top-1/3 -translate-y-1/2 size-10 rounded-full bg-background border border-border shadow-soft place-items-center hover:bg-accent transition"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>
  );
}

function CategoryBlock({
  eyebrow,
  title,
  italic,
  cta,
  items,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  cta: string;
  items: Listing[];
}) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— {eyebrow}</p>
          <h3 className="font-display text-3xl lg:text-5xl tracking-tighter text-balance max-w-3xl">
            {title} <span className="italic font-light text-primary">{italic}</span>
          </h3>
        </div>
        <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-primary whitespace-nowrap">
          {cta} →
        </a>
      </div>
      <Row items={items} />
    </div>
  );
}

export function Categories() {
  return (
    <section id="categories" className="px-6 lg:px-12 py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto">
        <CategoryBlock
          eyebrow="Browse by category"
          title="Homes with fully equipped kitchens,"
          italic="built for larger groups."
          cta="Explore 320+ homes"
          items={kitchenHomes}
        />

        <CategoryBlock
          eyebrow="Your own space"
          title="Private rooms across the Kingdom,"
          italic="quiet, verified, ready to move in."
          cta="Browse 1,200+ rooms"
          items={privateRooms}
        />
      </div>
    </section>
  );
}
