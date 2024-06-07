import About from "@/components/About";
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
    </main>
  );
}
