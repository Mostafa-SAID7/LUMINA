import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { en: 'Home', ar: 'الرئيسية' },
    { en: 'Products', ar: 'المنتجات' },
    { en: 'About', ar: 'عن لومينا' },
    { en: 'Contact', ar: 'تواصلي معنا' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-card-strong border-b border-foreground/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wider text-gradient-rose font-semibold">
          {t('LUMINA BEAUTY', 'لومينا بيوتي')}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.en}
              href={`#${link.en.toLowerCase()}`}
              className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {t(link.en, link.ar)}
            </a>
          ))}
        </div>

        {/* Right side */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card-strong border-t border-foreground/[0.05] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.en}
                  href={`#${link.en.toLowerCase()}`}
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
