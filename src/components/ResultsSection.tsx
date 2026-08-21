import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import aboutImg from '@/assets/about-image.jpg';

const ResultsSection = () => {
  const { t } = useLang();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="section">
      <SectionHeading
        eyebrowEn="Real Results"
        eyebrowAr="نتائج حقيقية"
        titleEn="Before & "
        titleAr="قبل و"
        highlightEn="After"
        highlightAr="بعد"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass-card p-8 md:p-12"
      >
        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-6 select-none">
          {/* After — vibrant, glowing skin */}
          <img
            src={aboutImg}
            alt={t('After — radiant, glowing skin', 'بعد — بشرة مشرقة ومتوهجة')}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(1.25) contrast(1.05) brightness(1.05)' }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          {/* Before — dull, uneven skin (clipped to the left of the slider) */}
          <img
            src={aboutImg}
            alt={t('Before — dull, uneven skin', 'قبل — بشرة باهتة وغير متساوية')}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              filter: 'grayscale(0.85) brightness(0.82) contrast(0.9) saturate(0.5)',
            }}
            loading="lazy"
            decoding="async"
            draggable={false}
          />

          {/* Labels */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-background/70 backdrop-blur-md text-foreground/70 border border-foreground/10">
            {t('Before', 'قبل')}
          </span>
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-primary/90 text-primary-foreground">
            {t('After', 'بعد')}
          </span>

          {/* Slider line + handle */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-primary" style={{ left: `${sliderPos}%` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
              <ChevronLeft size={14} />
              <ChevronRight size={14} className="-ml-1" />
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label={t('Drag to compare before and after', 'اسحبي للمقارنة بين قبل وبعد')}
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
