import NavBar from "@/components/NavBar";
import SectionOne from "@/pages/SectionOne";
import SectionTwo from "@/pages/SectionTwo";
import SectionThree from "@/pages/SectionThree";
import SectionFour from "@/pages/SectionFour";
import SectionFive from "@/pages/SectionFive";
import SectionSix from "@/pages/SectionSix";
import SectionSeven from "@/pages/SectionSeven";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </main>
  );
}
