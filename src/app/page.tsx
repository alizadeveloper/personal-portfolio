import AboutMe from "@/components/AboutMe";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import NavigationBar from "@/components/NavigationBar";
import Projects from "@/components/Projects";
import ServicesSection from "@/components/ServicesSection";
import SkillsShowcase from "@/components/SkillsShowcase";


export default function Home () {
  return  (
    <main className="text-white bg-stone-950 max-w-screen">

      <NavigationBar/>
      <HeroBanner/>
      <AboutMe/>
      <SkillsShowcase/>
      <ServicesSection/>
      <Projects/>
      <ContactPage/>
      <Footer/>
    </main>
  );
}
