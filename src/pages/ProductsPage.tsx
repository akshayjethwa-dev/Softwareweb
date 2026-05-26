import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { fetchProducts } from '../lib/queries';
import { Product } from '../types';
import { ArrowRight, CheckCircle2, ExternalLink, Target, AlertCircle, Zap } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  // --- FILTERING LOGIC (Task 2.3) ---
  
  // Extract unique product types for the filter chips dynamically
  const availableFilters = useMemo(() => {
    const types = products.map(p => p.productType).filter(Boolean) as string[];
    const uniqueTypes = Array.from(new Set(types));
    return ['All', ...uniqueTypes];
  }, [products]);

  // Apply the active filter
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return products;
    return products.filter(p => p.productType === activeFilter);
  }, [products, activeFilter]);

  // Format filter labels (e.g., 'internal-tool' -> 'Internal Tool')
  const formatFilterLabel = (label: string) => {
    if (label === 'All') return 'All Solutions';
    return label.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };


  // --- UI HELPERS (Task 2.2) ---

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; classes: string }> = {
      'live': { label: 'Live', classes: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
      'beta': { label: 'Beta', classes: 'bg-amber-50 text-amber-700 border-amber-200' },
      'private': { label: 'Private', classes: 'bg-slate-100 text-slate-700 border-slate-200' },
      'available-for-licensing': { label: 'Available for Licensing', classes: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
      'white-label-ready': { label: 'White-Label Ready', classes: 'bg-purple-50 text-purple-700 border-purple-200' },
    };
    const mapped = statusMap[status] || { label: status, classes: 'bg-gray-100 text-gray-800 border-gray-200' };
    return <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${mapped.classes} uppercase tracking-wider`}>{mapped.label}</span>;
  };

  // Smart CTA Generation based on product status
  const getTailoredCTA = (product: Product) => {
    if (product.ctaLabel) return product.ctaLabel; // Respect explicit CMS override
    
    switch (product.status) {
      case 'live': return 'Explore Product';
      case 'beta': return 'Request Beta Access';
      case 'private': return 'Request Demo';
      case 'available-for-licensing': return 'Discuss Licensing';
      case 'white-label-ready': return 'View White-Label Options';
      default: return 'Learn More';
    }
  };

  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-50 min-h-screen">
      <SEO 
        title="Our Solutions & Platforms | Turnkey Enterprise Assets"
        description="Explore our portfolio of commercial software assets, internal tools, and white-label platforms designed to accelerate your business operations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Commercial Platforms & Solutions
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            Ready-to-deploy platforms, internal tools, and SaaS architectures built to solve complex operational bottlenecks.
          </p>
        </div>

        {/* Filter Section (Task 2.3) */}
        {!isLoading && availableFilters.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {formatFilterLabel(filter)}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          /* Products Grid (Task 2.2 Impact-First Design) */
          <div className="grid gap-12">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">No solutions currently match this category.</p>
                <button 
                  onClick={() => setActiveFilter('All')}
                  className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200"
                >
                  {/* Left Side: Business Impact Content */}
                  <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col order-2 lg:order-1">
                    
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      {getStatusBadge(product.status)}
                      {product.productType && (
                        <span className="text-sm font-medium text-slate-500 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span>
                          {formatFilterLabel(product.productType)}
                        </span>
                      )}
                    </div>

                    {/* Core Identity */}
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h2>
                    <p className="text-lg font-medium text-indigo-600 mb-6">{product.tagline}</p>
                    
                    {/* Business Framing Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-8 grow">
                      {/* Problem Statement */}
                      {product.primaryProblemSolved && (
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2 text-rose-500" />
                            The Challenge
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {product.primaryProblemSolved}
                          </p>
                        </div>
                      )}

                      {/* Ideal Customer Segment */}
                      {product.idealFor && (
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-blue-500" />
                            Built For
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {product.idealFor}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Single High-Impact Proof Point / Benefit */}
                    {(product.keyOutcomes && product.keyOutcomes.length > 0) ? (
                      <div className="mb-8 flex items-start">
                        <Zap className="w-5 h-5 text-amber-500 mr-3 shrink-0 mt-0.5" />
                        <p className="text-slate-700 font-medium">
                          <span className="font-bold text-slate-900">Key Impact: </span> 
                          {product.keyOutcomes[0]}
                        </p>
                      </div>
                    ) : (
                      <p className="text-slate-600 mb-8">{product.description}</p>
                    )}

                    {/* Tailored CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-slate-100">
                      {product.ctaUrl ? (
                        <a 
                          href={product.ctaUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                          {getTailoredCTA(product)}
                          <ExternalLink className="ml-2 -mr-1 w-4 h-4" />
                        </a>
                      ) : (
                        <Link 
                          to="/contact"
                          className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                          {getTailoredCTA(product)}
                        </Link>
                      )}
                      
                      <Link 
                        to={`/products/${product.slug}`}
                        className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                      >
                        Technical Overview
                        <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Media (Swapped to right for business logic flow) */}
                  <div className="lg:w-2/5 flex items-center justify-center bg-slate-100 border-b lg:border-b-0 lg:border-l border-slate-200 relative overflow-hidden group order-1 lg:order-2 min-h-62.5 lg:min-h-full">
                    {product.coverImageUrl ? (
                      <img 
                        src={product.coverImageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : product.logoUrl ? (
                      <div className="p-12 w-full h-full flex items-center justify-center bg-white">
                         <img src={product.logoUrl} alt={`${product.name} Logo`} className="max-h-32 object-contain" />
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                        <span className="text-lg font-medium">Internal Asset</span>
                        <span className="text-sm">Preview Unavailable</span>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}