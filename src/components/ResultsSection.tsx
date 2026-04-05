import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

const ResultsSection = () => {
  const { t } = useLang();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
          {t('Real Results', 'نتائج حقيقية')}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold">
          {t('Before & ', 'قبل و')}
          <span className="text-gradient-rose">{t('After', 'بعد')}</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass-card p-8 md:p-12"
      >
        {/* Simulated before/after with gradient slider */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-6">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, hsl(18 15% 25%) ${sliderPos}%, hsl(352 42% 81% / 0.3) ${sliderPos}%)`,
            }}
          />
          <div className="absolute inset-0 flex">
            <div className="flex-1 flex items-center justify-center" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <div className="text-center">
                <p className="font-serif text-2xl text-foreground/40">{t('Before', 'قبل')}</p>
                <p className="text-foreground/30 text-sm mt-2">{t('Dull & uneven skin', 'بشرة باهتة وغير متساوية')}</p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center" style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
              <div className="text-center">
                <p className="font-serif text-2xl text-primary">{t('After', 'بعد')}</p>
                <p className="text-primary/60 text-sm mt-2">{t('Radiant & glowing', 'مشرقة ومتوهجة')}</p>
              </div>
            </div>
          </div>
          {/* Slider line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-primary/60" style={{ left: `${sliderPos}%` }} />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { en: '93%', ar: '٩٣٪', label: { en: 'Saw improvement', ar: 'لاحظن تحسناً' } },
            { en: '4 Weeks', ar: '٤ أسابيع', label: { en: 'Visible results', ar: 'نتائج مرئية' } },
            { en: '10K+', ar: '+١٠ آلاف', label: { en: 'Happy customers', ar: 'عميلة سعيدة' } },
          ].map((stat) => (
            <div key={stat.en}>
              <p className="font-serif text-2xl md:text-3xl text-gradient-rose font-semibold">{t(stat.en, stat.ar)}</p>
              <p className="text-muted-foreground text-xs mt-1">{t(stat.label.en, stat.label.ar)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ResultsSection;
