import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { getArticles } from '../content';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

const CATEGORIES = ['All', 'App Development', 'WhatsApp Automation', 'Local SEO', 'SME Digital Transformation'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const allArticles = getArticles();

  const filteredArticles = activeCategory === 'All' 
    ? allArticles 
    : allArticles.filter(a => a.category === activeCategory);

  return (
    <>
      <SEO 
        title="Insights & Engineering Blog | Ashrey Systems" 
        description="Deep dives into digital transformation, WhatsApp automation, and custom software engineering for scaling SMEs." 
      />
      
      <div className="pt-32 pb-12 bg-muted/20">
        <div className="container px-6">
          <Breadcrumbs items={[{ label: 'Insights', href: '/insights' }]} className="mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Insights <span className="text-brand-primary">&</span> Engineering.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We share our technical playbooks and strategic frameworks for local businesses ready to compete globally.
          </p>
        </div>
      </div>

      <Section className="bg-background">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-16">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-muted/10 border border-border rounded-[2rem] overflow-hidden hover:border-brand-primary transition-all hover:shadow-2xl hover:shadow-brand-primary/5"
            >
              <Link to={`/insights/${article.slug}`} className="block aspect-[16/10] overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
                  <span>{article.category}</span>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <User className="w-3 h-3 opacity-50" />
                    {article.author}
                  </div>
                  <Link to={`/insights/${article.slug}`} className="text-brand-primary text-sm font-bold flex items-center gap-2 group/link">
                    Read Post <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
