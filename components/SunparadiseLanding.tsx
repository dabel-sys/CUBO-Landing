
import React, { useState, useRef, useEffect } from 'react';
import { m, useScroll, useTransform, useSpring, useInView, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { 
  ArrowRight, Sun, Wind, Box, 
  ShieldCheck, Layers, 
  Zap, Home, Car, Volume2, Check,
  Sparkles, Activity, Battery, Info, CreditCard, Leaf, Gauge
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useView } from '../contexts/ViewContext';
import { ViewState } from '../types';

const SUNPARADISE_DESIGNER_URL = "https://sunparadise.skylva.com/#/codes/MYZKDBAP";

// --- UTILS ---
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]; // "The Tesla Curve"

const TextLine = ({ children, delay }: { children?: React.ReactNode, delay: number }) => (
    <div className="overflow-hidden block">
        <m.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay }}
            className="block"
        >
            {children}
        </m.span>
    </div>
);

const NumberTicker = ({ value }: { value: number }) => {
    // A simple formatter that ensures pricing doesn't jump around
    return (
        <span className="tabular-nums tracking-tight">
            {value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </span>
    );
};

// --- NAVIGATION COMPONENTS ---

const MatrixLanguage = () => {
    const { language, setLanguage } = useLanguage();
    const [display, setDisplay] = useState(language.toUpperCase());
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (!animating) setDisplay(language.toUpperCase());
    }, [language, animating]);

    const cycle = () => {
        if (animating) return;
        setAnimating(true);
        
        const langs = ['en', 'nl', 'de', 'fr'];
        const nextIndex = (langs.indexOf(language) + 1) % langs.length;
        const nextLang = langs[nextIndex] as 'en' | 'nl' | 'de' | 'fr';
        
        let steps = 0;
        const maxSteps = 12;
        const interval = setInterval(() => {
            steps++;
            if (steps >= maxSteps) {
                clearInterval(interval);
                setLanguage(nextLang);
                setDisplay(nextLang.toUpperCase());
                setAnimating(false);
            } else {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                setDisplay(
                    chars[Math.floor(Math.random() * chars.length)] + 
                    chars[Math.floor(Math.random() * chars.length)]
                );
            }
        }, 50);
    };

    return (
        <button 
            onClick={cycle}
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-sunparadise-blue transition-all group select-none"
            aria-label="Change Language"
        >
            <div className="relative w-2 h-2">
                <span className="absolute inset-0 rounded-full border border-current group-hover:border-sunparadise-blue transition-colors" />
                <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-100 group-hover:bg-sunparadise-blue transition-all animate-ping" />
            </div>
            <span className="w-6 text-center tabular-nums">{display}</span>
        </button>
    );
};

const SunparadiseHeader = ({ onClick }: { onClick: () => void }) => {
    const [hovered, setHovered] = useState(false);
    const { t } = useLanguage();

    return (
        <button 
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-left pointer-events-auto transition-all duration-300 group"
        >
            <div className="relative h-10 w-40 md:w-64 overflow-hidden">
                <m.div 
                    initial={{ y: 0 }}
                    animate={{ y: hovered ? -40 : 0 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="absolute top-0 left-0 h-full flex items-center"
                >
                    <img 
                        src="/images/sunparadise-logo.png" 
                        alt="Sunparadise" 
                        className="h-full w-auto object-contain object-left"
                    />
                </m.div>
                
                <m.div 
                    initial={{ y: 40 }}
                    animate={{ y: hovered ? 0 : 40 }}
                    transition={{ duration: 0.4, ease: smoothEase }}
                    className="absolute top-0 left-0 h-full flex items-center"
                >
                    <div className="font-display font-bold tracking-widest uppercase text-lg leading-none whitespace-nowrap">
                        <span className="text-white">SKYLVA</span>
                        <span className="block text-[9px] font-mono text-sunparadise-blue mt-1.5 flex items-center gap-2">
                            <ArrowRight size={10} className="rotate-180" /> {t.sunparadise_landing.return_home}
                        </span>
                    </div>
                </m.div>
            </div>
        </button>
    )
}

// --- MAIN PAGE ---

const SunparadiseLanding: React.FC = () => {
  const { setView } = useView();
  const { t } = useLanguage();
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Updated to use window scroll (Lenis) instead of container ref
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div 
        className="bg-[#020202] text-white font-sans selection:bg-sunparadise-blue selection:text-white w-full min-h-screen relative"
    >
      {/* CINEMATIC PROGRESS BAR */}
      <m.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-sunparadise-blue z-[100] origin-left mix-blend-screen" />

      {/* NAVIGATION */}
      <div className="relative w-full">
          <nav className="absolute top-0 left-0 right-0 z-[90] px-4 md:px-12 pt-[max(1.5rem,env(safe-area-inset-top))] pb-6 flex justify-between items-center text-white pointer-events-none">
              <div className="pointer-events-auto">
                <SunparadiseHeader onClick={() => setView(ViewState.LANDING)} />
              </div>
              <div className="flex items-center gap-3 md:gap-8 pointer-events-auto">
                  <div className="block">
                    <MatrixLanguage />
                  </div>
                  <button onClick={() => setSoundEnabled(!soundEnabled)} className="hidden md:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mix-blend-difference">
                      <Volume2 size={14} /> {soundEnabled ? t.sunparadise_landing.audio_on : t.sunparadise_landing.audio_off}
                  </button>
                  <button 
                    onClick={() => window.open(SUNPARADISE_DESIGNER_URL, '_blank')}
                    className="bg-white text-black px-4 py-2 md:px-6 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-sunparadise-blue hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
                  >
                      {t.sunparadise_landing.configure}
                  </button>
              </div>
          </nav>

          <HeroSection />
      </div>

      <ManifestoSection />
      <AnatomySection />
      <StudioFinale />

    </div>
  );
};

// --- ACT 1: HERO ---
const HeroSection = () => {
    const ref = useRef(null);
    const desktopVideoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);
    const { t } = useLanguage();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    
    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]); // Subtle zoom
    const brightness = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
    const [isSafari, setIsSafari] = useState(false);
    const [btnHover, setBtnHover] = useState(false);

    useEffect(() => {
        const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        setIsSafari(isSafariBrowser);
    }, []);

    useEffect(() => {
        const videos = [desktopVideoRef.current, mobileVideoRef.current];
        const tryPlay = (video: HTMLVideoElement | null) => {
            if (!video) return;
            video.muted = true;
            video.defaultMuted = true;
            video.playsInline = true;
            video.play().catch(e => console.warn("Autoplay:", e));
        };
        const timer = setTimeout(() => videos.forEach(tryPlay), 100);
        return () => clearTimeout(timer);
    }, [isSafari]);

    return (
        <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
            <m.div style={{ scale: scaleImg, filter: useMotionTemplate`brightness(${brightness})` }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#020202] z-10" />
                <video 
                    ref={desktopVideoRef}
                    key={isSafari ? "safari-video" : "standard-video"}
                    autoPlay muted loop playsInline preload="auto" poster="/images/hero-poster.jpg"
                    className="hidden md:block w-full h-full object-cover"
                >
                    {isSafari ? <source src="/images/bannercubosolar.mp4" type="video/mp4" /> : 
                    <><source src="/images/bannercubosolar.webm" type="video/webm" /><source src="/images/cubo-solar.mp4" type="video/mp4" /></>}
                </video>
                <video 
                    ref={mobileVideoRef}
                    src="/images/cubo-solar.mp4"
                    autoPlay muted loop playsInline preload="auto" poster="/images/hero-poster.jpg"
                    className="block md:hidden w-full h-full object-cover"
                />
            </m.div>

            <m.div style={{ y: yText, opacity: opacityText }} className="relative z-20 text-center px-6 w-full flex flex-col items-center">
                <m.div 
                    initial={{ width: 0 }} animate={{ width: "100px" }} transition={{ delay: 0.5, duration: 1, ease: smoothEase }}
                    className="h-[1px] bg-sunparadise-blue mx-auto mb-6 md:mb-8"
                />
                
                {/* CENTERED STACKED TITLE */}
                <div className="flex flex-col items-center mix-blend-overlay">
                    {/* Line 1: CUBO - Normal Spacing - Using font-display (Outfit) for logo match */}
                    <div className="flex justify-center">
                        {Array.from(t.sunparadise_landing.hero_title_1).map((char, i) => (
                            <m.span
                                key={`l1-${i}`}
                                initial={{ y: 40, opacity: 0, filter: 'blur(12px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: smoothEase, delay: 0.2 + (i * 0.05) }}
                                className="text-7xl md:text-[10rem] font-display font-bold text-white leading-none tracking-tight"
                            >
                                {char}
                            </m.span>
                        ))}
                    </div>
                    {/* Line 2: SOLAR - Smaller to equal width - Using font-display (Outfit) for logo match */}
                    <div className="flex justify-center -mt-2 md:-mt-6">
                        {Array.from(t.sunparadise_landing.hero_title_2).map((char, i) => (
                            <m.span
                                key={`l2-${i}`}
                                initial={{ y: 40, opacity: 0, filter: 'blur(12px)' }}
                                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, ease: smoothEase, delay: 0.6 + (i * 0.05) }}
                                className="text-6xl md:text-[8rem] font-display font-bold text-white leading-none tracking-tight"
                            >
                                {char}
                            </m.span>
                        ))}
                    </div>
                </div>

                <m.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
                    className="text-xs md:text-lg font-mono text-sunparadise-blue uppercase tracking-[0.4em] mt-8"
                >
                    {t.sunparadise_landing.hero_subtitle}
                </m.p>

                {/* --- CONVERSION CTA MODULE --- */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: smoothEase }}
                    className="flex flex-col items-center mt-12 md:mt-16"
                >
                    {/* Main High-Conversion Button */}
                    <button
                        onClick={() => window.open(SUNPARADISE_DESIGNER_URL, '_blank')}
                        onMouseEnter={() => setBtnHover(true)}
                        onMouseLeave={() => setBtnHover(false)}
                        className="relative h-14 bg-white text-black rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-[0.22,1,0.36,1] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 group"
                        style={{ width: btnHover ? '340px' : '160px' }}
                    >
                        <div className="relative z-10 flex items-center gap-3 px-6 whitespace-nowrap">
                            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300">
                                {btnHover ? "Design your CUBO in 60 seconds" : "Configure"}
                            </span>
                            <ArrowRight 
                                size={14} 
                                className={`transition-transform duration-500 ${btnHover ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2 w-0'}`} 
                            />
                        </div>
                    </button>

                    {/* Subtitle */}
                    <p className="text-[10px] md:text-xs text-white/50 mt-4 font-light tracking-wide max-w-xs mx-auto">
                        Visualize your carport, options and price instantly.
                    </p>
                </m.div>
                {/* ----------------------------- */}

            </m.div>

            {/* Scroll Prompt - Pushed down slightly */}
            <m.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30 pointer-events-none"
            >
                <span className="text-[9px] font-mono uppercase tracking-widest">{t.sunparadise_landing.scroll_hint}</span>
                <div className="h-8 w-[1px] bg-white/50" />
            </m.div>
        </section>
    )
}

// --- ACT 2: MANIFESTO ---
const ManifestoSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const { t } = useLanguage();

    const items = [
        { id: 0, title: t.sunparadise_landing.manifesto_items[0].title, subtitle: t.sunparadise_landing.manifesto_items[0].subtitle, desc: t.sunparadise_landing.manifesto_items[0].desc, img: "/images/geometry-1.webp" },
        { id: 1, title: t.sunparadise_landing.manifesto_items[1].title, subtitle: t.sunparadise_landing.manifesto_items[1].subtitle, desc: t.sunparadise_landing.manifesto_items[1].desc, img: "/images/geometry-2.webp" },
        { id: 2, title: t.sunparadise_landing.manifesto_items[2].title, subtitle: t.sunparadise_landing.manifesto_items[2].subtitle, desc: t.sunparadise_landing.manifesto_items[2].desc, img: "/images/atmos-2.webp" }
    ];

    return (
        <section className="min-h-[100dvh] flex flex-col justify-center py-16 md:py-0 bg-[#020202] border-t border-white/5">
            <div className="max-w-[1920px] mx-auto px-4 md:px-12 w-full">
                <div className="mb-8 md:mb-16">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sunparadise-blue/80 block mb-2">{t.sunparadise_landing.manifesto_label}</span>
                    <h2 className="text-3xl md:text-5xl font-display font-light text-white">{t.sunparadise_landing.manifesto_title}</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[75vh] md:h-[70vh]">
                    {items.map((item, index) => (
                        <m.div 
                            key={item.id}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                            layout
                            className={`
                                relative rounded-3xl overflow-hidden cursor-pointer group
                                ${activeIndex === index ? 'flex-[4]' : 'flex-[1]'}
                                h-full border border-white/10 transition-all duration-700 ease-[0.22,1,0.36,1]
                            `}
                        >
                            <div className="absolute inset-0">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className={`w-full h-full object-cover transition-all duration-1000 ${activeIndex === index ? 'grayscale-0 scale-100' : 'grayscale scale-110 opacity-40'}`} 
                                />
                                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                            </div>
                            
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className={`text-xs font-mono border rounded-full px-2 py-1 transition-colors ${activeIndex === index ? 'text-white border-white/30 bg-black/30 backdrop-blur' : 'text-white/40 border-white/10'}`}>0{index + 1}</span>
                                </div>
                                <div>
                                    <h3 className={`font-display font-light text-white transition-all duration-500 origin-left ${activeIndex === index ? 'text-4xl md:text-7xl mb-4 md:mb-6' : 'text-2xl md:-rotate-90 md:translate-y-24 md:translate-x-[-1rem] absolute bottom-0 left-0'}`}>
                                        {item.title}
                                    </h3>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <m.div 
                                                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: smoothEase }}
                                            >
                                                <p className="text-white/80 text-sm md:text-lg font-light leading-relaxed max-w-xl border-l-2 border-sunparadise-blue pl-6">
                                                    {item.desc}
                                                </p>
                                            </m.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- ACT 3: ANATOMY (Blueprints) ---
const AnatomySection = () => {
    const { t } = useLanguage();
    
    const steps = [
        { id: 0, title: t.sunparadise_landing.anatomy_items[0].title, subtitle: t.sunparadise_landing.anatomy_items[0].subtitle, description: t.sunparadise_landing.anatomy_items[0].desc, image: "/images/technical-1.webp", specs: t.sunparadise_landing.anatomy_items[0].specs, icon: <Box size={20} /> },
        { id: 1, title: t.sunparadise_landing.anatomy_items[1].title, subtitle: t.sunparadise_landing.anatomy_items[1].subtitle, description: t.sunparadise_landing.anatomy_items[1].desc, image: "/images/technical-2.webp", specs: t.sunparadise_landing.anatomy_items[1].specs, icon: <Sun size={20} /> },
        { id: 2, title: t.sunparadise_landing.anatomy_items[2].title, subtitle: t.sunparadise_landing.anatomy_items[2].subtitle, description: t.sunparadise_landing.anatomy_items[2].desc, image: "/images/intelligence-3.webp", specs: t.sunparadise_landing.anatomy_items[2].specs, icon: <ShieldCheck size={20} /> }
    ];

    return (
        <section className="bg-white text-black min-h-[100dvh] flex flex-col justify-center py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 md:px-12 relative z-10 w-full">
                <div className="flex justify-between items-end border-b border-black/10 pb-8 mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Activity className="text-sunparadise-blue" size={16} />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">{t.sunparadise_landing.anatomy_label}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight">{t.sunparadise_landing.anatomy_title}</h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-black/50 mb-1">{t.sunparadise_landing.anatomy_eng}</div>
                        <div className="text-xl font-display text-sunparadise-blue">{t.sunparadise_landing.anatomy_quality}</div>
                    </div>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 z-0" />

                    <div className="flex flex-col gap-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <m.div 
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, ease: smoothEase }}
                                    className={`flex flex-col md:flex-row gap-12 md:gap-24 relative z-10 ${isEven ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Central Node */}
                                    <div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-sunparadise-blue z-20 shadow-lg">
                                        {step.icon}
                                    </div>

                                    {/* Content Side */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sunparadise-blue mb-2 block">0{index + 1} // {step.subtitle}</span>
                                        <h3 className="text-4xl md:text-5xl font-display font-light mb-6 text-black">{step.title}</h3>
                                        <p className={`text-lg font-light text-black/60 leading-relaxed mb-8 ${isEven ? 'ml-auto' : ''} max-w-lg`}>
                                            {step.description}
                                        </p>
                                        <div className={`grid grid-cols-3 gap-6 border-t border-black/10 pt-6 ${isEven ? 'justify-end' : ''}`}>
                                            {step.specs.map((spec: any, i: number) => (
                                                <div key={i} className={isEven ? 'text-right' : 'text-left'}>
                                                    <div className="text-[10px] font-mono uppercase tracking-widest text-black/40 mb-1">{spec.label}</div>
                                                    <div className="text-lg font-display font-medium text-black">{spec.val}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                                        <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-black/5 shadow-2xl bg-gray-50 group">
                                            <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            {/* Tech Overlay */}
                                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded border border-black/5 text-[9px] font-mono uppercase text-black/50">
                                                FIG. {index + 1}.0
                                            </div>
                                        </div>
                                    </div>
                                </m.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- ACT 5: THE STUDIO (Configurator) ---
const StudioFinale = () => {
    const { t } = useLanguage();
    const [scene, setScene] = useState<'terras' | 'carport'>('terras');
    const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);
    
    // --- Energy Slider State ---
    const [monthlyYieldEstimate, setMonthlyYieldEstimate] = useState(350); // Default kWh/month
    const kwhPrice = 0.40; // €/kWh average
    
    // Reset upgrades on scene change
    useEffect(() => setSelectedUpgrades([]), [scene]);

    // Data
    const basePrice = 19600;
    const upgradesMap = {
        terras: [
            { id: 'walls', label: t.sunparadise_landing.studio_upgrades.walls, price: 4500, icon: <Layers size={18} /> },
            { id: 'led', label: t.sunparadise_landing.studio_upgrades.led, price: 1200, icon: <Sparkles size={18} /> },
            { id: 'battery', label: t.sunparadise_landing.studio_upgrades.battery, price: 4200, icon: <Battery size={18} /> },
            { id: 'shutters', label: t.sunparadise_landing.studio_upgrades.shutters, price: 2100, icon: <Wind size={18} /> }
        ],
        carport: [
            { id: 'ev', label: t.sunparadise_landing.studio_upgrades.ev, price: 1450, icon: <Zap size={18} /> },
            { id: 'battery', label: t.sunparadise_landing.studio_upgrades.battery, price: 4200, icon: <Battery size={18} /> },
            { id: 'matrix', label: t.sunparadise_landing.studio_upgrades.matrix, price: 1600, icon: <Sparkles size={18} /> }
        ]
    };

    const currentUpgrades = upgradesMap[scene];
    const toggleUpgrade = (id: string) => setSelectedUpgrades(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    
    const upgradesCost = selectedUpgrades.reduce((acc, id) => {
        const u = currentUpgrades.find(x => x.id === id);
        return acc + (u ? u.price : 0);
    }, 0);
    
    const totalPrice = basePrice + upgradesCost;
    
    // Savings Calculations
    const monthlySavings = Math.round(monthlyYieldEstimate * kwhPrice);

    // Derived Benefits
    const co2Offset = (monthlyYieldEstimate * 0.4).toFixed(0); // kg CO2
    const evKm = Math.round(monthlyYieldEstimate * 5); // 5km per kWh approx

    return (
        <section id="studio" className="relative h-[100dvh] w-full bg-[#050505] overflow-hidden flex flex-col lg:flex-row font-sans selection:bg-white selection:text-black">
            
            {/* VISUALIZER */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <m.div
                        key={scene}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: smoothEase }}
                        className="absolute inset-0"
                    >
                        <img 
                            src={scene === 'carport' ? "/images/product-3.webp" : "/images/atmos-1.webp"} 
                            alt="Visualizer"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    </m.div>
                </AnimatePresence>
            </div>

            {/* INTERFACE LAYER */}
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
                
                {/* Header (Top Left) */}
                <div className="p-6 md:p-12 lg:w-1/2 flex flex-col justify-between pointer-events-none">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="pointer-events-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-sunparadise-blue/20 text-sunparadise-blue px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-sunparadise-blue/20 backdrop-blur-md">
                                {t.sunparadise_landing.studio_tagline}
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white mb-6 drop-shadow-2xl">
                            CUBO Solar
                        </h2>
                        {/* Scene Switcher */}
                        <div className="flex gap-2">
                            <button onClick={() => setScene('terras')} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${scene === 'terras' ? 'bg-white text-black' : 'bg-black/40 text-white/50 border border-white/10 hover:bg-black/60 hover:text-white'}`}>
                                {t.sunparadise_landing.studio_scenes.terras}
                            </button>
                            <button onClick={() => setScene('carport')} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${scene === 'carport' ? 'bg-white text-black' : 'bg-black/40 text-white/50 border border-white/10 hover:bg-black/60 hover:text-white'}`}>
                                {t.sunparadise_landing.studio_scenes.carport}
                            </button>
                        </div>
                    </m.div>
                </div>

                {/* Configurator Panel (Right) */}
                <div className="lg:w-1/2 h-full flex flex-col justify-end lg:justify-center p-4 md:p-12 pointer-events-none">
                    <div className="pointer-events-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-xl ml-auto shadow-2xl flex flex-col gap-4 md:gap-8 max-h-[75vh] overflow-hidden">
                        
                        {/* Upgrades Scroll */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-0">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t.sunparadise_landing.studio_config_label}</span>
                                <span className="text-[10px] font-mono text-sunparadise-blue">{selectedUpgrades.length} {t.configurator.active}</span>
                            </div>
                            <div className="space-y-3">
                                {currentUpgrades.map((u) => {
                                    const active = selectedUpgrades.includes(u.id);
                                    return (
                                        <button
                                            key={u.id}
                                            onClick={() => toggleUpgrade(u.id)}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group ${active ? 'bg-sunparadise-blue text-white border-sunparadise-blue' : 'bg-white/5 border-white/5 text-white/60 hover:bg-white/10'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={active ? 'text-white' : 'text-white/50 group-hover:text-white'}>{u.icon}</div>
                                                <span className="text-sm font-bold tracking-wide">{u.label}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs font-mono ${active ? 'text-white/80' : 'text-white/30'}`}>+€{u.price}</span>
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${active ? 'bg-white border-white' : 'border-white/20'}`}>
                                                    {active && <Check size={12} className="text-sunparadise-blue" />}
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* --- NEW: ENERGY SAVINGS SIMULATOR --- */}
                        <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-2 text-white/70">
                                    <Sun size={14} className="text-sunparadise-blue" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Est. Monthly Generation</span>
                                </div>
                                <span className="text-xs font-mono text-white">{monthlyYieldEstimate} kWh</span>
                            </div>
                            
                            <input 
                                type="range" 
                                min="0" 
                                max="800" 
                                value={monthlyYieldEstimate} 
                                onChange={(e) => setMonthlyYieldEstimate(Number(e.target.value))}
                                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-sunparadise-blue mb-4"
                            />

                            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                                <div className="text-center">
                                    <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Savings</div>
                                    <div className="text-sm font-mono text-emerald-400">-€{monthlySavings}</div>
                                </div>
                                <div className="text-center border-l border-white/5">
                                    <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1 flex items-center justify-center gap-1"><Leaf size={8}/> CO2 Offset</div>
                                    <div className="text-sm font-mono text-white/70">{co2Offset} kg</div>
                                </div>
                                <div className="text-center border-l border-white/5">
                                    <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1 flex items-center justify-center gap-1"><Gauge size={8}/> EV Range</div>
                                    <div className="text-sm font-mono text-white/70">{evKm} km</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer (Price & Action) */}
                        <div className="pt-4 md:pt-6 border-t border-white/10 flex-shrink-0">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                                        Total Investment
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl md:text-4xl font-display font-medium text-white">
                                            € <NumberTicker value={totalPrice} />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => window.open(SUNPARADISE_DESIGNER_URL, '_blank')}
                                className="w-full h-14 bg-white text-black rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-sunparadise-blue hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 active:scale-95"
                            >
                                {t.sunparadise_landing.studio_configure_btn} <ArrowRight size={16} />
                            </button>
                            
                            <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-white/30 uppercase tracking-widest">
                                <Info size={12} />
                                <span>Includes VAT & Installation Estimate</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SunparadiseLanding;
