import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Program from "../components/Program";
import Speakers from "../components/Speakers";
import Apply from "../components/Apply";
import Logistics from "../components/Logistics";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Program />
      <Speakers />
      <Apply />
      <Logistics />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;
