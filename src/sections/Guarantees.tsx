import { motion } from 'motion/react';
import Section from '../components/Section';
import { ShieldAlert, Code2, Lock, History } from 'lucide-react';

const GUARANTEES = [
  {
    icon: Code2,
    title: 'Code Ownership',
    description: 'Every line of code we write is your intellectual property. No vendor lock-in. Full repository transfer upon completion.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Lock,
    title: 'NDA Shielded',
    description: 'Confidentiality is our default. We sign NDAs before technical discovery to protect your proprietary logic and data.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    icon: ShieldAlert,
    title: 'Maintenance Promise',
    description: 'Our engagement doesn\'t end at deployment. We provide 3 months of priority security patching for every build.',
    color: 'text-green-500',
    bg: 'bg-green-500/10'
  },
  {
    icon: History,
    title: 'Uptime SLA',
    description: 'We architect for 99.9% uptime using cloud-native infrastructure and automated failsafe protocols.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  }
];

export default function Guarantees() {
  return (
    <Section className="bg-background border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {GUARANTEES.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
