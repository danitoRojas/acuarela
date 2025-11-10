import HomeHero from "@/components/sections/HomeHero";
import Contacts from "@/components/sections/Contacts";
import BlogSection from "@/components/sections/Blog";
import NetworkStats from "@/components/sections/NetworkStats";
import News from "@/components/sections/News";
import ResourcesSlider from "@/components/sections/ResouserSlider";
import HomeBelowSection from "@/components/sections/HomeBelowSection";
import SeccionEstimulación from "@/components/sections/SeccionEducativa";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <HomeHero />
        <HomeBelowSection />
         <SeccionEstimulación />
        <NetworkStats />
        <BlogSection />
        <News />
        <ResourcesSlider />
        <Contacts />
      </div>
    </>
  );
}
