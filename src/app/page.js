import SectionOne from "@/pages/SectionOne";
import SectionTwo from "@/pages/SectionTwo";
import SectionThree from "@/pages/SectionThree";
import SectionFour from "@/pages/SectionFour";
import SectionFive from "@/pages/SectionFive";
import SectionSix from "@/pages/SectionSix";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </main>
  );
}
