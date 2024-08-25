import Image from "next/image";
import IntroSection from "./_components/IntroSection";
import FeaturesSection from "./_components/FeaturesSection";
import CarouselSection from "./_components/CarouselSection";
import Separator from "./_components/Separator";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <main>
        <Separator />
        <IntroSection />
        <div className="bg-white">
          <FeaturesSection />
        </div>
      </main>
      <CarouselSection />
      <div className="bg-white">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
