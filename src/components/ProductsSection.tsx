import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, X, Star, Droplets, CheckCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import { toast } from 'sonner';

import productSerum from '@/assets/product-serum.jpg';
import productCream from '@/assets/product-cream.jpg';
import productLipstick from '@/assets/product-lipstick.jpg';
import productEyecream from '@/assets/product-eyecream.jpg';
import productOil from '@/assets/product-oil.jpg';
import productMask from '@/assets/product-mask.jpg';

const products = [
  {
    id: 1, img: productSerum, en: 'Radiance Glow Serum', ar: 'سيروم الإشراقة المتألقة',
    descEn: 'Vitamin C & Hyaluronic Acid', descAr: 'فيتامين سي وحمض الهيالورونيك', price: '$89',
    fullDescEn: 'A powerful blend of 15% Vitamin C and triple-weight Hyaluronic Acid that penetrates deep to brighten, hydrate, and protect your skin. Visible results in just 2 weeks.',
    fullDescAr: 'مزيج قوي من 15٪ فيتامين سي وحمض الهيالورونيك ثلاثي الوزن يتغلغل عميقاً لتفتيح وترطيب وحماية بشرتك. نتائج مرئية خلال أسبوعين فقط.',
    size: '30ml', rating: 4.9,
    ingredients: { en: 'Vitamin C, Hyaluronic Acid, Niacinamide, Aloe Vera', ar: 'فيتامين سي، حمض الهيالورونيك، نياسيناميد، الصبار' }
  },
  {
    id: 2, img: productCream, en: 'Luminous Night Cream', ar: 'كريم الليل المضيء',
    descEn: 'Retinol & Peptide Complex', descAr: 'ريتينول ومركب الببتيد', price: '$120',
    fullDescEn: 'An ultra-rich night cream infused with encapsulated Retinol and a powerful Peptide Complex. Repairs and rejuvenates skin while you sleep for a youthful morning glow.',
    fullDescAr: 'كريم ليلي غني للغاية مشبع بالريتينول المغلف ومركب ببتيد قوي. يُصلح ويجدد البشرة أثناء النوم لإشراقة صباحية شابة.',
    size: '50ml', rating: 4.8,
    ingredients: { en: 'Retinol, Peptides, Shea Butter, Squalane', ar: 'ريتينول، ببتيدات، زبدة الشيا، سكوالان' }
  },
  {
    id: 3, img: productLipstick, en: 'Velvet Rose Lipstick', ar: 'أحمر الشفاه المخملي',
    descEn: 'Long-lasting Matte Finish', descAr: 'لمسة مطفية تدوم طويلاً', price: '$45',
    fullDescEn: 'A luxuriously creamy matte lipstick in a timeless rose shade. Enriched with Vitamin E and Jojoba Oil for all-day comfort without drying. Lasts up to 12 hours.',
    fullDescAr: 'أحمر شفاه مطفي كريمي فاخر بلون وردي خالد. مُعزز بفيتامين E وزيت الجوجوبا لراحة طوال اليوم بدون جفاف. يدوم حتى 12 ساعة.',
    size: '3.5g', rating: 4.7,
    ingredients: { en: 'Vitamin E, Jojoba Oil, Beeswax, Mica', ar: 'فيتامين E، زيت الجوجوبا، شمع العسل، ميكا' }
  },
  {
    id: 4, img: productEyecream, en: 'Revival Eye Cream', ar: 'كريم العيون المجدد',
    descEn: 'Anti-aging & Brightening', descAr: 'مضاد للتجاعيد ومفتّح', price: '$75',
    fullDescEn: 'A targeted eye treatment with Caffeine and Peptides to reduce dark circles, puffiness, and fine lines. The delicate eye area deserves this luxurious care.',
    fullDescAr: 'علاج مركّز للعيون بالكافيين والببتيدات لتقليل الهالات السوداء والانتفاخ والخطوط الدقيقة. منطقة العين الرقيقة تستحق هذه العناية الفاخرة.',
    size: '15ml', rating: 4.9,
    ingredients: { en: 'Caffeine, Peptides, Vitamin K, Cucumber Extract', ar: 'كافيين، ببتيدات، فيتامين K، مستخلص الخيار' }
  },
  {
    id: 5, img: productOil, en: 'Golden Elixir Face Oil', ar: 'زيت الإكسير الذهبي',
    descEn: 'Argan & Rosehip Blend', descAr: 'مزيج الأرغان وثمر الورد', price: '$95',
    fullDescEn: 'A luxurious dry oil that absorbs instantly, delivering deep nourishment with pure Argan and Rosehip oils. Leaves skin with a luminous, healthy glow without greasiness.',
    fullDescAr: 'زيت جاف فاخر يُمتص فوراً، يوفر تغذية عميقة بزيوت الأرغان وثمر الورد النقية. يترك البشرة بإشراقة صحية متوهجة بدون دهنية.',
    size: '30ml', rating: 4.8,
    ingredients: { en: 'Argan Oil, Rosehip Oil, Vitamin E, Gold Particles', ar: 'زيت الأرغان، زيت ثمر الورد، فيتامين E، جزيئات الذهب' }
  },
  {
    id: 6, img: productMask, en: 'Hydra Glow Mask', ar: 'ماسك الترطيب المتوهج',
    descEn: 'Deep Hydration Treatment', descAr: 'علاج ترطيب عميق', price: '$55',
    fullDescEn: 'An intensive overnight mask that floods skin with moisture using a blend of ceramides and botanical extracts. Wake up to plump, dewy, glass-like skin.',
    fullDescAr: 'ماسك ليلي مكثف يغمر البشرة بالرطوبة بمزيج من السيراميد والمستخلصات النباتية. استيقظي على بشرة ممتلئة وندية كالزجاج.',
    size: '75ml', rating: 4.6,
    ingredients: { en: 'Ceramides, Centella Asiatica, Honey, Glycerin', ar: 'سيراميد، سنتيلا آسياتيكا، عسل، جليسرين' }
  },
];

type Product = typeof products[0];

const QuickViewModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative glass-card-strong max-w-3xl w-full max-h-[90vh] overflow-y-auto glow-rose"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-square md:aspect-auto overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <img src={product.img} alt={product.en} className="w-full h-full object-cover" />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p className="text-primary/60 tracking-[0.15em] text-xs uppercase mb-2">
              {t('Lumina Beauty', 'لومينا بيوتي')}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
              {t(product.en, product.ar)}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground text-xs">{product.rating} / 5.0</span>
            </div>

            <p className="text-foreground/70 text-sm leading-relaxed mb-5">
              {t(product.fullDescEn, product.fullDescAr)}
            </p>

            <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Droplets size={12} className="text-primary" /> {product.size}</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-primary" /> {t('Cruelty-Free', 'خالي من القسوة')}</span>
            </div>

            <div className="mb-6">
              <p className="text-xs text-muted-foreground mb-1">{t('Key Ingredients:', 'المكونات الرئيسية:')}</p>
              <p className="text-foreground/60 text-xs">{t(product.ingredients.en, product.ingredients.ar)}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-primary font-serif text-2xl font-semibold">{product.price}</span>
              <button
                onClick={() => {
                  toast.success(t('Added to cart!', 'تمت الإضافة إلى السلة!'));
                  onClose();
                }}
                className="btn-luxury flex-1 text-sm text-center"
              >
                {t('Add to Cart', 'أضيفي للسلة')}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) => {
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
            onClick={() => onQuickView(product)}
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
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="section">
      <SectionHeading
        eyebrowEn="Best Sellers"
        eyebrowAr="الأكثر مبيعاً"
        titleEn="Signature "
        titleAr="المنتجات "
        highlightEn="Collection"
        highlightAr="المميزة"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
        ))}
      </div>

      <AnimatePresence>
        {quickViewProduct && (
          <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;
