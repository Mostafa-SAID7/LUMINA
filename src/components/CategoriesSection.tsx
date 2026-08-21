import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import catSkincare from '@/assets/cat-skincare.jpg';
import catMakeup from '@/assets/cat-makeup.jpg';
import catHaircare from '@/assets/cat-haircare.jpg';
import catBodycare from '@/assets/cat-bodycare.jpg';

const categories = [
  { img: catSkincare, en: 'Skincare', ar: 'العناية بالبشرة' },
  { img: catMakeup, en: 'Makeup', ar: 'المكياج' },
  { img: catHaircare, en: 'Hair Care', ar: 'العناية بالشعر' },
  { img: catBodycare, en: 'Body Care', ar: 'العناية بالجسم' },
];

const CategoriesSection = () => {
  const { t } = useLang();

  return (
    <section className="section">
      <SectionHeading
        eyebrowEn="Shop By Category"
        eyebrowAr="تسوقي حسب الفئة"
        titleEn="Explore Our "
        titleAr="استكشفي "
        highlightEn="World"
        highlightAr="عالمنا"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.en}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer cinematic-shadow"
          >
            <img
              src={cat.img}
              alt={cat.en}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl md:text-2xl font-medium">{t(cat.en, cat.ar)}</h3>
              <p className="text-primary/70 text-sm mt-1 group-hover:text-primary transition-colors">
                {t('Explore →', '← استكشفي')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
