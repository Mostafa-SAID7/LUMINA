import { motion } from 'framer-motion';
import { Leaf, Heart, Shield, Sparkles } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/SectionHeading';

const features = [
  { icon: Leaf, en: 'Natural Ingredients', ar: 'مكونات طبيعية', descEn: 'Sourced from the purest botanical gardens worldwide.', descAr: 'مستخرجة من أنقى الحدائق النباتية حول العالم.' },
  { icon: Heart, en: 'Cruelty-Free', ar: 'خالية من القسوة', descEn: 'Never tested on animals. Beauty with compassion.', descAr: 'لم تُختبر على الحيوانات أبداً. جمال برحمة.' },
  { icon: Shield, en: 'Dermatologist Tested', ar: 'مختبرة من أطباء الجلدية', descEn: 'Clinically proven safe for all skin types.', descAr: 'آمنة سريرياً لجميع أنواع البشرة.' },
  { icon: Sparkles, en: 'Visible Results', ar: 'نتائج مرئية', descEn: '93% of users saw improvement in 4 weeks.', descAr: '93٪ من المستخدمات لاحظن تحسناً خلال 4 أسابيع.' },
];

const PhilosophySection = () => {
  const { t } = useLang();

  return (
    <section className="section">
      <SectionHeading
        eyebrowEn="Our Philosophy"
        eyebrowAr="فلسفتنا"
        titleEn="Why Choose "
        titleAr="لماذا تختارين "
        highlightEn="Lumina"
        highlightAr="لومينا"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.en}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 text-center glow-rose-hover"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <f.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-serif text-lg font-medium mb-3">{t(f.en, f.ar)}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t(f.descEn, f.descAr)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
