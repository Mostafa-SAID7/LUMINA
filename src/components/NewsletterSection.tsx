import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useLang } from '@/contexts/LanguageContext';

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

const NewsletterSection = () => {
  const { t } = useLang();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    toast.success(t('Welcome to the Lumina Glow Club! 🌟', 'مرحباً بكِ في نادي إشراقة لومينا! 🌟'));
    reset();
  };

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center glass-card p-10 md:p-16 glow-rose relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-champagne/5 blur-3xl animate-glow-pulse" />

        <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
          {t('Exclusive Access', 'وصول حصري')}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
          {t('Join the Lumina', 'انضمي إلى نادي')}
          <br />
          <span className="text-gradient-rose">{t('Glow Club', 'إشراقة لومينا')}</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          {t(
            'Get early access to new launches, exclusive offers, and personalized beauty tips.',
            'احصلي على وصول مبكر للإطلاقات الجديدة وعروض حصرية ونصائح جمال مخصصة.'
          )}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            {...register('email')}
            type="email"
            placeholder={t('Enter your email', 'أدخلي بريدك الإلكتروني')}
            className="flex-1 px-5 py-3 rounded-full bg-muted/50 border border-foreground/[0.08] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/40 transition-colors"
          />
          <button type="submit" className="btn-luxury text-sm whitespace-nowrap">
            {t('Join Now', 'انضمي الآن')}
          </button>
        </form>
        {errors.email && (
          <p className="text-destructive text-xs mt-2">{t('Please enter a valid email', 'يرجى إدخال بريد إلكتروني صحيح')}</p>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
