import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  Ruler, 
  Square, 
  Layout, 
  Box
} from 'lucide-react';
import { theme, layout } from './theme';
import Button from './components/atoms/Button';
import SectionTitle from './components/atoms/SectionTitle';
import ShowcaseSection from './components/organisms/ShowcaseSection';
import ComponentsSection from './components/organisms/ComponentsSection';

const SECTIONS = [
  { id: 'showcase', label: 'Showcase', icon: Layout },
  { id: 'components', label: 'Components', icon: Box },
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'radius', label: 'Border Radius', icon: Square },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('showcase');

  const navStyles = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    borderRadius: theme.global.radius.sm,
    transition: 'all 0.2s',
    backgroundColor: isActive ? theme.alias.color.action.primaryGhost : 'transparent',
    color: isActive ? theme.alias.color.action.primary : theme.alias.color.text.caption,
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
      backgroundColor: theme.alias.color.bg.main, 
      overflow: 'hidden',
      fontFamily: theme.global.font.family.sans,
      color: theme.alias.color.text.main
    }}>
      {/* HEADER */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '16px 24px', 
        backgroundColor: theme.alias.color.bg.card, 
        borderBottom: `1px solid ${theme.alias.color.border.regular}`, 
        flexShrink: 0, 
        zIndex: 50 
      }}>
        <div>
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: theme.global.font.weight.bold, 
            letterSpacing: '-0.02em', 
            display: 'flex', 
            alignItems: 'center' 
          }}>
            Aura Atomic System 
            <span style={{ 
              marginLeft: '8px', 
              padding: '2px 8px', 
              fontSize: '10px', 
              fontFamily: theme.global.font.family.mono, 
              backgroundColor: theme.alias.color.action.primaryGhost, 
              color: theme.alias.color.action.primary, 
              borderRadius: theme.global.radius.sm, 
              border: `1px solid ${theme.global.color.indigo['100']}`, 
              textTransform: 'uppercase' 
            }}>v3.0</span>
          </h1>
          <p style={{ 
            fontSize: '10px', 
            color: theme.alias.color.text.muted, 
            fontWeight: '500', 
            textTransform: 'uppercase', 
            letterSpacing: '0.08em', 
            marginTop: '2px' 
          }}>Atomic design powered by Figma tokens</p>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.alias.color.text.caption, fontWeight: '700' }}>Last Updated</p>
            <p style={{ fontSize: '12px', fontWeight: '600' }}>Oct 24, 2026</p>
          </div>
          <Button variant="primary" size="sm">Export Tokens</Button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar Navigation */}
        <aside style={{ 
          width: layout.sidebarWidth, 
          backgroundColor: theme.alias.color.bg.card, 
          borderRight: `1px solid ${theme.alias.color.border.regular}`, 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          flexShrink: 0
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <p style={{ fontSize: '9px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.alias.color.text.caption, padding: '0 12px', marginBottom: '8px' }}>Explorer</p>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={navStyles(activeSection === section.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <section.icon size={16} style={{ color: activeSection === section.id ? theme.alias.color.action.primary : theme.alias.color.text.caption }} />
                  <span style={{ fontSize: '12px', fontWeight: theme.global.font.weight.bold, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{section.label}</span>
                </div>
                {activeSection === section.id && (
                  <motion.div layoutId="active" style={{ width: '4px', height: '16px', backgroundColor: theme.alias.color.action.primary, borderRadius: '99px' }} />
                )}
              </button>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', padding: '12px', backgroundColor: theme.alias.color.bg.main, borderRadius: theme.global.radius.md, border: `1px solid ${theme.alias.color.border.subtle}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.alias.color.status.success }}></div>
              <p style={{ fontSize: '9px', color: theme.alias.color.text.caption, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Registry</p>
            </div>
            <p style={{ fontSize: '11px', fontWeight: '700', color: theme.alias.color.text.muted, fontFamily: theme.global.font.family.mono }}>FIGMA-ALIGNED</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, height: '100%', overflowY: 'auto', padding: '32px', backgroundColor: 'rgba(248, 250, 252, 0.5)' }}>
          <div style={{ maxWidth: layout.containerMaxWidth, margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {activeSection === 'showcase' && <ShowcaseSection />}
                {activeSection === 'components' && <ComponentsSection />}

                {activeSection === 'colors' && (
                  <section style={{ backgroundColor: theme.alias.color.bg.card, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: theme.global.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Color Palette" icon={Palette} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                      {Object.entries(theme.global.color).map(([name, shades]) => (
                        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <h3 style={{ fontSize: '10px', fontWeight: '700', color: theme.alias.color.text.caption, textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>{name}</h3>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                            {Object.entries(shades).map(([val, hex]: any) => (
                              <div key={val}>
                                <div style={{ height: '64px', backgroundColor: hex as string, borderRadius: theme.global.radius.sm, border: `1px solid ${theme.alias.color.border.regular}`, marginBottom: '8px' }}></div>
                                <p style={{ fontSize: '10px', fontWeight: '700', color: theme.alias.color.text.main }}>{val}</p>
                                <p style={{ fontSize: '9px', fontFamily: theme.global.font.family.mono, color: theme.alias.color.text.caption }}>{hex}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'typography' && (
                  <section style={{ backgroundColor: theme.alias.color.bg.card, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: theme.global.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Typography Scale" icon={Type} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                      {Object.entries(theme.alias.typography).map(([cat, types]: any) => (
                        <div key={cat}>
                          <h3 style={{ fontSize: '10px', fontWeight: '700', color: theme.alias.color.text.caption, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{cat} Scale</h3>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {Object.entries(types).map(([name, details]: any) => (
                              <div key={name} style={{ paddingBottom: '24px', borderBottom: `1px solid ${theme.alias.color.border.subtle}` }}>
                                <p style={{ fontSize: '9px', fontFamily: theme.global.font.family.mono, color: theme.alias.color.text.caption, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                                  {name} / {details.size} / {details.lh}
                                </p>
                                <p style={{ 
                                  fontSize: details.size, 
                                  lineHeight: details.lh, 
                                  fontWeight: details.weight, 
                                  color: theme.alias.color.text.main 
                                }}>The quick brown fox jumps over the lazy dog.</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'spacing' && (
                  <section style={{ backgroundColor: theme.alias.color.bg.card, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: theme.global.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Spacing (Figma Units)" icon={Ruler} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {Object.entries(theme.global.spacing).map(([id, val]: any) => (
                        <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                           <div style={{ width: '40px', fontSize: '10px', fontFamily: theme.global.font.family.mono, color: theme.alias.color.text.caption, fontWeight: '700' }}>{id}</div>
                           <div style={{ flex: 1, backgroundColor: theme.alias.color.bg.main, borderRadius: theme.global.radius.sm, border: `1px solid ${theme.alias.color.border.subtle}`, height: '24px', position: 'relative', overflow: 'hidden' }}>
                              <div style={{ 
                                backgroundColor: theme.alias.color.action.primary, 
                                height: '100%', 
                                borderRight: `1px solid ${theme.alias.color.action.primaryHover}`, 
                                width: val 
                              }}></div>
                           </div>
                           <div style={{ width: '96px', textAlign: 'right', fontSize: '10px', fontFamily: theme.global.font.family.mono, color: theme.alias.color.text.caption }}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'radius' && (
                  <section style={{ backgroundColor: theme.alias.color.bg.card, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: theme.global.radius.xl, padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                    <SectionTitle title="Border Radius" icon={Square} />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '24px' }}>
                      {Object.entries(theme.global.radius).map(([name, val]: any) => (
                        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: theme.alias.color.bg.dark, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: val, boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.2)' }}></div>
                          <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '10px', fontWeight: '700', color: theme.alias.color.text.main, textTransform: 'uppercase' }}>{name}</p>
                            <p style={{ fontSize: '9px', fontFamily: theme.global.font.family.mono, color: theme.alias.color.text.caption }}>{val}</p>
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
        backgroundColor: theme.alias.color.bg.card, 
        borderTop: `1px solid ${theme.alias.color.border.regular}`, 
        padding: '12px 24px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        fontSize: '10px', 
        color: theme.alias.color.text.caption, 
        fontFamily: theme.global.font.family.mono, 
        zIndex: 50 
      }}>
        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', opacity: 0.5 }}>F_SANS:</span> INTER
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', opacity: 0.5 }}>F_MONO:</span> J.MONO
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', opacity: 0.5 }}>MODE:</span> ATOMIC_DS
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.alias.color.status.success }}></div>
            <span style={{ textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.1em' }}>DS_ENGINE_ALIVE</span>
          </div>
          <div style={{ height: '16px', width: '1px', backgroundColor: theme.alias.color.border.regular }}></div>
          <span style={{ fontWeight: '700' }}>v3.0.0-STABLE</span>
        </div>
      </footer>
    </div>
  );
}
