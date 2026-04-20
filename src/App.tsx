/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Type, 
  Ruler, 
  Square, 
  Layout, 
  ChevronRight, 
  Info,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  Shield,
  Star
} from 'lucide-react';

const SECTIONS = [
  { id: 'showcase', label: 'Showcase', icon: Layout },
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'radius', label: 'Border Radius', icon: Square },
];

const COLORS = {
  primary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(v => ({ name: `bg-blue-${v}`, class: `bg-blue-${v}`, val: v })),
  secondary: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(v => ({ name: `bg-purple-${v}`, class: `bg-purple-${v}`, val: v })),
  neutrals: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(v => ({ name: `bg-slate-${v}`, class: `bg-slate-${v}`, val: v })),
  semantic: [
    { name: 'Success', class: 'bg-emerald-500', icon: CheckCircle2, label: 'Success' },
    { name: 'Error', class: 'bg-rose-500', icon: AlertCircle, label: 'Error' },
    { name: 'Warning', class: 'bg-amber-500', icon: AlertTriangle, label: 'Warning' },
    { name: 'Info', class: 'bg-sky-500', icon: Info, label: 'Info' },
  ]
};

const TYPOGRAPHY = {
  sizes: [
    { name: 'text-xs', size: '0.75rem', lh: '1rem' },
    { name: 'text-sm', size: '0.875rem', lh: '1.25rem' },
    { name: 'text-base', size: '1rem', lh: '1.5rem' },
    { name: 'text-lg', size: '1.125rem', lh: '1.75rem' },
    { name: 'text-xl', size: '1.25rem', lh: '1.75rem' },
    { name: 'text-2xl', size: '1.5rem', lh: '2rem' },
    { name: 'text-3xl', size: '1.875rem', lh: '2.25rem' },
    { name: 'text-4xl', size: '2.25rem', lh: '2.5rem' },
  ],
  weights: [
    { name: 'font-light', val: '300' },
    { name: 'font-normal', val: '400' },
    { name: 'font-medium', val: '500' },
    { name: 'font-semibold', val: '600' },
    { name: 'font-bold', val: '700' },
    { name: 'font-black', val: '900' },
  ]
};

const SPACING = [
  { id: '1', val: '0.25rem', px: '4' },
  { id: '2', val: '0.5rem', px: '8' },
  { id: '4', val: '1rem', px: '16' },
  { id: '8', val: '2rem', px: '32' },
  { id: '12', val: '3rem', px: '48' },
  { id: '16', val: '4rem', px: '64' },
  { id: '24', val: '6rem', px: '96' },
  { id: '32', val: '8rem', px: '128' },
];

const RADIUS = [
  { name: 'rounded-none', val: '0px' },
  { name: 'rounded-sm', val: '0.125rem' },
  { name: 'rounded', val: '0.25rem' },
  { name: 'rounded-md', val: '0.375rem' },
  { name: 'rounded-lg', val: '0.5rem' },
  { name: 'rounded-xl', val: '0.75rem' },
  { name: 'rounded-2xl', val: '1rem' },
  { name: 'rounded-3xl', val: '1.5rem' },
  { name: 'rounded-full', val: '9999px' },
];

const SectionTitle = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">{title}</h2>
  </div>
);

const ShowcaseSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-16">
      {/* Hero Showcase */}
      <section className="bg-white rounded-[32px] p-12 lg:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
        
        <div className="relative z-10 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Zap size={16} />
            Built with DS System v1.2
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
          >
             Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">future</span> of web apps.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 mb-10 leading-relaxed"
          >
            This showcase demonstrates how our color palette, typography scale, 
            and spacing system work together to create professional interfaces.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200 flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95">
              Documentation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Secure Defaults", desc: "Enterprise-grade security tokens built into every component by default.", color: "bg-blue-500" },
          { icon: Star, title: "Premium Feel", desc: "Using our specific border radius and shadow tokens for a polished look.", color: "bg-purple-500" },
          { icon: Layout, title: "Modular Grid", desc: "A robust spacing scale ensures perfect alignment across all viewports.", color: "bg-teal-500" },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform`}>
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Semantic Card Showcase */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold px-2">Component Examples</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
               <h4 className="font-bold flex items-center gap-2 text-slate-700">
                 <AlertCircle size={18} className="text-blue-500" /> System Notification
               </h4>
            </div>
            <div className="p-8 flex items-start gap-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-slate-900">Application deployed successfully!</p>
                <p className="text-slate-500">Your design system review site is now live at the specified URL. All tokens are synced.</p>
                <div className="pt-2">
                   <button className="text-blue-600 font-bold hover:underline">View Live Site</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} />
            </div>
            <h4 className="text-3xl font-black mb-6">Dark Mode Tokens</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our design system explicitly defines semantic colors for high-contrast dark environments.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-lg text-sm font-mono border border-slate-700">Slate-800</div>
              <div className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-bold border border-blue-400/30">Action-Primary</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-[32px] p-12 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to start building?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Join 2,000+ developers using our design system to create incredible web experiences.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Get Documentation
          </button>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('showcase');

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20 md:pb-0">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 hidden md:flex z-50">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
          <h1 className="text-xl font-bold tracking-tight">DS Review</h1>
        </div>

        <nav className="flex flex-col gap-1">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 group ${
                activeSection === section.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <section.icon size={18} />
                <span className="text-sm font-medium">{section.label}</span>
              </div>
              {activeSection === section.id && (
                <ChevronRight size={14} className="text-blue-400" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-slate-50 rounded-xl">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Version</p>
          <p className="text-sm font-semibold text-slate-700 font-mono">v1.2.4-alpha</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:pl-64 p-8 lg:p-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            variants={containerVariants}
          >
            {activeSection === 'showcase' && <ShowcaseSection />}

            {activeSection === 'colors' && (
              <section id="colors">
                <SectionTitle title="Color Palette" icon={Palette} />
                
                <div className="space-y-12">
                  {/* Categorized Color Sections */}
                  {Object.entries(COLORS).map(([category, shades]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-500 capitalize px-2">{category}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {category === 'semantic' ? (
                          shades.map((color: any) => (
                            <motion.div
                              variants={itemVariants}
                              key={color.name}
                              className="group cursor-pointer"
                            >
                              <div className={`h-24 ${color.class} rounded-xl shadow-sm mb-3 flex items-center justify-center text-white/90`}>
                                <color.icon size={32} strokeWidth={1.5} />
                              </div>
                              <p className="text-sm font-semibold text-slate-900">{color.label}</p>
                              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{color.class}</p>
                            </motion.div>
                          ))
                        ) : (
                          shades.map((color: any) => (
                            <motion.div
                              variants={itemVariants}
                              key={color.name}
                              className="group cursor-pointer"
                            >
                              <div className={`h-24 ${color.class} rounded-xl shadow-sm mb-3 border border-slate-200/50 group-hover:scale-[1.02] transition-transform`}></div>
                              <p className="text-sm font-semibold text-slate-900">{color.val}</p>
                              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{color.name}</p>
                            </motion.div>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === 'typography' && (
              <section id="typography">
                <SectionTitle title="Typography" icon={Type} />
                
                <div className="space-y-16">
                  {/* Size Scale */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-slate-500 px-2 underline underline-offset-8 decoration-slate-200">Size Scale</h3>
                    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-xs text-slate-400 uppercase tracking-widest">
                            <th className="px-6 py-4 font-semibold">Class</th>
                            <th className="px-6 py-4 font-semibold">Preview</th>
                            <th className="px-6 py-4 font-semibold">Output</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {TYPOGRAPHY.sizes.map((item) => (
                            <tr key={item.name} className="group hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4">
                                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-mono">{item.name}</span>
                              </td>
                              <td className="px-6 py-4">
                                <p className={`${item.name} text-slate-900 truncate max-w-sm`}>The quick brown fox jumps over the lazy dog</p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-xs font-mono text-slate-400">{item.size} / {item.lh}</p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Font Weights */}
                  <div className="space-y-6">
                     <h3 className="text-lg font-medium text-slate-500 px-2 underline underline-offset-8 decoration-slate-200">Weights</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TYPOGRAPHY.weights.map((weight) => (
                          <motion.div 
                            variants={itemVariants}
                            key={weight.name}
                            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
                          >
                            <p className={`text-4xl ${weight.name} text-slate-900 mb-4`}>Aa</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-semibold text-slate-900">{weight.name}</span>
                              <span className="text-xs font-mono text-slate-400">{weight.val}</span>
                            </div>
                          </motion.div>
                        ))}
                     </div>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'spacing' && (
              <section id="spacing">
                <SectionTitle title="Spacing Scale" icon={Ruler} />
                
                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                  <div className="space-y-10">
                    {SPACING.map((space) => (
                      <motion.div 
                        variants={itemVariants}
                        key={space.id}
                        className="flex items-center gap-8"
                      >
                        <div className="w-12 text-slate-400 text-xs font-mono font-medium">{space.id}</div>
                        <div className="flex-1">
                          <div 
                            className="bg-blue-500 h-4 rounded-md shadow-sm shadow-blue-100" 
                            style={{ width: space.px + 'px' }}
                          ></div>
                        </div>
                        <div className="w-24 text-right text-slate-500 text-xs font-mono">{space.px}px / {space.val}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'radius' && (
              <section id="radius">
                <SectionTitle title="Border Radius" icon={Square} />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {RADIUS.map((radius) => (
                    <motion.div 
                      variants={itemVariants}
                      key={radius.name}
                      className="group"
                    >
                      <div className={`aspect-square bg-white border-2 border-dashed border-slate-200 ${radius.name} mb-4 flex items-center justify-center group-hover:border-blue-300 transition-colors`}>
                        <div className={`w-16 h-16 bg-blue-100 border border-blue-200 ${radius.name} shadow-sm`}></div>
                      </div>
                      <div className="px-2">
                        <p className="text-sm font-semibold text-slate-900">{radius.name}</p>
                        <p className="text-xs font-mono text-slate-400">{radius.val}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around md:hidden z-50">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center gap-1 ${
              activeSection === section.id ? 'text-blue-600' : 'text-slate-400'
            }`}
          >
            <section.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{section.label.split(' ')[0]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

