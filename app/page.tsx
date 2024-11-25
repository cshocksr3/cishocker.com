import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecentProjects />
    </div>
  );
}
