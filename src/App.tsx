import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  Ruler, 
  Square, 
  Layout, 
  Info,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  Shield,
  Star
} from 'lucide-react';
import { theme, layout } from './theme';

const SECTIONS = [
  { id: 'showcase', label: 'Showcase', icon: Layout },
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'radius', label: 'Border Radius', icon: Square },
];

const SectionTitle = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: theme.spacing['2'], 
    marginBottom: theme.spacing['4'], 
    borderBottom: `1px solid ${theme.colors.neutrals['100']}`, 
    paddingBottom: theme.spacing['2'] 
  }}>
    <div style={{ 
      padding: '6px', 
      backgroundColor: theme.colors.primary['50'], 
      borderRadius: theme.radius.base, 
      border: `1px solid ${theme.colors.primary['100']}`, 
      color: theme.colors.primary['600'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon size={18} />
    </div>
    <h2 style={{ 
      fontSize: '12px', 
      fontWeight: '700', 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em', 
      color: theme.colors.neutrals['400'] 
    }}>{title}</h2>
  </div>
);

const ShowcaseSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing['4'] }}>
      {/* Hero Showcase */}
      <section style={{ 
        backgroundColor: '#fff', 
        border: `1px solid ${theme.colors.neutrals['200']}`, 
        borderRadius: theme.radius.xl, 
        padding: '32px', 
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
              backgroundColor: theme.colors.primary['50'], 
              color: theme.colors.primary['600'], 
              padding: '4px 12px', 
              borderRadius: theme.radius.base, 
              border: `1px solid ${theme.colors.primary['100']}`, 
              fontSize: '11px', 
              fontWeight: '600', 
              fontFamily: theme.typography.fonts.mono, 
              marginBottom: theme.spacing['4'] 
            }}
          >
            <Zap size={14} />
            Built with Aura Design v2.4.0
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: '36px', 
              fontWeight: '700', 
              color: theme.colors.neutrals['900'], 
              letterSpacing: '-0.02em', 
              lineHeight: '1.2', 
              marginBottom: theme.spacing['4'] 
            }}
          >
             Building interfaces <span style={{ color: theme.colors.primary['600'] }}>for scale.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '16px', 
              color: theme.colors.neutrals['500'], 
              marginBottom: '32px', 
              lineHeight: '1.6' 
            }}
          >
            The design system is a collection of reusable components, guided by clear standards, 
            that can be assembled together to build any number of applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: theme.spacing['2'] }}
          >
            <button style={{ 
              backgroundColor: theme.colors.neutrals['900'], 
              color: '#fff', 
              padding: '10px 20px', 
              borderRadius: theme.radius.md, 
              fontSize: '12px', 
              fontWeight: '700', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              Get Started <ArrowRight size={16} />
            </button>
            <button style={{ 
              backgroundColor: '#fff', 
              color: theme.colors.neutrals['700'], 
              border: `1px solid ${theme.colors.neutrals['200']}`, 
              padding: '10px 20px', 
              borderRadius: theme.radius.md, 
              fontSize: '12px', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}>
              Documentation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: theme.spacing['4'] }}>
        {[
          { icon: Shield, title: "Secure Defaults", desc: "Enterprise-grade tokens built into components by default.", color: theme.colors.primary['600'] },
          { icon: Star, title: "Standardized UI", desc: "Visual tokens for cross-platform unified experiences.", color: theme.colors.secondary['500'] },
          { icon: Layout, title: "Grid Alignment", desc: "A robust spacing scale ensures perfect pixel-perfect layout.", color: theme.colors.semantic.info },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            style={{ 
              padding: '24px', 
              backgroundColor: '#fff', 
              borderRadius: theme.radius.xl, 
              border: `1px solid ${theme.colors.neutrals['200']}`, 
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)' 
            }}
          >
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: feature.color, 
              borderRadius: theme.radius.lg, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#fff', 
              marginBottom: '16px' 
            }}>
              <feature.icon size={20} />
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: theme.colors.neutrals['900'], marginBottom: '8px' }}>{feature.title}</h3>
            <p style={{ fontSize: '12px', color: theme.colors.neutrals['500'], lineHeight: '1.6' }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Semantic Card Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: theme.spacing['4'] }}>
          <div style={{ 
            backgroundColor: '#fff', 
            border: `1px solid ${theme.colors.neutrals['200']}`, 
            borderRadius: theme.radius.xl, 
            overflow: 'hidden', 
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)' 
          }}>
            <div style={{ 
              backgroundColor: theme.colors.neutrals['50'], 
              padding: '12px 20px', 
              borderBottom: `1px solid ${theme.colors.neutrals['200']}`, 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
               <h4 style={{ 
                 fontSize: '11px', 
                 fontWeight: '800', 
                 textTransform: 'uppercase', 
                 tracking: '0.1em', 
                 color: theme.colors.neutrals['400'], 
                 display: 'flex', 
                 alignItems: 'center', 
                 gap: '8px' 
               }}>
                 <AlertCircle size={14} style={{ color: theme.colors.primary['600'] }} /> Notifications
               </h4>
               <span style={{ fontSize: '10px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'] }}>SYNCED</span>
            </div>
            <div style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: theme.colors.secondary['100'], 
                color: theme.colors.secondary['600'], 
                borderRadius: theme.radius.base, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                border: `1px solid ${theme.colors.secondary['200']}` 
              }}>
                <CheckCircle2 size={18} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', color: theme.colors.neutrals['900'] }}>Tokens Deployed</p>
                <p style={{ fontSize: '12px', color: theme.colors.neutrals['500'] }}>Design system v2.4.0 has been successfully synced with production.</p>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: theme.colors.neutrals['900'], 
            color: '#fff', 
            borderRadius: theme.radius.xl, 
            padding: '32px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            position: 'relative', 
            overflow: 'hidden' 
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '24px', opacity: 0.05 }}>
              <Zap size={80} />
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-0.01em' }}>Dark Mode System</h4>
            <p style={{ color: theme.colors.neutrals['400'], fontSize: '12px', lineHeight: '1.6', marginBottom: '24px' }}>
              Semantic definitions for high-contrast dark environments.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ 
                padding: '4px 12px', 
                backgroundColor: theme.colors.neutrals['800'], 
                borderRadius: theme.radius.base, 
                fontSize: '10px', 
                fontFamily: theme.typography.fonts.mono, 
                border: `1px solid ${theme.colors.neutrals['700']}` 
              }}>#1E293B</div>
              <div style={{ 
                padding: '4px 12px', 
                backgroundColor: theme.colors.primary['600'], 
                color: theme.colors.primary['100'], 
                borderRadius: theme.radius.base, 
                fontSize: '10px', 
                fontWeight: '700', 
                border: `1px solid rgba(255,255,255,0.1)`, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em' 
              }}>ACTION</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('showcase');

  const navStyles = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    borderRadius: theme.radius.base,
    transition: 'all 0.2s',
    backgroundColor: isActive ? theme.colors.primary['50'] : 'transparent',
    color: isActive ? theme.colors.primary['700'] : theme.colors.neutrals['500'],
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left' as const
  });

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100%', 
      backgroundColor: theme.colors.neutrals['50'], 
      overflow: 'hidden',
      fontFamily: theme.typography.fonts.sans,
      color: theme.colors.neutrals['900']
    }}>
      {/* HEADER */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '16px 24px', 
        backgroundColor: '#fff', 
        borderBottom: `1px solid ${theme.colors.neutrals['200']}`, 
        flexShrink: 0, 
        zIndex: 50 
      }}>
        <div>
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            letterSpacing: '-0.02em', 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            Aura Design System 
            <span style={{ 
              marginLeft: '8px', 
              padding: '2px 8px', 
              fontSize: '10px', 
              fontFamily: theme.typography.fonts.mono, 
              backgroundColor: theme.colors.primary['50'], 
              color: theme.colors.primary['600'], 
              borderRadius: theme.radius.base, 
              border: `1px solid ${theme.colors.primary['100']}`, 
              textTransform: 'uppercase' 
            }}>v2.4.0</span>
          </h1>
          <p style={{ 
            fontSize: '10px', 
            color: theme.colors.neutrals['500'], 
            fontWeight: '500', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            marginTop: '2px' 
          }}>Standardized UI components and visual tokens</p>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.colors.neutrals['400'], fontWeight: '700' }}>Last Updated</p>
            <p style={{ fontSize: '12px', fontWeight: '600' }}>Oct 24, 2026</p>
          </div>
          <button style={{ 
            padding: '6px 14px', 
            backgroundColor: theme.colors.neutrals['900'], 
            color: '#fff', 
            fontSize: '11px', 
            fontWeight: '700', 
            borderRadius: theme.radius.sm, 
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em' 
          }}>Export Tokens</button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar Navigation */}
        <aside style={{ 
          width: layout.sidebarWidth, 
          backgroundColor: '#fff', 
          borderRight: `1px solid ${theme.colors.neutrals['200']}`, 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          flexShrink: 0
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ fontSize: '9px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.colors.neutrals['400'], padding: '0 12px', marginBottom: '8px' }}>Navigation</p>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={navStyles(activeSection === section.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <section.icon size={16} style={{ color: activeSection === section.id ? theme.colors.primary['600'] : theme.colors.neutrals['400'] }} />
                  <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{section.label}</span>
                </div>
                {activeSection === section.id && (
                  <motion.div layoutId="active" style={{ width: '4px', height: '16px', backgroundColor: theme.colors.primary['600'], borderRadius: '99px' }} />
                )}
              </button>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', padding: '12px', backgroundColor: theme.colors.neutrals['50'], borderRadius: theme.radius.md, border: `1px solid ${theme.colors.neutrals['100']}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.colors.secondary['500'] }}></div>
              <p style={{ fontSize: '9px', color: theme.colors.neutrals['400'], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Environment</p>
            </div>
            <p style={{ fontSize: '11px', fontWeight: '700', color: theme.colors.neutrals['700'], fontFamily: theme.typography.fonts.mono }}>PRODUCTION-SYNCED</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, height: '100%', overflowY: 'auto', padding: '32px', backgroundColor: 'rgba(248, 250, 252, 0.5)' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {activeSection === 'showcase' && <ShowcaseSection />}

                {activeSection === 'colors' && (
                  <section style={{ backgroundColor: '#fff', border: `1px solid ${theme.colors.neutrals['200']}`, borderRadius: theme.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Color Palette" icon={Palette} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                      {Object.entries(theme.colors).map(([category, shades]) => (
                        <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <h3 style={{ fontSize: '10px', fontWeight: '700', color: theme.colors.neutrals['400'], textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>{category}</h3>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                            {category === 'semantic' ? (
                              Object.entries(shades).map(([name, hex]: any) => (
                                <div key={name}>
                                  <div style={{ height: '64px', backgroundColor: hex as string, borderRadius: theme.radius.base, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', marginBottom: '8px' }}></div>
                                  <p style={{ fontSize: '10px', fontWeight: '700', color: theme.colors.neutrals['900'], textTransform: 'uppercase' }}>{name}</p>
                                  <p style={{ fontSize: '9px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'] }}>{hex}</p>
                                </div>
                              ))
                            ) : (
                              Object.entries(shades).map(([val, hex]: any) => (
                                <div key={val}>
                                  <div style={{ height: '64px', backgroundColor: hex as string, borderRadius: theme.radius.base, border: `1px solid ${theme.colors.neutrals['200']}33`, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', marginBottom: '8px' }}></div>
                                  <p style={{ fontSize: '10px', fontWeight: '700', color: theme.colors.neutrals['900'] }}>{val}</p>
                                  <p style={{ fontSize: '9px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'] }}>{hex}</p>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'typography' && (
                  <section style={{ backgroundColor: '#fff', border: `1px solid ${theme.colors.neutrals['200']}`, borderRadius: theme.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Typography Scale" icon={Type} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                      {Object.entries(theme.typography.sizes).map(([name, details]: any) => (
                        <div key={name} style={{ paddingBottom: '24px', borderBottom: `1px solid ${theme.colors.neutrals['100']}` }}>
                           <p style={{ fontSize: '9px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'], fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                             {name} / {details.size} / {details.lh}
                           </p>
                           <p style={{ 
                             fontSize: details.size, 
                             lineHeight: details.lh, 
                             fontWeight: details.weight, 
                             color: name === 'BODY_LG' ? theme.colors.neutrals['600'] : theme.colors.neutrals['900'] 
                           }}>The quick brown fox jumps over the lazy dog.</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'spacing' && (
                  <section style={{ backgroundColor: '#fff', border: `1px solid ${theme.colors.neutrals['200']}`, borderRadius: theme.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Spacing Scale" icon={Ruler} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {Object.entries(theme.spacing).map(([id, val]: any) => (
                        <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                           <div style={{ width: '40px', fontSize: '10px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'], fontWeight: '700' }}>{id}</div>
                           <div style={{ flex: 1, backgroundColor: theme.colors.neutrals['50'], borderRadius: theme.radius.base, border: `1px solid ${theme.colors.neutrals['100']}`, height: '24px', position: 'relative', overflow: 'hidden' }}>
                              <div style={{ 
                                backgroundColor: theme.colors.primary['500'], 
                                height: '100%', 
                                borderRight: `1px solid ${theme.colors.primary['600']}`, 
                                boxShadow: '0 1px 2px rgba(0,0,0,0.1)', 
                                width: val 
                              }}></div>
                           </div>
                           <div style={{ width: '96px', textAlign: 'right', fontSize: '10px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'] }}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'radius' && (
                  <section style={{ backgroundColor: '#fff', border: `1px solid ${theme.colors.neutrals['200']}`, borderRadius: theme.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Border Radius" icon={Square} />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '24px' }}>
                      {Object.entries(theme.radius).map(([name, val]: any) => (
                        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: theme.colors.neutrals['900'], border: `1px solid ${theme.colors.neutrals['700']}`, borderRadius: val, boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.2)' }}></div>
                          <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '10px', fontWeight: '700', color: theme.colors.neutrals['900'], textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{name}</p>
                            <p style={{ fontSize: '9px', fontFamily: theme.typography.fonts.mono, color: theme.colors.neutrals['400'] }}>{val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer style={{ 
        flexShrink: 0, 
        backgroundColor: '#fff', 
        borderTop: `1px solid ${theme.colors.neutrals['200']}`, 
        padding: '12px 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        fontSize: '10px', 
        color: theme.colors.neutrals['400'], 
        fontFamily: theme.typography.fonts.mono, 
        zIndex: 50 
      }}>
        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: theme.colors.neutrals['200'] }}>FONT:</span> INTER SANS
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: theme.colors.neutrals['200'] }}>MONO:</span> JETBRAINS MONO
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: theme.colors.neutrals['200'] }}>TOKEN:</span> V2.4.0-STABLE
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.colors.secondary['500'] }}></span>
            <span style={{ textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.1em' }}>LIVE DATA FEED</span>
          </div>
          <div style={{ height: '16px', width: '1px', backgroundColor: theme.colors.neutrals['200'] }}></div>
          <span style={{ fontWeight: '700' }}>SYSTEM OK</span>
        </div>
      </footer>
    </div>
  );
}
