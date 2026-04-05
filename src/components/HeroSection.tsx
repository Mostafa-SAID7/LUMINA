import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/40"
    style={{ left: x, top: y }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <img
          src={heroBg}
          alt="Lumina Beauty"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="15%" y="30%" />
      <FloatingParticle delay={1} x="75%" y="20%" />
      <FloatingParticle delay={2} x="60%" y="60%" />
      <FloatingParticle delay={0.5} x="30%" y="70%" />
      <FloatingParticle delay={1.5} x="85%" y="45%" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-primary/80 tracking-[0.3em] text-xs md:text-sm uppercase mb-4 md:mb-6"
        >
          {t('Premium Skincare & Beauty', 'العناية الفاخرة بالبشرة والجمال')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 md:mb-8"
        >
          <span className="text-gradient-rose">
            {t('Discover Your', 'اكتشفي')}
          </span>
          <br />
          {t('Natural Glow', 'إشراقتك الطبيعية')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          {t(
            'Unlock radiant, youthful skin with our luxurious collection of serums, creams, and beauty essentials crafted from nature\'s finest ingredients.',
            'احصلي على بشرة مشرقة وشابة مع مجموعتنا الفاخرة من السيرومات والكريمات ومستحضرات التجميل المصنوعة من أجود المكونات الطبيعية.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#products" className="btn-luxury text-sm md:text-base">
            {t('Shop Now', 'تسوقي الآن')}
          </a>
          <a href="#about" className="btn-luxury-outline text-sm md:text-base">
            {t('Discover Products', 'اكتشفي المنتجات')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary/50" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
