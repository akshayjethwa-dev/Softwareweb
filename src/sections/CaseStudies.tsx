import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { getCaseStudies } from '../content';
import { ArrowUpRight, Plus, Minus, CheckCircle2, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import Section from '../components/Section';
import { trackEvent } from '../lib/analytics';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await getCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const handleExpand = (project: CaseStudy) => {
    const nextId = expandedId === project.id ? null : project.id;
    setExpandedId(nextId);
    if (nextId) {
      trackEvent('case_study_open', { 
        case_study_id: project.id,
        client: project.clientName 
      });
    }
  };

  if (loading) {
    return (
      <Section id="case-studies" className="bg-brand-primary text-white flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-brand-accent font-bold text-xl tracking-widest uppercase">Loading Work...</div>
      </Section>
    );
  }

  return (
    <Section id="case-studies" className="bg-brand-primary text-white overflow-hidden">
      <div className="mb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Engineering <span className="text-brand-accent">impact</span> at scale.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Real-world examples of how we've solved complex business bottlenecks through disciplined engineering and rapid execution.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="space-y-8">
        {caseStudies.map((project, idx) => {
          const isExpanded = expandedId === project.id;
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500",
                isExpanded ? "ring-2 ring-brand-accent/50 bg-white/8" : "hover:bg-white/[0.07]"
              )}
            >
              <div 
                className="p-8 md:p-12 cursor-pointer flex flex-col md:flex-row gap-10 items-start md:items-center"
                onClick={() => handleExpand(project)}
              >
                {/* Thumbnail */}
                <div className="relative w-full md:w-72 aspect-4/3 rounded-3xl overflow-hidden shrink-0">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-accent/20">
                        {project.category}
                      </span>
                    </div>
                    <Link 
                      to={`/case-studies/${project.id}`}
                      className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Full Details <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 italic border-l-2 border-brand-accent/30 pl-4 max-w-2xl">
                    "{project.description}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-accent">
                      {isExpanded ? (
                        <span className="flex items-center gap-2 italic">Collapse details <Minus className="w-4 h-4" /></span>
                      ) : ( 
                        <span className="flex items-center gap-2 italic">View full breakdown <Plus className="w-4 h-4" /></span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 md:p-12 pt-0 md:pt-0 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12">
                      {/* Problem */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-red-400">
                          <AlertCircle className="w-5 h-5" />
                          <h4 className="text-xs font-black uppercase tracking-widest">The Problem</h4>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-brand-accent">
                          <Lightbulb className="w-5 h-5" />
                          <h4 className="text-xs font-black uppercase tracking-widest">The Solution</h4>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-green-400">
                          <CheckCircle2 className="w-5 h-5" />
                          <h4 className="text-xs font-black uppercase tracking-widest">Business Impact</h4>
                        </div>
                        <ul className="space-y-3">
                          {project.impact?.map((item: string, idx: number) => (
                            <li key={idx} className="flex gap-2 text-sm text-white/70 italic">
                              <span className="text-green-400">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}