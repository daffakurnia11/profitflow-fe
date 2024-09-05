import About from "@/components/Pages/Home/About";
import Contact from "@/components/Pages/Home/Contact";
import Hero from "@/components/Pages/Home/Hero";
import Pricing from "@/components/Pages/Home/Pricing";

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </>
  );
}
