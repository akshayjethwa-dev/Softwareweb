import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug } from '../lib/queries';
import { Product } from '../types';
import SEO from '../components/SEO';
import { ArrowRight, CheckCircle2, ExternalLink, Target, AlertCircle, Zap, Shield, ChevronRight, LayoutTemplate, ShieldCheck, Quote } from 'lucide-react';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return <NotFound />;
  }

  // --- TASK 4.3: Request Demo / Licensing CTA Framework ---
  const getTailoredCTA = () => {
    if (product.ctaLabel) return product.ctaLabel;
    switch (product.status) {
      case 'live': return 'Request Demo';
      case 'beta': return 'Request Beta Access';
      case 'private': return 'Talk to Us About a Similar Build';
      case 'available-for-licensing': return 'Discuss Licensing';
      case 'white-label-ready': return 'Launch This for Your Business';
      default: return 'Contact Us';
    }
  };

  const statusMap: Record<string, string> = {
    'live': 'Live & Active',
    'beta': 'In Beta',
    'private': 'Private Access',
    'available-for-licensing': 'Licensable IP',
    'white-label-ready': 'White-Label Ready'
  };

  return (
    <div className="bg-white">
      <SEO 
        title={product.seoTitle || `${product.name} | Commercial Software Solution`}
        description={product.seoDescription || product.description}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              
              {/* --- TASK 4.1: Trust Signal Badge --- */}
              {product.isBuiltInHouse !== false && (
                <div className="inline-flex items-center text-indigo-300 mb-6 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-sm shadow-sm">
                  <ShieldCheck className="w-5 h-5 mr-2 text-indigo-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">Built In-House by Ashrey Systems</span>
                </div>
              )}

              <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-1.5 border border-slate-700 mb-6 backdrop-blur-sm ml-0 lg:ml-4">
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${product.status === 'live' ? 'bg-emerald-400' : 'bg-indigo-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${product.status === 'live' ? 'bg-emerald-500' : 'bg-indigo-500'}`}></span>
                </span>
                <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                  {statusMap[product.status] || product.status}
                </span>
                {product.productType && (
                  <>
                    <span className="text-slate-600">|</span>
                    <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                      {product.productType.replace(/-/g, ' ')}
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-indigo-200 font-medium mb-8 leading-relaxed">
                {product.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {product.ctaUrl ? (
                  <a href={product.ctaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-slate-900 bg-white hover:bg-indigo-50 transition-colors shadow-lg">
                    {getTailoredCTA()}
                    <ExternalLink className="ml-2 -mr-1 w-5 h-5" />
                  </a>
                ) : (
                  <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-slate-900 bg-white hover:bg-indigo-50 transition-colors shadow-lg">
                    {getTailoredCTA()}
                    <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                  </Link>
                )}
                {product.demoUrl && (
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-colors">
                    View Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {product.coverImageUrl ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                  <div className="absolute top-0 w-full h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 space-x-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <img src={product.coverImageUrl} alt={product.name} className="w-full h-auto pt-8 object-cover object-top opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              ) : product.logoUrl ? (
                <div className="bg-slate-800 p-16 rounded-3xl border border-slate-700 flex justify-center items-center h-full min-h-75">
                  <img src={product.logoUrl} alt={`${product.name} Logo`} className="max-h-48 object-contain" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* --- TASK 4.2: FOUNDER's NOTE --- */}
      {product.founderNote && (
        <section className="pt-16 pb-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-200 shadow-sm">
              <Quote className="absolute -top-6 -left-6 w-32 h-32 text-indigo-100 opacity-60 transform -rotate-12" />
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Founder's Note</h3>
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium mb-8">
                  "{product.founderNote.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-inner">
                    {product.founderNote.signature ? product.founderNote.signature.charAt(0) : 'A'}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{product.founderNote.signature || 'Akshay Jethwa'}</p>
                    <p className="text-sm text-slate-500 font-medium">Founder, Ashrey Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- BUSINESS VALUE STORYTELLING --- */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Why Businesses Need {product.name}</h2>
            <p className="mt-4 text-lg text-slate-600">{product.fullDescription}</p>
            
            {product.pricingModel && (
              <div className="mt-8 inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-4">
                <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                <div className="text-left">
                  <h4 className="text-indigo-900 font-bold capitalize text-sm">Deployment Model: {product.pricingModel}</h4>
                  {product.startingPriceText && <p className="text-indigo-700 text-sm mt-0.5">{product.startingPriceText}</p>}
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {product.primaryProblemSolved && (
              <div className="bg-white rounded-2xl p-8 border border-rose-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                <div className="flex items-center mb-4">
                  <AlertCircle className="text-rose-500 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">The Problem Before</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">{product.primaryProblemSolved}</p>
              </div>
            )}

            {product.idealFor && (
              <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                <div className="flex items-center mb-4">
                  <Target className="text-indigo-600 w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Who This is Built For</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">{product.idealFor}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- SCREENSHOTS & GALLERY BLOCK --- */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="py-20 lg:py-32 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center">
                <LayoutTemplate className="w-8 h-8 mr-3 text-indigo-600" />
                Inside the Platform
              </h2>
              <p className="mt-4 text-lg text-slate-600">See exactly how the interface drives operational efficiency.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {product.gallery.map((img, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 mb-4 grow">
                    <div className="bg-slate-200/50 border-b border-slate-200 px-3 py-2 flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    <img 
                      src={img.url} 
                      alt={img.caption || `Screenshot ${idx + 1}`} 
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-slate-600 font-medium px-1 border-l-2 border-indigo-500 pl-3">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- CAPABILITIES & FEATURES --- */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Technical Capabilities</h2>
            <p className="mt-4 text-xl text-gray-500">Everything you need to solve the bottleneck, out-of-the-box.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {product.keyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 border border-indigo-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                {feature.description && <p className="text-gray-600 leading-relaxed">{feature.description}</p>}
              </div>
            ))}
          </div>

          {product.keyOutcomes && product.keyOutcomes.length > 0 && (
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
              <Zap className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-10">What Changes After Implementation?</h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
                {product.keyOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 shrink-0" />
                    <span className="text-lg text-slate-200 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- RELATED SERVICES & FAQS --- */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          
          <div>
            {/* Task 5.2: Real Case Study References (Priority) */}
            {product.relatedCaseStudies && product.relatedCaseStudies.length > 0 ? (
               <div className="mb-12">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Success Stories</h3>
               <div className="space-y-4">
                 {/* Explicitly typed parameter to avoid implicit any error */}
                 {product.relatedCaseStudies.map((cs: { _id: string; title: string; slug: string; clientName: string }) => (
                   <Link key={cs._id} to={`/case-studies/${cs.slug}`} className="block group bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-600 hover:shadow-md transition-all">
                     <div className="flex justify-between items-center">
                       <div>
                         <span className="text-sm font-bold text-indigo-600 mb-1 block">{cs.clientName}</span>
                         <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{cs.title}</span>
                       </div>
                       <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                     </div>
                   </Link>
                 ))}
               </div>
             </div>
            ) : product.relatedCaseStudyLinks && product.relatedCaseStudyLinks.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Success Stories</h3>
                <div className="space-y-4">
                  {product.relatedCaseStudyLinks.map((cs, idx) => (
                    <Link key={idx} to={cs.url} className="block group bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-600 hover:shadow-md transition-all">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{cs.title}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {product.servicesRelated && product.servicesRelated.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
                <div className="space-y-4">
                  {product.servicesRelated.map(service => (
                    <Link key={service._id} to={`/services/${service.slug}`} className="block group bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-600 hover:shadow-md transition-all">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{service.title}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {product.industries && product.industries.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applicable Industries</h3>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map(ind => (
                    <span key={ind._id} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold border border-indigo-100">
                      {ind.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            {product.faqs && product.faqs.length > 0 && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Task 5.1: Custom Services Callout Block */}
            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Need something custom?</h4>
                <p className="text-slate-600 mt-1 text-sm">We can build off this product or create a bespoke solution from scratch tailored to your operations.</p>
              </div>
              <Link to="/contact" className="whitespace-nowrap px-6 py-3 bg-white text-slate-900 border border-slate-300 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm shadow-sm">
                Discuss Custom Build
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA BLOCK --- */}
      <section className="bg-indigo-600 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to leverage {product.name}?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Get in touch to discuss deployment, licensing, or request a technical demo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Task 4.3 Outputting dynamic CTA based on product status */}
            <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-indigo-600 bg-white hover:bg-gray-50 shadow-lg transition-colors">
              {getTailoredCTA()}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white border border-indigo-400 hover:bg-indigo-700 transition-colors">
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}