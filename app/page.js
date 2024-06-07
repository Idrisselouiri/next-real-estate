import About from "@/components/About";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
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
    </main>
  );
}
