import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    en: 'Lumina\'s serum completely transformed my skin. I\'ve never felt more radiant and confident.',
    ar: 'سيروم لومينا حوّل بشرتي بالكامل. لم أشعر أبداً بهذا القدر من الإشراق والثقة.',
    name: { en: 'Sarah M.', ar: 'سارة م.' },
    role: { en: 'Verified Buyer', ar: 'مشترية موثقة' },
  },
  {
    en: 'The night cream is pure luxury. My skin feels like silk every morning. Worth every penny.',
    ar: 'كريم الليل فخامة بحد ذاته. بشرتي تصبح كالحرير كل صباح. يستحق كل ريال.',
    name: { en: 'Nora A.', ar: 'نورة أ.' },
    role: { en: 'Skincare Enthusiast', ar: 'عاشقة العناية بالبشرة' },
  },
  {
    en: 'Finally, a brand that delivers on its promises. The golden elixir oil is my holy grail product.',
    ar: 'أخيراً، علامة تجارية تفي بوعودها. زيت الإكسير الذهبي هو منتجي المفضل.',
    name: { en: 'Layla K.', ar: 'ليلى ك.' },
    role: { en: 'Beauty Blogger', ar: 'مدونة جمال' },
  },
  {
    en: 'I bought the full collection as a gift and my mother couldn\'t stop talking about how soft her skin became.',
    ar: 'اشتريت المجموعة الكاملة كهدية وأمي لم تتوقف عن الحديث عن نعومة بشرتها.',
    name: { en: 'Fatima R.', ar: 'فاطمة ر.' },
    role: { en: 'Verified Buyer', ar: 'مشترية موثقة' },
  },
];

const TestimonialsSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
          {t('Testimonials', 'آراء العملاء')}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold">
          {t('What Our Clients ', 'ماذا تقول ')}
          <span className="text-gradient-rose">{t('Say', 'عميلاتنا')}</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed flex-1 mb-6 text-sm italic">
                  "{t(item.en, item.ar)}"
                </p>
                <div>
                  <p className="font-serif font-medium">{t(item.name.en, item.name.ar)}</p>
                  <p className="text-muted-foreground text-xs">{t(item.role.en, item.role.ar)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
