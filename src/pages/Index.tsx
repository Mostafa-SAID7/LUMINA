import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import PhilosophySection from '@/components/PhilosophySection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CategoriesSection from '@/components/CategoriesSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <PhilosophySection />
        <ResultsSection />
        <TestimonialsSection />
        <CategoriesSection />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
