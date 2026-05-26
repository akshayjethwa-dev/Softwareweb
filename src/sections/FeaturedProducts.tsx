import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fetchProducts } from '../lib/queries';
import { Product } from '../types';
import { ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        // Filter for featured products and limit to 3
        const featured = data.filter((p: Product) => p.featuredProduct).slice(0, 3);
        setProducts(featured);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading || products.length === 0) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-500/10 border border-green-500/20 rounded-full">Live</span>;
      case 'beta':
        return <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-500/10 border border-amber-500/20 rounded-full">Beta</span>;
      default:
        return <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-full">{status.replace('-', ' ')}</span>;
    }
  };

  return (
    <section className="py-24 px-6 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              Real Software Built for <span className="text-brand-primary">Indian Businesses.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just write code; we build scalable digital assets. Explore the platforms, tools, and SaaS products we've engineered from the ground up.
            </p>
          </div>
          <Link 
            to="/products" 
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-background border border-border rounded-3xl p-8 hover:border-brand-primary/30 transition-colors shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-brand-primary">
                  {product.logoUrl ? (
                    <img src={product.logoUrl} alt={product.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <Terminal className="w-6 h-6" />
                  )}
                </div>
                {getStatusBadge(product.status)}
              </div>
              
              <h3 className="text-2xl font-black tracking-tighter mb-2 group-hover:text-brand-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 h-10 line-clamp-2">
                {product.tagline}
              </p>

              {/* Show one key feature/outcome */}
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="mb-8 pt-6 border-t border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {product.keyFeatures[0].title}
                    </span>
                  </div>
                </div>
              )}

              <Link 
                to={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold bg-muted text-foreground px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all w-full justify-center group/btn"
              >
                {product.ctaLabel || 'Explore Product'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}