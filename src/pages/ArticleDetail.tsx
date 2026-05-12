import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticleBySlug, getArticles } from '../content';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Share2, Tag } from 'lucide-react';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  const allArticles = getArticles();
  const navigate = useNavigate();

  if (!article) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center pt-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Insight Not Found.</h1>
          <p className="text-muted-foreground mb-12">The insight you are looking for has been archived or moved.</p>
          <Link to="/insights" className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold">
            All Insights
          </Link>
        </div>
      </Section>
    );
  }

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  return (
    <>
      <SEO 
        title={`${article.title} | Ashrey Systems`} 
        description={article.summary}
        type="article"
      />
      
      {/* Article Hero */}
      <div className="pt-40 pb-20 bg-muted/20 border-b border-border">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: 'Insights', href: '/insights' },
                { label: article.category, href: '/insights' }
              ]} 
              className="mb-10" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Calendar className="w-4 h-4" /> {article.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Clock className="w-4 h-4" /> {article.readTime}
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
                {article.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt={article.author} />
                </div>
                <div>
                  <div className="font-bold text-sm">{article.author}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Ashrey Engineering</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container px-6 -mt-12 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-20">
            <div className="markdown-body prose prose-lg prose-brand">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>

              <div className="mt-16 pt-10 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-10">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-muted/50 rounded-xl text-sm font-bold flex items-center gap-2">
                       <Tag className="w-3 h-3 opacity-50" /> {tag}
                    </span>
                  ))}
                </div>
                
                <div className="p-10 bg-brand-primary rounded-[2.5rem] text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to accelerate your roadmap?</h3>
                  <p className="mb-8 opacity-80 leading-relaxed">
                    We've implemented {article.category.toLowerCase()} for dozens of partners. Let's see how it applies to your specific constraints.
                  </p>
                  <button 
                    onClick={() => navigate('/')}
                    className="px-8 py-4 bg-white text-brand-primary rounded-2xl font-bold hover:shadow-xl transition-all"
                  >
                    Request Free Audit
                  </button>
                </div>
              </div>
            </div>

            <aside className="space-y-12">
              <div className="p-8 bg-muted/20 border border-border rounded-3xl sticky top-40">
                <h4 className="font-bold mb-6 flex items-center justify-between">
                  Share Insight
                  <Share2 className="w-4 h-4 opacity-40" />
                </h4>
                <div className="flex flex-col gap-3">
                  <button className="w-full py-3 bg-white border border-border rounded-xl text-sm font-bold hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                    copy URL
                  </button>
                  <button className="w-full py-3 bg-white border border-border rounded-xl text-sm font-bold hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                    Share on LinkedIn
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      {relatedArticles.length > 0 && (
        <Section className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 flex items-center justify-between">
              Continue Learning
              <Link to="/insights" className="text-sm text-brand-primary hover:underline">View All Posts</Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map(a => (
                <Link 
                  key={a.id}
                  to={`/insights/${a.slug}`}
                  className="group block p-8 bg-background border border-border rounded-3xl hover:border-brand-primary transition-all"
                >
                  <div className="text-xs font-bold text-brand-primary mb-3">{a.category}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{a.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
