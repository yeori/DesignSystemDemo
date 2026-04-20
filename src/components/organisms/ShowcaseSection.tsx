import { motion } from 'motion/react';
import { Shield, Star, Layout, Zap, ArrowRight } from 'lucide-react';
import { theme } from '../../theme';
import Button from '../atoms/Button';

const ShowcaseSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.global.spacing.md }}>
      {/* Hero Showcase */}
      <section style={{ 
        backgroundColor: theme.alias.color.bg.card, 
        border: `1px solid ${theme.alias.color.border.regular}`, 
        borderRadius: theme.global.radius.xl, 
        padding: theme.global.spacing.xl, 
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)', 
        overflow: 'hidden', 
        position: 'relative' 
      }}>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              backgroundColor: theme.alias.color.action.primaryGhost, 
              color: theme.alias.color.action.primary, 
              padding: '4px 12px', 
              borderRadius: theme.global.radius.sm, 
              border: `1px solid ${theme.global.color.indigo['100']}`, 
              fontSize: '11px', 
              fontWeight: theme.global.font.weight.semibold, 
              fontFamily: theme.global.font.family.mono, 
              marginBottom: theme.global.spacing.md 
            }}
          >
            <Zap size={14} />
            Built with Aura Design v3.0.0 (Atomic Mode)
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: theme.alias.typography.heading.xl.size, 
              fontWeight: theme.alias.typography.heading.xl.weight, 
              color: theme.alias.color.text.main, 
              letterSpacing: '-0.02em', 
              lineHeight: theme.alias.typography.heading.xl.lh, 
              marginBottom: theme.global.spacing.md 
            }}
          >
             Building interfaces <span style={{ color: theme.alias.color.action.primary }}>for scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: theme.alias.typography.body.lg.size, 
              color: theme.alias.color.text.muted, 
              marginBottom: theme.global.spacing.xl, 
              lineHeight: theme.alias.typography.body.lg.lh 
            }}
          >
            A robust atomic system driven by Figma tokens. Standardized components, guided by semantic standards, 
            built to power any application with pixel precision.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: theme.global.spacing.sm }}
          >
            <Button variant="primary" rightIcon={<ArrowRight size={16} />}>Get Started</Button>
            <Button variant="outline">Documentation</Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: theme.global.spacing.md }}>
        {[
          { icon: Shield, title: "Atomic Design", desc: "Built from the ground up using Atoms, Molecules, and Organisms.", color: theme.alias.color.action.primary },
          { icon: Star, title: "Figma Sync", desc: "Design tokens are synced directly from documented logic.", color: theme.alias.color.action.secondary },
          { icon: Layout, title: "Pixel Perfect", desc: "A fixed spacing scale ensures alignment across all viewports.", color: theme.alias.color.status.info },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            style={{ 
              padding: theme.global.spacing.lg, 
              backgroundColor: theme.alias.color.bg.card, 
              borderRadius: theme.global.radius.xl, 
              border: `1px solid ${theme.alias.color.border.regular}`, 
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)' 
            }}
          >
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: feature.color, 
              borderRadius: theme.global.radius.lg, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff', 
              marginBottom: theme.global.spacing.md 
            }}>
              <feature.icon size={20} />
            </div>
            <h3 style={{ fontSize: theme.global.font.size.sm, fontWeight: theme.global.font.weight.bold, color: theme.alias.color.text.main, marginBottom: theme.global.spacing.sm }}>{feature.title}</h3>
            <p style={{ fontSize: theme.global.font.size.xs, color: theme.alias.color.text.muted, lineHeight: theme.global.font.lineHeight.normal }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseSection;
