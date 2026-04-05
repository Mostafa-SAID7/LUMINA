import { motion } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

import productSerum from '@/assets/product-serum.jpg';
import productCream from '@/assets/product-cream.jpg';
import productLipstick from '@/assets/product-lipstick.jpg';
import productEyecream from '@/assets/product-eyecream.jpg';
import productOil from '@/assets/product-oil.jpg';
import productMask from '@/assets/product-mask.jpg';

const products = [
  { id: 1, img: productSerum, en: 'Radiance Glow Serum', ar: 'سيروم الإشراقة المتألقة', descEn: 'Vitamin C & Hyaluronic Acid', descAr: 'فيتامين سي وحمض الهيالورونيك', price: '$89' },
  { id: 2, img: productCream, en: 'Luminous Night Cream', ar: 'كريم الليل المضيء', descEn: 'Retinol & Peptide Complex', descAr: 'ريتينول ومركب الببتيد', price: '$120' },
  { id: 3, img: productLipstick, en: 'Velvet Rose Lipstick', ar: 'أحمر الشفاه المخملي', descEn: 'Long-lasting Matte Finish', descAr: 'لمسة مطفية تدوم طويلاً', price: '$45' },
  { id: 4, img: productEyecream, en: 'Revival Eye Cream', ar: 'كريم العيون المجدد', descEn: 'Anti-aging & Brightening', descAr: 'مضاد للتجاعيد ومفتّح', price: '$75' },
  { id: 5, img: productOil, en: 'Golden Elixir Face Oil', ar: 'زيت الإكسير الذهبي', descEn: 'Argan & Rosehip Blend', descAr: 'مزيج الأرغان وثمر الورد', price: '$95' },
  { id: 6, img: productMask, en: 'Hydra Glow Mask', ar: 'ماسك الترطيب المتوهج', descEn: 'Deep Hydration Treatment', descAr: 'علاج ترطيب عميق', price: '$55' },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group glass-card overflow-hidden glow-rose-hover"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.img}
          alt={product.en}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 gap-3">
          <button
            className="bg-primary/90 text-primary-foreground p-2.5 rounded-full hover:scale-110 transition-transform"
            aria-label="Quick view"
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => toast.success(t('Added to cart!', 'تمت الإضافة إلى السلة!'))}
            className="bg-primary/90 text-primary-foreground p-2.5 rounded-full hover:scale-110 transition-transform"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-medium mb-1">{t(product.en, product.ar)}</h3>
        <p className="text-muted-foreground text-sm mb-3">{t(product.descEn, product.descAr)}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold text-lg">{product.price}</span>
          <button
            onClick={() => toast.success(t('Added to cart!', 'تمت الإضافة إلى السلة!'))}
            className="text-xs text-primary/70 hover:text-primary transition-colors tracking-wide uppercase"
          >
            {t('Add to Cart', 'أضيفي للسلة')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const { t } = useLang();

  return (
    <section id="products" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary/70 tracking-[0.2em] text-xs uppercase mb-4">
          {t('Best Sellers', 'الأكثر مبيعاً')}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold">
          {t('Signature ', 'المنتجات ')}
          <span className="text-gradient-rose">{t('Collection', 'المميزة')}</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
