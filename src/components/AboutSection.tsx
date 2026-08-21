import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import aboutImg from '@/assets/about-image.jpg';

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden cinematic-shadow">
            <img src={aboutImg} alt="About Lumina Beauty" className="w-full aspect-[4/5] object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
            {t('Our Story', 'قصتنا')}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            {t('Beauty Rooted in ', 'جمال متجذر في ')}
            <span className="text-gradient-rose">{t('Nature', 'الطبيعة')}</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-6">
            {t(
              'Lumina Beauty was born from a passion for clean, effective skincare that celebrates every woman\'s natural radiance. We blend the finest botanical extracts with cutting-edge science to create products that transform your skin and elevate your daily ritual.',
              'وُلدت لومينا بيوتي من شغف بالعناية النظيفة والفعّالة بالبشرة التي تحتفي بإشراقة كل امرأة الطبيعية. نمزج أجود المستخلصات النباتية مع أحدث الابتكارات العلمية لنصنع منتجات تحوّل بشرتك وترتقي بطقوسك اليومية.'
            )}
          </p>
          <p className="text-foreground/40 leading-relaxed text-sm">
            {t(
              'From our eco-conscious packaging to our cruelty-free formulas, every detail reflects our commitment to beauty that\'s kind to you and the planet.',
              'من عبواتنا الصديقة للبيئة إلى تركيباتنا الخالية من القسوة، كل تفصيلة تعكس التزامنا بجمال لطيف عليكِ وعلى كوكبنا.'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
