import About from "@/components/About";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Property from "@/components/Property";
import Hero from "@/components/header/Hero";
import Service from "@/components/header/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Property />
      <Features />
      <Blog />
      <Cta />
      <Footer />
    </main>
  );
}
