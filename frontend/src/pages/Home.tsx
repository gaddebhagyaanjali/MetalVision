import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCards />
      <HowItWorks />
      <Features />
      <TechStack />
      <Footer />
    </>
  );
}

export default Home;