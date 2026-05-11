import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Rooms } from "@/components/landing/Rooms";
import { Categories } from "@/components/landing/Categories";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Cities } from "@/components/landing/Cities";
import { Hosts } from "@/components/landing/Hosts";
import { Testimonials } from "@/components/landing/Testimonials";
import { Download } from "@/components/landing/Download";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Manam — Shared rooms across Saudi Arabia" },
      { name: "description", content: "Find verified shared rooms in Riyadh, Jeddah, Mecca and beyond. Monthly stays, fair prices, secure payments. Built for Saudi, in Arabic & English." },
      { property: "og:title", content: "Manam — Shared rooms across Saudi Arabia" },
      { property: "og:description", content: "Verified shared rooms across the Kingdom. Book in minutes." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Rooms />
      <Categories />
      <HowItWorks />
      <Cities />
      <Hosts />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
