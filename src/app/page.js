import SectionOne from "@/pages/SectionOne";
import NavBar from "@/components/NavBar";
import SectionThree from "@/pages/SectionThree";
import SectionTwo from "@/pages/SectionTwo";
import SectionFour from "@/pages/SectionFour";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-x-hidden">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}
