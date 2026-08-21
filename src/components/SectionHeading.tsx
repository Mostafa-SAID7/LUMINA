import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

interface SectionHeadingProps {
  eyebrowEn: string;
  eyebrowAr: string;
  titleEn: string;
  titleAr: string;
  highlightEn: string;
  highlightAr: string;
  className?: string;
}

const SectionHeading = ({
  eyebrowEn,
  eyebrowAr,
  titleEn,
  titleAr,
  highlightEn,
  highlightAr,
  className,
}: SectionHeadingProps) => {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className ?? ''}`}
    >
      <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
        {t(eyebrowEn, eyebrowAr)}
      </p>
      <h2 className="font-serif text-3xl md:text-5xl font-semibold">
        {t(titleEn, titleAr)} <span className="text-gradient-rose">{t(highlightEn, highlightAr)}</span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
