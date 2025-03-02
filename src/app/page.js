import NavBar from "@/components/NavBar";
import SectionOne from "@/pages/SectionOne";
import SectionTwo from "@/pages/SectionTwo";
import SectionThreePartOne from "@/pages/SectionThreePartOne";
import SectionThreePartTwo from "@/pages/SectionThreePartTwo";
import SectionFour from "@/pages/SectionFour";
import SectionFive from "@/pages/SectionFive";
import SectionSix from "@/pages/SectionSix";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden bg-secondary">
      <FloatingButton />
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThreePartOne />
      <SectionThreePartTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </main>
  );
}
