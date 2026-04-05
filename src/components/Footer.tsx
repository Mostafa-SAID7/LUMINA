import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-foreground/[0.05] mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl text-gradient-rose font-semibold mb-4">
              {t('LUMINA BEAUTY', 'لومينا بيوتي')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                'Luxury skincare & beauty essentials for the modern woman.',
                'العناية الفاخرة بالبشرة والجمال للمرأة العصرية.'
              )}
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-foreground/[0.1] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: { en: 'Shop', ar: 'تسوقي' },
              links: [
                { en: 'Skincare', ar: 'العناية بالبشرة' },
                { en: 'Makeup', ar: 'المكياج' },
                { en: 'Hair Care', ar: 'العناية بالشعر' },
                { en: 'Body Care', ar: 'العناية بالجسم' },
              ],
            },
            {
              title: { en: 'Company', ar: 'الشركة' },
              links: [
                { en: 'About Us', ar: 'عن لومينا' },
                { en: 'Careers', ar: 'وظائف' },
                { en: 'Press', ar: 'الصحافة' },
                { en: 'Contact', ar: 'تواصلي معنا' },
              ],
            },
            {
              title: { en: 'Support', ar: 'الدعم' },
              links: [
                { en: 'FAQ', ar: 'الأسئلة الشائعة' },
                { en: 'Shipping', ar: 'الشحن' },
                { en: 'Returns', ar: 'المرتجعات' },
                { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
              ],
            },
          ].map((col) => (
            <div key={col.title.en}>
              <h4 className="font-serif font-medium mb-4">{t(col.title.en, col.title.ar)}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.en}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {t(link.en, link.ar)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Lumina Beauty. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
          <div className="flex gap-4 text-muted-foreground text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Apple Pay</span>
            <span>Mada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
