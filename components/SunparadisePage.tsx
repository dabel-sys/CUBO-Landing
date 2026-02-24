import React, { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, Sun, Zap, 
  Maximize, Share2, Download, 
  Info, Calendar, FileText, Truck, Wrench,
  Upload, Wand2, Video, Loader2, Play, Image as ImageIcon, Sparkles, X,
  ClipboardCheck, Factory, HardHat, ChevronDown
} from 'lucide-react';
// GoogleGenAI import removed as this is now a static demo
import { useLanguage } from '../contexts/LanguageContext';
import { useView } from '../contexts/ViewContext';
import TextReveal from './TextReveal';
import { ViewState } from '../types';

const SunparadisePage: React.FC = () => {
  const { t } = useLanguage();
  
  // State for the main hero image (starts as 3D model, updates to AI render)
  const [heroImage, setHeroImage] = useState("/images/3d.jpg");
  
  // State for confirmation view
  const [isConfirmed, setIsConfirmed] = useState(false);

  // State for scroll hint
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Scroll listener to hide hint
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollHint(false);
        } else {
            setShowScrollHint(true);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToVisualizer = () => {
      const el = document.getElementById('ai-visualizer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // DATA FOR PATIO COVER
  const config = {
    id: "SP-PC-2025",
    model: "Patio Cover",
    type: "Wall-mounted",
    date: "12 Oct 2024",
    specs: {
      width: 600, // cm
      depth: 350, // cm
      height: 260, // cm
      area: 21.0, // m2
      panels_width: 6,
      panels_depth: 2
    },
    pricing: {
      subtotal: 12850.00,
      vat: 2698.50,
      total: 15548.50
    },
    performance: {
      yearly_yield_kwh: 2850,
      yearly_savings: 826.50,
      lifetime_savings: 20662.50, // 25 years
      roi_years: 6.2
    },
    modules: [
      { area: "Roof", name: "Bifacial Solar Glass (Clear)", qty: 12, price: 5800.00 },
      { area: "Structure", name: "Aluminum Wall Profile (Black)", qty: 1, price: 1250.00 },
      { area: "Front", name: "Support Posts (15x15cm)", qty: 2, price: 1400.00 },
      { area: "Sides", name: "Glass Wedge (Spie)", qty: 2, price: 1850.00 },
      { area: "Control", name: "Integrated LED & Drainage", qty: 1, price: 850.00 },
      { area: "Installation", name: "Wall Mounting Anchor Set", qty: 1, price: 450.00 }
    ]
  };

  const handleConfirm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsConfirmed(true);
  };

  return (
    <div className="bg-white text-skylva-charcoal min-h-screen font-sans relative">
      <AnimatePresence mode="wait">
      {isConfirmed ? (
        <OrderConfirmationView key="confirmation" config={config} />
      ) : (
        <m.div 
            key="dashboard"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {/* 
                MAIN WRAPPER 
                Padding top ensures content starts BELOW the fixed navigation bar.
            */}
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
                
                {/* 
                TOP HEADER STRIP (Static Flow)
                Displays Code and Price prominently at the start of the page content.
                */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-100 pb-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 bg-skylva-green rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Design Locked</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-light text-skylva-charcoal">
                            {config.model} <span className="text-gray-300">Edition</span>
                        </h1>
                        <span className="font-mono text-sm text-gray-400 mt-2 block">ID: {config.id}</span>
                    </div>
                    
                    <div className="mt-8 md:mt-0 text-right">
                        <div className="text-sm font-light text-gray-500 mb-1">Total Configuration Value</div>
                        <div className="text-3xl font-display font-bold text-skylva-charcoal">
                            € {config.pricing.total.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Incl. VAT & Installation</div>
                    </div>
                </div>

                {/* 
                SPLIT LAYOUT
                */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* LEFT COLUMN: VISUALS (Sticky) */}
                    <div className="lg:col-span-8">
                        <div className="space-y-6">
                            {/* Main Render */}
                            <div className="relative aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden group shadow-2xl border-[0.5px] border-gray-200">
                                <img 
                                    src={heroImage} 
                                    alt="Patio Cover Configuration" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay Badges */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gray-200 shadow-sm">
                                        {config.type}
                                    </span>
                                    <span className="bg-skylva-charcoal/90 text-white backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        {config.specs.width} x {config.specs.depth} cm
                                    </span>
                                </div>

                                {/* Interactive Actions */}
                                <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-lg">
                                        <Maximize size={16} />
                                    </button>
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-lg">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Performance Graph Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <EnergyChart config={config} />
                                
                                {/* Key Stats Cards */}
                                <div className="bg-[#F5F5F2] rounded-3xl p-8 flex flex-col justify-between border border-gray-100">
                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <Zap size={16} className="text-skylva-green" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Power Output</span>
                                        </div>
                                        <div className="text-5xl font-display font-light text-skylva-charcoal mb-2">
                                            {config.performance.yearly_yield_kwh}
                                        </div>
                                        <div className="text-sm text-gray-400 font-medium">kWh / Year generated</div>
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">CO2 Offset</div>
                                                <div className="text-xl font-display">~1.4 Tons</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Eq. Trees</div>
                                                <div className="text-xl font-display">64</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SPECS & CHECKOUT (Scrollable) */}
                    <div className="lg:col-span-4 space-y-12">
                        
                        {/* Module Breakdown */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-gray-200 pb-2">Modules Selected</h3>
                            <div className="space-y-4">
                                {config.modules.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start group py-2">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase text-gray-400 block mb-0.5">{item.area}</span>
                                            <span className="text-sm font-medium text-gray-800">{item.name}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] text-gray-400 block mb-0.5">x{item.qty}</span>
                                            <span className="text-sm font-mono text-gray-500">€ {item.price.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                                        </div>
                                    </div>
                                ))}
                                {/* Base Structure Cost */}
                                <div className="flex justify-between items-start pt-4 border-t border-dashed border-gray-200">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase text-gray-400 block mb-0.5">Base</span>
                                            <span className="text-sm font-medium text-gray-800">Skylva Frame (Aluminum)</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] text-gray-400 block mb-0.5">x1</span>
                                            <span className="text-sm font-mono text-gray-500">€ 4.234,00</span>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* Financial Breakdown */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-500">Subtotal (Excl. VAT)</span>
                                <span className="font-mono text-sm">€ {config.pricing.subtotal.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm text-gray-500">VAT (21%)</span>
                                <span className="font-mono text-sm text-gray-400">€ {config.pricing.vat.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                            </div>
                            <div className="w-full h-px bg-gray-200 mb-6" />
                            <div className="flex justify-between items-center">
                                <span className="text-base font-bold text-skylva-charcoal">Total</span>
                                <span className="text-3xl font-display font-bold">€ {config.pricing.total.toLocaleString('nl-NL', {minimumFractionDigits: 2})}</span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 border-b border-gray-200 pb-2">Production Timeline</h3>
                            <div className="space-y-0 relative pl-4">
                                <div className="absolute left-[23px] top-2 bottom-6 w-[1px] bg-gray-200" />
                                
                                <StepItem 
                                    icon={<FileText size={14} />} 
                                    title="Quote Received" 
                                    date="Today" 
                                    desc="Configuration secured. Awaiting confirmation."
                                    active 
                                />
                                <StepItem 
                                    icon={<Info size={14} />} 
                                    title="Technical Audit" 
                                    date="~ 2 Days" 
                                    desc="Engineer review for wind load & orientation."
                                />
                                <StepItem 
                                    icon={<Calendar size={14} />} 
                                    title="Production" 
                                    date="Week 42" 
                                    desc="Manufacturing of custom components."
                                />
                                <StepItem 
                                    icon={<Truck size={14} />} 
                                    title="Installation" 
                                    date="Week 48" 
                                    desc="White-glove delivery and assembly."
                                />
                            </div>
                        </div>

                        {/* CTA Actions */}
                        <div className="space-y-3 sticky bottom-6 bg-white/80 backdrop-blur-md p-4 -mx-4 rounded-2xl border border-white/20 shadow-xl lg:static lg:bg-transparent lg:p-0 lg:border-0 lg:shadow-none">
                            <button 
                                onClick={handleConfirm}
                                className="w-full bg-skylva-charcoal text-white py-5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                Confirm Request <ArrowRight size={16} />
                            </button>
                            <button className="w-full bg-transparent border border-gray-200 text-gray-500 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-colors flex items-center justify-center gap-3">
                                <Download size={16} /> Download PDF Quote
                            </button>
                        </div>

                    </div>
                </div>

                {/* 
                NEW: AI GARDEN VISUALIZER
                */}
                <div id="ai-visualizer" className="mt-32 pt-20 border-t border-gray-200">
                    <GardenVisualizer onRenderComplete={setHeroImage} />
                </div>

            </div>

            {/* Scroll Indicator */}
            <AnimatePresence>
                {showScrollHint && (
                    <m.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2 cursor-pointer text-skylva-charcoal hover:text-skylva-green transition-colors"
                        onClick={scrollToVisualizer}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200">Scroll to Visualize</span>
                        <ChevronDown className="animate-bounce" size={20} />
                    </m.div>
                )}
            </AnimatePresence>
        </m.div>
      )}
      </AnimatePresence>
    </div>
  );
};

// --- Order Confirmation & Animated Timeline Component ---
const OrderConfirmationView: React.FC<{ config: any }> = ({ config }) => {
    const { setView } = useView();

    const handleReturnHome = (e: React.MouseEvent) => {
        e.preventDefault();
        setView(ViewState.LANDING);
    };

    return (
        <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 md:p-12 relative overflow-hidden"
        >
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-skylva-green/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D8D4CD]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10">
                
                {/* Header Success Message */}
                <div className="text-center mb-16 md:mb-24">
                    <m.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-skylva-green/30 bg-skylva-green/10 backdrop-blur-md mb-8"
                    >
                        <Check size={16} className="text-skylva-green" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-skylva-green">Order Initiated</span>
                    </m.div>
                    <h1 className="text-5xl md:text-7xl font-display font-light mb-6">
                        <TextReveal mode="words" stagger={0.05}>Production Scheduled.</TextReveal>
                    </h1>
                    <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                        Your configuration <span className="text-white font-mono">{config.id}</span> has been secured in our manufacturing queue.
                    </p>
                </div>

                {/* Animated Timeline */}
                <div className="relative">
                    {/* SVG Connecting Line */}
                    <svg className="absolute top-0 bottom-0 left-[20px] md:left-[50%] md:-ml-[1px] w-[2px] h-full overflow-visible z-0 hidden md:block">
                        <m.line 
                            x1="0" y1="0" x2="0" y2="100%" 
                            stroke="#333" 
                            strokeWidth="2" 
                        />
                        <m.line 
                            x1="0" y1="0" x2="0" y2="100%" 
                            stroke="#4ADE80" 
                            strokeWidth="2" 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 0.35 }} // Animate to "Engineering"
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                    </svg>
                    
                    {/* Mobile Line */}
                    <div className="absolute top-4 bottom-4 left-[27px] w-[2px] bg-white/10 md:hidden">
                        <m.div 
                            initial={{ height: 0 }}
                            animate={{ height: "35%" }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                            className="w-full bg-skylva-green"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-24 relative z-10">
                        
                        {/* Step 1: Confirmed (Active/Done) */}
                        <TimelineStep 
                            status="completed"
                            icon={<ClipboardCheck size={20} />}
                            title="Configuration Locked"
                            date="Today"
                            desc="Deposit processed. Inventory allocated."
                            align="right"
                            delay={0.2}
                        />

                        {/* Step 2: Engineering (Processing) */}
                        <TimelineStep 
                            status="active"
                            icon={<Loader2 size={20} className="animate-spin" />}
                            title="Structural Engineering"
                            date="Est. 48 Hours"
                            desc="Wind load calculation & site-specific blueprint generation."
                            align="left"
                            delay={1.2} // Delays appearance until line reaches it
                        />

                        {/* Step 3: Production (Pending) */}
                        <TimelineStep 
                            status="pending"
                            icon={<Factory size={20} />}
                            title="Manufacturing"
                            date="Week 42"
                            desc="CNC milling of Aluminum chassis & glass curing."
                            align="right"
                            delay={1.3}
                        />

                        {/* Step 4: Install (Pending) */}
                        <TimelineStep 
                            status="pending"
                            icon={<HardHat size={20} />}
                            title="White-Glove Installation"
                            date="Week 48"
                            desc="Delivery and assembly by SKYLVA certified team."
                            align="left"
                            delay={1.4}
                        />

                    </div>
                </div>

                {/* Footer Action */}
                <m.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="mt-24 text-center border-t border-white/10 pt-12"
                >
                    <p className="text-white/40 text-sm mb-8">A formal confirmation email has been sent to your inbox.</p>
                    <button 
                        onClick={handleReturnHome}
                        className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-skylva-green transition-colors"
                    >
                        <ArrowRight size={16} className="rotate-180" /> Return to Home
                    </button>
                </m.div>

            </div>
        </m.div>
    )
}

const TimelineStep = ({ status, icon, title, date, desc, align, delay }: any) => {
    const isCompleted = status === 'completed';
    const isActive = status === 'active';
    const isRight = align === 'right';

    return (
        <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.6 }}
            className={`flex md:items-center gap-8 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
        >
            {/* Spacer for Desktop Alignment */}
            <div className="hidden md:block w-1/2" />

            {/* Central Node */}
            <div className={`
                absolute left-[7px] md:left-1/2 md:-ml-[20px] 
                w-10 h-10 rounded-full border flex items-center justify-center z-20 bg-[#050505]
                ${isCompleted ? 'border-skylva-green text-skylva-green shadow-[0_0_20px_rgba(74,93,83,0.4)]' : 
                  isActive ? 'border-skylva-green text-skylva-green animate-pulse' : 
                  'border-white/10 text-white/30'}
            `}>
                {icon}
            </div>

            {/* Content Box */}
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isRight ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-3 border ${
                    isActive ? 'bg-skylva-green/20 border-skylva-green/30 text-skylva-green' : 
                    'bg-white/5 border-white/10 text-white/40'
                }`}>
                    {date}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isCompleted || isActive ? 'text-white' : 'text-white/50'}`}>
                    {title}
                </h3>
                <p className="text-sm font-light text-white/40 leading-relaxed max-w-sm ml-0 md:ml-auto">
                    {desc}
                </p>
            </div>
        </m.div>
    )
}

// --- AI Visualizer Component (STATIC DEMO) ---
const GardenVisualizer = ({ onRenderComplete }: { onRenderComplete?: (url: string) => void }) => {
    // --- PASTE YOUR STATIC ASSETS HERE ---
    const DEMO_INPUT_IMAGE = "/images/garden.png"; // Step 1: Customer Garden Photo
    const DEMO_RENDER_IMAGE = "/images/demo-render.jpg"; // Step 2: AI Render
    const DEMO_VIDEO_URL = "/images/demo-video.mp4"; // Step 3: AI Video
    // -------------------------------------

    const [stage, setStage] = useState<'upload_wait' | 'uploading' | 'input_ready' | 'analyzing' | 'rendered' | 'generating_video' | 'video_done'>('upload_wait');
    const [isFullScreen, setIsFullScreen] = useState(false);
    
    // Simulate File Upload
    const handleUpload = () => {
        setStage('uploading');
        setTimeout(() => {
            setStage('input_ready');
        }, 1500); // 1.5s Upload Simulation
    };

    // Step 1 -> 2: Simulate Rendering
    const handleGenerateRender = () => {
        setStage('analyzing');
        // Fake processing delay
        setTimeout(() => {
            setStage('rendered');
            // Trigger update to main page image
            if (onRenderComplete) {
                onRenderComplete(DEMO_RENDER_IMAGE);
            }
        }, 2500);
    };

    // Step 2 -> 3: Simulate Video Gen
    const handleGenerateVideo = () => {
        setStage('generating_video');
        // Fake processing delay
        setTimeout(() => {
            setStage('video_done');
        }, 3000);
    };

    return (
        <div className="bg-[#050505] text-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-skylva-green/10 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-skylva-green text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Future Lab</span>
                    <h2 className="text-4xl md:text-6xl font-display font-light mb-6">AI Garden Architect</h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-light">
                        Experience the future of design. Our upcoming AI engine transforms your 3D concepts into photorealistic renders and cinematic videos instantly. <span className="text-skylva-green font-medium">Technology Preview.</span>
                    </p>
                </div>

                {/* VISUALIZER FLOW */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* LEFT: INPUT AREA (Step 1) */}
                    <div className="space-y-8">
                        <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col items-center justify-center group">
                            
                            <AnimatePresence mode="wait">
                                {/* STATE: Waiting for Upload */}
                                {stage === 'upload_wait' && (
                                    <m.div
                                        key="wait"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center text-center p-8 w-full h-full justify-center border-2 border-dashed border-white/10 hover:border-white/30 hover:bg-white/5 transition-all rounded-3xl cursor-pointer"
                                        onClick={handleUpload}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                                            <Upload className="text-white/60" size={24} />
                                        </div>
                                        <h4 className="text-white font-medium mb-1">Upload Client Garden</h4>
                                        <p className="text-white/40 text-sm">Drag & drop or click to browse</p>
                                    </m.div>
                                )}

                                {/* STATE: Uploading Animation */}
                                {stage === 'uploading' && (
                                    <m.div
                                        key="uploading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center w-full h-full"
                                    >
                                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                                            <m.div 
                                                className="h-full bg-skylva-green" 
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                            />
                                        </div>
                                        <p className="text-xs font-mono uppercase tracking-widest text-white/50">Uploading...</p>
                                    </m.div>
                                )}

                                {/* STATE: Image Loaded */}
                                {(stage === 'input_ready' || stage === 'analyzing' || stage === 'rendered' || stage === 'generating_video' || stage === 'video_done') && (
                                    <m.div
                                        key="loaded"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative w-full h-full"
                                    >
                                        <img src={DEMO_INPUT_IMAGE} alt="Customer Garden Input" className="w-full h-full object-cover" />
                                        <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                                            Input: Client Garden
                                        </div>
                                    </m.div>
                                )}
                            </AnimatePresence>

                        </div>

                        {/* Action: Trigger Render (Only when input is ready) */}
                        {stage === 'input_ready' && (
                            <m.button 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                onClick={handleGenerateRender}
                                className="w-full bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-skylva-green hover:text-white transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <Wand2 size={16} /> Generate Photorealistic Render
                            </m.button>
                        )}

                        {/* Loading State for Render */}
                        {stage === 'analyzing' && (
                            <div className="w-full bg-white/10 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 cursor-wait">
                                <Loader2 className="animate-spin" size={16} /> Integrating Patio Cover with Environment...
                            </div>
                        )}
                        
                        {/* Completed State Indicator */}
                        {(stage === 'rendered' || stage === 'generating_video' || stage === 'video_done') && (
                             <div className="w-full bg-black/40 border border-white/10 text-white/50 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2">
                                <Check size={14} className="text-skylva-green" /> Render Complete
                            </div>
                        )}
                    </div>

                    {/* RIGHT: OUTPUT AREA (Step 2) */}
                    <div className="space-y-8">
                        <div className="relative aspect-[4/3] rounded-3xl bg-black border border-white/10 overflow-hidden flex items-center justify-center group">
                            {stage === 'upload_wait' || stage === 'uploading' || stage === 'input_ready' || stage === 'analyzing' ? (
                                // Empty / Placeholder State
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                                        <Sparkles className="text-white/20" size={24} />
                                    </div>
                                    <p className="text-white/30 text-sm font-mono uppercase tracking-widest">AI Output Canvas</p>
                                </div>
                            ) : (
                                // Render Result
                                <>
                                    <img 
                                        src={DEMO_RENDER_IMAGE} 
                                        alt="AI Render" 
                                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-105" 
                                        onClick={() => setIsFullScreen(true)}
                                    />
                                    
                                    {/* Badges & Actions */}
                                    <div className="absolute top-4 left-4 bg-skylva-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 pointer-events-none">
                                        Gemini AI Render
                                    </div>
                                    
                                    <button 
                                        onClick={() => setIsFullScreen(true)}
                                        className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <Maximize size={16} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Full Screen Modal */}
                        <AnimatePresence>
                            {isFullScreen && stage !== 'upload_wait' && stage !== 'uploading' && stage !== 'input_ready' && stage !== 'analyzing' && (
                                <m.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
                                    onClick={() => setIsFullScreen(false)}
                                >
                                    <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
                                        <img 
                                            src={DEMO_RENDER_IMAGE} 
                                            alt="Full Screen Render" 
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                                        />
                                        <button 
                                            onClick={() => setIsFullScreen(false)}
                                            className="absolute top-4 right-4 md:-top-12 md:right-0 text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-skylva-green transition-colors bg-black/50 md:bg-transparent px-4 py-2 rounded-full"
                                        >
                                            Close <X size={16} />
                                        </button>
                                    </div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* BOTTOM: VIDEO AREA (Step 3) - Full Width */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Action: Trigger Video (Only after render) */}
                        {stage === 'rendered' && (
                            <button 
                                onClick={handleGenerateVideo}
                                className="w-full max-w-md mx-auto bg-skylva-green text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 shadow-lg shadow-skylva-green/20"
                            >
                                <Video size={16} /> Animate Scene (Veo)
                            </button>
                        )}

                        {/* Loading State for Video */}
                        {stage === 'generating_video' && (
                            <div className="w-full bg-skylva-green/20 text-white py-8 rounded-3xl font-bold uppercase tracking-[0.2em] text-xs flex flex-col items-center justify-center gap-3 cursor-wait border border-skylva-green/20">
                                <Loader2 className="animate-spin" size={24} /> 
                                <span>Generating Veo Video...</span>
                            </div>
                        )}
                        
                        {/* VIDEO RESULT (Step 3) */}
                        <AnimatePresence>
                            {stage === 'video_done' && (
                                <m.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl mt-4"
                                >
                                    <div className="aspect-video relative bg-black">
                                        <video controls autoPlay loop className="w-full h-full object-cover">
                                            <source src={DEMO_VIDEO_URL} type="video/mp4" />
                                        </video>
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <div className="bg-white/10 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                                                Veo AI Video
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    )
}

// --- Interactive Chart Component ---
const EnergyChart = ({ config }: { config: any }) => {
    const [hoverYear, setHoverYear] = useState<number | null>(null);
    const years = 25;
    const yearlySavings = config.performance.yearly_savings;
    const inflation = 1.03; // 3% energy price inflation
    
    // Generate data points
    const dataPoints = Array.from({ length: years + 1 }, (_, i) => {
        // Calculate cumulative savings with compound inflation
        let cumulative = 0;
        for(let y=0; y<=i; y++) {
             cumulative += yearlySavings * Math.pow(inflation, y);
        }
        return cumulative;
    });

    const maxVal = dataPoints[years];
    
    // SVG Logic
    const width = 100;
    const height = 50;
    const padding = 5;
    
    const points = dataPoints.map((val, i) => {
        const x = (i / years) * (width);
        const y = height - ((val / maxVal) * (height));
        return `${x},${y}`;
    }).join(' ');

    const areaPath = `${points} L${width},${height} L0,${height} Z`;

    return (
        <div className="bg-skylva-charcoal rounded-3xl p-8 text-white relative overflow-hidden group shadow-lg">
            <div className="relative z-10 flex justify-between items-start mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Sun size={16} className="text-yellow-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Financial Yield</span>
                    </div>
                    <div className="text-3xl font-display font-light">
                        € {(hoverYear !== null ? dataPoints[hoverYear] : config.performance.lifetime_savings).toLocaleString('nl-NL', {maximumFractionDigits: 0})}
                    </div>
                    <div className="text-xs text-white/40 mt-1">
                        {hoverYear !== null ? `Cumulative Savings by Year ${hoverYear}` : 'Total Savings over 25 Years'}
                    </div>
                </div>
            </div>

            {/* The Chart */}
            <div className="relative h-32 w-full">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    
                    {/* Area Fill */}
                    <path d={areaPath} fill="url(#chartGradient)" />
                    
                    {/* Line Stroke */}
                    <path d={`M${points}`} fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Interactive Hover Areas */}
                    {dataPoints.map((_, i) => (
                        <rect 
                            key={i}
                            x={(i / years) * width - (width/years/2)}
                            y="0"
                            width={width/years}
                            height={height}
                            fill="transparent"
                            onMouseEnter={() => setHoverYear(i)}
                            onMouseLeave={() => setHoverYear(null)}
                            className="cursor-crosshair"
                        />
                    ))}

                    {/* Active Dot */}
                    {hoverYear !== null && (
                        <circle 
                            cx={(hoverYear / years) * width}
                            cy={height - ((dataPoints[hoverYear] / maxVal) * height)}
                            r="2"
                            fill="white"
                            stroke="#4ADE80"
                            strokeWidth="0.5"
                        />
                    )}
                </svg>
                
                {/* Axis Labels */}
                <div className="flex justify-between text-[8px] font-mono text-white/30 mt-2 uppercase tracking-widest">
                    <span>Year 1</span>
                    <span>Year 12</span>
                    <span>Year 25</span>
                </div>
            </div>
        </div>
    );
}

const StepItem = ({ icon, title, date, desc, active = false }: any) => (
    <div className="flex gap-6 pb-8 relative z-10">
        <div className={`
            w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 bg-white
            ${active ? 'border-skylva-green text-skylva-green shadow-[0_0_15px_rgba(74,93,83,0.3)]' : 'border-gray-200 text-gray-300'}
        `}>
            {icon}
        </div>
        <div>
            <div className="flex justify-between items-baseline mb-1">
                <h4 className={`text-sm font-bold ${active ? 'text-skylva-charcoal' : 'text-gray-400'}`}>{title}</h4>
                <span className="text-xs font-mono text-gray-400">{date}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                {desc}
            </p>
        </div>
    </div>
)

export default SunparadisePage;