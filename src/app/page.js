import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden">
      <NavBar />
      <Hero />
      <SectionTwo />
      <SectionThree />
    </main>
  );
}
