import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";

const HireMePage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <ScrollProgress />
    <Navigation />
    <main className="flex-grow pt-28">

      <HireMe />
    </main>
    <Footer />
  </div>
);

export default HireMePage;
