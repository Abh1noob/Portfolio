import About from "@/components/about";
import SectionDivider from "@/components/sectiondivider";
import Skill from "@/components/skill";

export default function Home() {
  return(
    <main className="flex flex-col items-center px-4">
        <About/>
        <SectionDivider/>
        <Skill/>
    </main>
  );
}
