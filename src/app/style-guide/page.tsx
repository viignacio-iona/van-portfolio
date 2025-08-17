'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Custom hook for mouse tracking glow effect
const useMouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);
  
  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  
  return {
    mousePosition,
    isHovering,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-base-900 text-text-primary">
      {/* Header */}
      <header className="bg-base-800 border-b border-base-700">
        <div className="container mx-auto px-8 py-8">
          <h1 className="text-4xl font-bold text-accent">Style Guide</h1>
          <p className="text-text-secondary mt-2">Design tokens, components, and patterns for portfolio consistency</p>
        </div>
      </header>

      <div className="container mx-auto px-8 py-12 space-y-16">
        
        {/* Colors */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-secondary">Primary Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Accent</div>
                    <div className="text-sm text-text-muted">#0ea5e9</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-fg rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Accent FG</div>
                    <div className="text-sm text-text-muted">#ffffff</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-secondary">Background Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-base-900 rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Base 900</div>
                    <div className="text-sm text-text-muted">#0a0a0a</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-base-800 rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Base 800</div>
                    <div className="text-sm text-text-muted">#1a1a1a</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-base rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Base</div>
                    <div className="text-sm text-text-muted">#262626</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-secondary">Text Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-text-primary rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Text Primary</div>
                    <div className="text-sm text-text-muted">#ffffff</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-text-secondary rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Text Secondary</div>
                    <div className="text-sm text-text-muted">#a3a3a3</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-text-muted rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Text Muted</div>
                    <div className="text-sm text-text-muted">#737373</div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Colors */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-secondary">UI Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-ui-card rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">UI Card</div>
                    <div className="text-sm text-text-muted">#404040</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-base-700 rounded-lg border border-base-700"></div>
                  <div>
                    <div className="font-medium text-text-primary">Base 700</div>
                    <div className="text-sm text-text-muted">#525252</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Typography</h2>
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-text-primary">Heading 1 (text-5xl)</h1>
              <h2 className="text-4xl font-bold text-text-primary">Heading 2 (text-4xl)</h2>
              <h3 className="text-3xl font-bold text-text-primary">Heading 3 (text-3xl)</h3>
              <h4 className="text-2xl font-semibold text-text-primary">Heading 4 (text-2xl)</h4>
              <h5 className="text-xl font-semibold text-text-primary">Heading 5 (text-xl)</h5>
              <h6 className="text-lg font-semibold text-text-primary">Heading 6 (text-lg)</h6>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-text-secondary leading-relaxed">Large paragraph text (text-xl) with relaxed line height for better readability.</p>
              <p className="text-lg text-text-secondary leading-relaxed">Standard paragraph text (text-lg) with relaxed line height for better readability.</p>
              <p className="text-base text-text-secondary">Base paragraph text (text-base) for general content.</p>
              <p className="text-sm text-text-muted">Small text (text-sm) for captions and secondary information.</p>
            </div>

            <div className="space-y-4">
              <div className="font-bold text-text-primary">Bold text for emphasis</div>
              <div className="font-semibold text-text-primary">Semibold text for sub-headings</div>
              <div className="font-medium text-text-primary">Medium text for labels</div>
              <div className="font-normal text-text-primary">Normal text weight</div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Spacing & Layout</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Container Layouts</h3>
              <div className="space-y-4">
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Hero Section Container</div>
                  <div className="text-text-primary">h-screen-dynamic bg-base relative overflow-hidden</div>
                </div>
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Section Container</div>
                  <div className="text-text-primary">bg-base</div>
                </div>
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Standard Container</div>
                  <div className="text-text-primary">container mx-auto px-8</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Padding & Margins</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Section Padding</div>
                  <div className="text-text-primary">py-20 (80px top/bottom)</div>
                </div>
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Content Spacing</div>
                  <div className="text-text-primary">space-y-8 (32px between elements)</div>
                </div>
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Grid Gap</div>
                  <div className="text-text-primary">gap-16 (64px between columns)</div>
                </div>
                <div className="bg-base-800 p-6 rounded-lg">
                  <div className="text-sm text-text-muted mb-2">Left Margin</div>
                  <div className="text-text-primary">w-4/5 mx-auto (80% width, centered)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Component Examples</h2>
          <div className="space-y-8">
            
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-outline">Secondary Button</button>
                <button className="btn border border-base-700 bg-transparent text-text-secondary hover:border-accent hover:text-accent transition-all duration-300">Outline Button</button>
                <button className="btn bg-transparent text-text-secondary hover:text-accent hover:underline hover:underline-offset-4 hover:decoration-accent">
                  Ghost Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card hover:bg-base-800 transition-colors duration-300">
                  <h4 className="text-lg font-semibold mb-2">Card Title</h4>
                  <p className="text-text-secondary">This is a sample card component with the .card class applied.</p>
                </div>
                <div className="card hover:shadow-soft hover:scale-105 hover:border-accent transition-all duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2">Interactive Card</h4>
                  <p className="text-text-secondary">This card has hover effects and smooth transitions.</p>
                </div>
                <div className="card bg-base-800 border border-base-700">
                  <h4 className="text-lg font-semibold mb-2">Custom Card</h4>
                  <p className="text-text-secondary">Custom styled card with different background and border.</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Timeline Component</h3>
              <div className="relative max-w-2xl">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
                
                <div className="relative mb-6">
                  <div className="absolute left-3.5 top-6 w-6 h-6 bg-accent rounded-full border-4 border-base-900 shadow-lg"></div>
                  <div className="card ml-16 relative overflow-hidden">
                    <h4 className="text-xl font-bold text-text-primary mb-2">Sample Position</h4>
                    <div className="flex items-center gap-2 text-text-secondary mb-4">
                      <div className="w-5 h-5 bg-text-secondary rounded"></div>
                      <span className="font-medium">Sample Company</span>
                    </div>
                    <div className="text-sm text-text-muted">January 2020 - Present</div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute left-3.5 top-6 w-6 h-6 bg-accent rounded-full border-4 border-base-900 shadow-lg"></div>
                  <div 
                    className="card ml-16 relative overflow-hidden cursor-pointer"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add('hover:glow-active');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove('hover:glow-active');
                    }}
                    style={{
                      '--mouse-x': '0px',
                      '--mouse-y': '0px'
                    } as React.CSSProperties}
                  >
                    {/* Glow Effect Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 hover:glow-active:opacity-100">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 165, 233, 0.15), transparent 40%)`
                        }}
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-text-primary mb-2">Interactive Timeline Card</h4>
                      <div className="flex items-center gap-2 text-text-secondary mb-4">
                        <div className="w-5 h-5 bg-text-secondary rounded"></div>
                        <span className="font-medium">Interactive Company</span>
                      </div>
                      <div className="text-sm text-text-muted">March 2018 - December 2019</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Layouts */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Grid Layouts</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-text-muted mb-2">Two Column Grid (lg:grid-cols-2)</div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-base-800 p-6 rounded-lg text-center">Left Column</div>
                    <div className="bg-base-800 p-6 rounded-lg text-center">Right Column</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-text-muted mb-2">Three Column Grid (md:grid-cols-3)</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-base-800 p-6 rounded-lg text-center">Column 1</div>
                    <div className="bg-base-800 p-6 rounded-lg text-center">Column 2</div>
                    <div className="bg-base-800 p-6 rounded-lg text-center">Column 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Animation Examples</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Framer Motion Animations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-base-800 p-6 rounded-lg text-center"
                >
                  Fade In Up
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-base-800 p-6 rounded-lg text-center"
                >
                  Slide In Left
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-base-800 p-6 rounded-lg text-center"
                >
                  Slide In Right
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-secondary">Hover Effects</h3>
              <div className="flex flex-wrap gap-4">
                <div className="card hover:shadow-soft transition-all duration-300 cursor-pointer">
                  Hover for shadow
                </div>
                <div className="card hover:scale-105 transition-transform duration-300 cursor-pointer">
                  Hover for scale
                </div>
                <div className="card hover:bg-base-800 transition-colors duration-300 cursor-pointer">
                  Hover for color
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Responsive Design</h2>
          <div className="space-y-6">
            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Breakpoint Classes</h3>
              <div className="space-y-2 text-sm">
                <div><span className="text-accent">sm:</span> 640px and up</div>
                <div><span className="text-accent">md:</span> 768px and up</div>
                <div><span className="text-accent">lg:</span> 1024px and up</div>
                <div><span className="text-accent">xl:</span> 1280px and up</div>
                <div><span className="text-accent">2xl:</span> 1536px and up</div>
              </div>
            </div>

            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Responsive Grid Example</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <div className="bg-accent/20 p-4 rounded text-center text-sm">1 col (mobile)</div>
                <div className="bg-accent/20 p-4 rounded text-center text-sm">2 cols (sm+)</div>
                <div className="bg-accent/20 p-4 rounded text-center text-sm">3 cols (lg+)</div>
                <div className="bg-accent/20 p-4 rounded text-center text-sm">4 cols (xl+)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-text-primary">Usage Guidelines</h2>
          <div className="space-y-6">
            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Container Consistency</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Hero sections: <code className="bg-base-700 px-2 py-1 rounded">h-screen-dynamic bg-base relative overflow-hidden</code></li>
                <li>• Content sections: <code className="bg-base-700 px-2 py-1 rounded">bg-base</code></li>
                <li>• Standard sections: <code className="bg-base-700 px-2 py-1 rounded">container mx-auto px-8</code></li>
                <li>• Hero content container: <code className="bg-base-700 px-2 py-1 rounded">w-4/5 mx-auto p-8</code></li>
              </ul>
            </div>

            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Section Spacing & Layout</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Hero section: <code className="bg-base-700 px-2 py-1 rounded">h-screen-dynamic</code> (dynamic viewport height)</li>
                <li>• Section padding: <code className="bg-base-700 px-2 py-1 rounded">py-20</code> (80px vertical)</li>
                <li>• Content spacing: <code className="bg-base-700 px-2 py-1 rounded">space-y-16</code> (64px between sections)</li>
                <li>• Hero content: <code className="bg-base-700 px-2 py-1 rounded">p-8 -mt-32</code> (32px padding, -128px top margin)</li>
                <li>• Component spacing: <code className="bg-base-700 px-2 py-1 rounded">space-y-8</code> (32px between elements)</li>
              </ul>
            </div>

            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Typography Scale</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Main headings: <code className="bg-base-700 px-2 py-1 rounded">text-4xl md:text-8xl</code></li>
                <li>• Section headings: <code className="bg-base-700 px-2 py-1 rounded">text-3xl</code></li>
                <li>• Sub-headings: <code className="bg-base-700 px-2 py-1 rounded">text-xl md:text-4xl</code></li>
                <li>• Body text: <code className="bg-base-700 px-2 py-1 rounded">text-lg md:text-xl</code></li>
                <li>• Taglines: <code className="bg-base-700 px-2 py-1 rounded">text-lg md:text-xl leading-relaxed</code></li>
              </ul>
            </div>

            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Animation Standards</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Duration: <code className="bg-base-700 px-2 py-1 rounded">duration: 0.6</code></li>
                <li>• Stagger delay: <code className="bg-base-700 px-2 py-1 rounded">delay: index * 0.2</code></li>
                <li>• Viewport: <code className="bg-base-700 px-2 py-1 rounded">viewport: {`{ once: true }`}`</code></li>
                <li>• Initial state: <code className="bg-base-700 px-2 py-1 rounded">initial: {`{ opacity: 0, y: 20 }`}`</code></li>
                <li>• Animate state: <code className="bg-base-700 px-2 py-1 rounded">animate: {`{ opacity: 1, y: 0 }`}`</code></li>
              </ul>
            </div>

            <div className="bg-base-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-text-secondary">Z-Index & Layering</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Background elements: <code className="bg-base-700 px-2 py-1 rounded">z-0</code></li>
                <li>• Gradient overlays: <code className="bg-base-700 px-2 py-1 rounded">z-10</code></li>
                <li>• Main content: <code className="bg-base-700 px-2 py-1 rounded">z-20</code></li>
                <li>• Hero content: <code className="bg-base-700 px-2 py-1 rounded">relative z-20</code></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
