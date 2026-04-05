import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Calendar, User, Mail, Phone } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const schema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  phone: z.string().trim().min(7, 'Phone is required').max(20),
  date: z.string().min(1, 'Date is required'),
});

type FormData = z.infer<typeof schema>;

const ConsultationSection = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    toast.success(t('Consultation booked successfully! ✨', 'تم حجز الاستشارة بنجاح! ✨'));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = "w-full px-5 py-3 rounded-xl bg-muted/30 border border-foreground/[0.08] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/40 transition-colors";

  return (
    <section id="consultation" className="section-padding max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
            {t('Personal Consultation', 'استشارة شخصية')}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            {t('Book Your ', 'احجزي ')}
            <span className="text-gradient-rose">{t('Beauty Session', 'جلسة جمالك')}</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-6">
            {t(
              'Get personalized skincare advice from our expert beauty consultants. We\'ll analyze your skin type and create a custom routine tailored just for you.',
              'احصلي على نصائح مخصصة للعناية بالبشرة من خبراء الجمال لدينا. سنحلل نوع بشرتك ونصمم روتيناً مخصصاً لكِ فقط.'
            )}
          </p>

          <div className="space-y-3">
            {[
              { en: 'Free 30-minute virtual consultation', ar: 'استشارة مجانية لمدة 30 دقيقة عبر الإنترنت' },
              { en: 'Personalized product recommendations', ar: 'توصيات منتجات مخصصة' },
              { en: 'Expert skin analysis', ar: 'تحليل بشرة من خبراء متخصصين' },
            ].map((item) => (
              <div key={item.en} className="flex items-center gap-3 text-foreground/70 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                {t(item.en, item.ar)}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-10 glow-rose-hover">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">{t('You\'re all set!', 'تم الحجز!')}</h3>
                <p className="text-muted-foreground text-sm">{t('We\'ll contact you soon to confirm.', 'سنتواصل معكِ قريباً للتأكيد.')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="font-serif text-xl font-medium mb-2 text-center">
                  {t('Schedule Your Session', 'حددي موعد جلستك')}
                </h3>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    {...register('name')}
                    placeholder={t('Your Name', 'اسمكِ')}
                    className={`${inputClass} pl-11`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{t('Name is required', 'الاسم مطلوب')}</p>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder={t('Email Address', 'البريد الإلكتروني')}
                    className={`${inputClass} pl-11`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{t('Valid email required', 'بريد إلكتروني صحيح مطلوب')}</p>}
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder={t('Phone Number', 'رقم الهاتف')}
                    className={`${inputClass} pl-11`}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{t('Phone is required', 'رقم الهاتف مطلوب')}</p>}
                </div>

                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    {...register('date')}
                    type="date"
                    className={`${inputClass} pl-11`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-destructive text-xs mt-1">{t('Date is required', 'التاريخ مطلوب')}</p>}
                </div>

                <button type="submit" className="btn-luxury w-full text-sm text-center">
                  {t('Book Consultation', 'احجزي الاستشارة')}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;
