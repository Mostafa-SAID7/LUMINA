import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { en: 'Home', ar: 'الرئيسية', href: '#home' },
    { en: 'Products', ar: 'المنتجات', href: '#products' },
    { en: 'About', ar: 'عن لومينا', href: '#about' },
    { en: 'Consultation', ar: 'استشارة', href: '#consultation' },
    { en: 'Contact', ar: 'تواصلي معنا', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-background/90 backdrop-blur-2xl border-foreground/[0.08] shadow-lg shadow-background/50'
          : 'bg-transparent backdrop-blur-none border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-serif text-xl md:text-2xl tracking-wider text-gradient-rose font-semibold">
          {t('LUMINA BEAUTY', 'لومينا بيوتي')}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.en}
              href={link.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {t(link.en, link.ar)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button className="text-foreground/70 hover:text-primary transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="text-foreground/70 hover:text-primary transition-colors" aria-label="Cart">
            <ShoppingBag size={18} />
          </button>
          <button
            className="md:hidden text-foreground/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-foreground/[0.05] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.en}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/70 hover:text-primary transition-colors text-lg"
                >
                  {t(link.en, link.ar)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
