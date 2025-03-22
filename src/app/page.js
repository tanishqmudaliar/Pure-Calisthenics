import NavBar from "@/components/navBar";
import SectionOne from "@/pages/SectionOne";
import SectionTwo from "@/pages/SectionTwo";
import SectionThreePartOne from "@/pages/SectionThreePartOne";
import SectionThreePartTwo from "@/pages/SectionThreePartTwo";
import SectionFour from "@/pages/SectionFour";
import SectionFive from "@/pages/SectionFive";
import SectionSix from "@/pages/SectionSix";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floatingButton";
import SectionSeven from "@/pages/SectionSeven";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col bg-secondary overflow-x-hidden">
      <FloatingButton />
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThreePartOne />
      <SectionThreePartTwo />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </main>
  );
}
