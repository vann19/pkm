import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import TestimoniSection from "@/components/TestimoniSection";
import OrderStepsSection from "@/components/OrderStepsSection";
import CalculatorSection from "@/components/CalculatorSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full overflow-hidden">
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <ProductsSection />
          <GallerySection />
          <TestimoniSection />
          <OrderStepsSection />
          <CalculatorSection />
        </div>
      </main>
      <WhatsAppFAB />
      <Footer />
    </>
  );
}
