import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, ArrowRight, ShieldCheck, 
  TrendingUp, Users, Briefcase, HeartPulse, Quote, 
  ChevronDown, CheckCircle2, Award, Calendar, Star
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

function FAQItem({ question, answer, index }: any) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');
  
  return (
    <FadeIn delay={index * 0.1}>
      <div className={`border-b border-[#D4B46A]/10 overflow-hidden transition-all duration-300 group ${open ? 'bg-[#0B3D2E]/30' : 'hover:bg-[#0B3D2E]/20'}`}>
        <button 
          onClick={() => setOpen(!open)}
          className="w-full text-left py-6 md:py-8 flex justify-between items-start md:items-center gap-6"
        >
          <div className="flex items-start md:items-center gap-6 md:gap-8 flex-1">
            <span className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${open ? 'text-[#D4B46A]' : 'text-[#D4B46A]/30 group-hover:text-[#D4B46A]/50'}`}>{num}</span>
            <span className={`font-serif text-xl md:text-2xl pr-4 transition-colors ${open ? 'text-[#D4B46A]' : 'text-[#FCFBF7] group-hover:text-[#FCFBF7]/90'}`}>{question}</span>
          </div>
          <div className={`mt-1 md:mt-0 w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? 'border-[#D4B46A] bg-[#D4B46A] text-[#0B3D2E]' : 'border-[#D4B46A]/20 text-[#D4B46A] group-hover:border-[#D4B46A]/50'}`}>
             <ChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={20} />
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-8 md:pl-[84px] text-[#FCFBF7]/70 leading-relaxed text-lg max-w-3xl">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/itsharmanngill@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            _captcha: "false",
            _subject: "New Consultation Request from Harmann Gill Website"
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#F2E6B3] border border-[#D4B46A]/30 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-[#4A4A4A] rounded-sm text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-[#0B3D2E] border border-[#D4B46A]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
          <CheckCircle2 className="text-[#D4B46A]" size={32} />
        </div>
        <h4 className="text-2xl font-serif text-[#FCFBF7] mb-4">Message Sent</h4>
        <p className="text-[#FCFBF7]/70 leading-relaxed mb-8">
          Thank you for reaching out. We have received your message and will get back to you shortly to schedule your consultation.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-sm text-sm">
          Something went wrong. Please try again later.
        </div>
      )}
      <div>
        <input type="text" name="name" required placeholder="Full Name" className="w-full bg-[#0B3D2E] border border-[#D4B46A]/40 text-[#FCFBF7] placeholder:text-[#FCFBF7]/50 p-4 outline-none focus:border-[#D4B46A] transition-colors rounded-sm disabled:opacity-50" disabled={status === 'submitting'} />
      </div>
      <div>
        <input type="email" name="email" required placeholder="Email Address" className="w-full bg-[#0B3D2E] border border-[#D4B46A]/40 text-[#FCFBF7] placeholder:text-[#FCFBF7]/50 p-4 outline-none focus:border-[#D4B46A] transition-colors rounded-sm disabled:opacity-50" disabled={status === 'submitting'} />
      </div>
      <div>
        <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-[#0B3D2E] border border-[#D4B46A]/40 text-[#FCFBF7] placeholder:text-[#FCFBF7]/50 p-4 outline-none focus:border-[#D4B46A] transition-colors rounded-sm disabled:opacity-50" disabled={status === 'submitting'} />
      </div>
      <div>
        <textarea name="message" required placeholder="How can we help you?" rows={4} className="w-full bg-[#0B3D2E] border border-[#D4B46A]/40 text-[#FCFBF7] placeholder:text-[#FCFBF7]/50 p-4 outline-none focus:border-[#D4B46A] transition-colors rounded-sm resize-none disabled:opacity-50" disabled={status === 'submitting'}></textarea>
      </div>
      {/* Honeypot field for FormSubmit */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full text-center">
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-[#0B3D2E]/30 border-t-[#0B3D2E] rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          'Send Secure Message'
        )}
      </button>
    </form>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ctaModalOpen, setCtaModalOpen] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termsOfServiceOpen, setTermsOfServiceOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'My Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Resources', href: '#workshops' },
    { label: 'Contacts', href: '#contact' },
  ];

  const SERVICES = [
    { id: 1, title: 'Investment Strategies', desc: 'Secure, long-term growth tailored to your goals.', icon: TrendingUp },
    { id: 2, title: 'Wealth Protection', desc: 'Safeguard your family against unexpected life events.', icon: ShieldCheck },
    { id: 3, title: 'Retirement Planning', desc: 'Build a sustainable blueprint for your golden years.', icon: Calendar },
    { id: 4, title: 'Financial Guidance', desc: 'Clear, unbiased advice to navigate complex decisions.', icon: Briefcase },
    { id: 5, title: 'Health Insurance', desc: 'Comprehensive coverage strategies for peace of mind.', icon: HeartPulse },
    { id: 6, title: 'Become A Business Partner', desc: 'Join our team of elite consultants. Build your legacy.', icon: Users, gold: true },
  ];

  const FAQS = [
    { q: 'Do I need a lot of money to get started?', a: 'Not at all — and this is the biggest myth in financial planning. You can start with as little as $50 a month. What matters most isn\'t how much you start with, it\'s starting. The sooner we create a plan around your current reality, the more options you have as your income grows.' },
    { q: 'How does the free discovery session work?', a: 'It\'s a relaxed, 45-minute conversation — zero pressure, zero sales pitch. Harmann listens to where you are, what you want, and what\'s holding you back. You\'ll leave with clarity and a clear direction, whether or not you decide to move forward. There is absolutely no obligation.' },
    { q: 'How often will we review my financial plan?', a: 'Life changes, and your financial plan should evolve with it. We typically schedule comprehensive reviews annually, but I\'m always available for check-ins whenever there\'s a major life event—like a job change, buying a home, or growing your family—to ensure your strategy stays on track.' },
    { q: 'Can you help me plan for retirement if I\'m starting late?', a: 'Absolutely — and it\'s never too late to start. Harmann works with clients at every stage, including those who feel they\'ve lost time. We\'ll map out your retirement income goals, maximize what you have, and build a strategy to get you there with confidence.' },
    { q: 'Can we meet virtually if I\'m outside the local area?', a: 'Yes — most sessions are conducted virtually via video call, making it easy and convenient wherever you are. Harmann works with clients across Canada and the United States, and virtual meetings are just as thorough and personal as in-person ones.' }
  ];

  return (
    <div className="min-h-screen bg-[#0B3D2E] text-[#FCFBF7] relative pb-20 md:pb-0 font-serif">
      
      {/* --- NAVBAR --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-serif font-bold tracking-wide text-[#FCFBF7]">
            Harmann Gill
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm tracking-wide font-medium hover:text-[#D4B46A] transition-colors text-[#FCFBF7]/90">
                {link.label}
              </a>
            ))}
            <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
              Book Free Session
            </a>
          </nav>
          
          <button className="lg:hidden text-[#FCFBF7] hover:text-[#D4B46A] transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* --- HERO --- */}
      <section className="relative min-h-[95vh] hero-bg flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#D4B46A] rounded-full blur-[180px] opacity-15 mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full pb-20 lg:pb-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left mt-10 lg:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#D4B46A] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm shadow-xl shadow-black/10 mx-auto lg:mx-0">
              <Award size={14} /> Licensed Professional
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-[#FCFBF7] leading-[1.1] mb-6">
              Build your Financial Blueprint with Clarity & Confidence
            </h1>
            
            <p className="text-[#FCFBF7]/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Most families are one unexpected crisis away from financial chaos. We help you simplify your financial life and gain the peace of mind you deserve - with a clear, personalized strategy built entirely around your life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                Book Free Session <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex lg:col-span-5 relative justify-center lg:justify-end mt-12 lg:mt-0 w-full"
          >
             <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-md aspect-[3/4] p-3 shadow-2xl relative mx-auto lg:mx-0">
                {/* Decorative border backdrop */}
                <div className="absolute inset-0 border border-[#D4B46A]/20 rounded-t-[140px] rounded-b-sm transform translate-x-3 -translate-y-3 sm:translate-x-4 sm:-translate-y-4"></div>
                <div className="absolute inset-0 border border-[#D4B46A]/10 rounded-t-[140px] rounded-b-sm bg-gradient-to-tr from-gold/5 to-transparent"></div>
                
                <div className="w-full h-full rounded-t-[140px] rounded-b-sm border border-[#D4B46A]/30 overflow-hidden relative group bg-[#0B3D2E] shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-10">
                  <img src="https://lh3.googleusercontent.com/d/1Gt6GpVuorZXZoYuFXuZu4IXYo5GUXIqW" referrerPolicy="no-referrer" alt="Harmann Gill Presenting Blueprint" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
                </div>
                
                {/* Floating trust badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 md:-left-12 bg-[#FCFBF7] backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-3 sm:gap-4 md:gap-5 z-20 border border-[#D4B46A]/30 w-max max-w-[260px] sm:max-w-none"
                >
                  <div className="relative flex-shrink-0">
                     <div className="absolute inset-0 border border-[#D4B46A]/40 rounded-full animate-ping opacity-20"></div>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold to-[#bda15e] rounded-full flex items-center justify-center shadow-inner relative z-10">
                       <ShieldCheck size={28} className="text-[#4A4A4A] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                     </div>
                  </div>
                  <div className="flex px-1 flex-col justify-center">
                    <div className="flex items-center gap-px sm:gap-1 mb-1 text-[#D4B46A]">
                       {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-current sm:w-3 sm:h-3" />)}
                    </div>
                    <p className="text-[#0B3D2E] font-serif font-bold text-sm sm:text-base md:text-lg leading-tight tracking-wide">Licensed & Trusted</p>
                    <p className="text-[#D4B46A]/80 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold mt-0.5 sm:mt-1">Wealth Consultant</p>
                  </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- GAP SECTION --- */}
      <section className="py-24 bg-[#FCFBF7] text-[#4A4A4A] relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#0B3D2E] mb-6">The Financial Planning Gap</h2>
            <p className="text-[#4A4A4A] text-lg">Millions are working hard but falling behind. Without a plan, the default outcome is uncertainty.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { t: 'Complex & Reactive', d: 'Without clarity, financial decisions become stressful and reactive to life\'s uncertainties.' },
              { t: 'Product-Focused', d: 'Accumulating accounts without a unified blueprint leaves significant blind spots.' },
              { t: 'The Missing Blueprint', d: 'You need an overarching strategy that ties everything together into one reliable path forward.' }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.15} className="bg-[#FCFBF7] p-10 border border-[#D4B46A]/10 rounded-none shadow-sm hover:border-[#D4B46A]/30 transition-colors duration-500">
                 <h3 className="text-xl font-serif text-[#0B3D2E] border-b border-[#D4B46A]/20 pb-4 mb-5 font-semibold">{item.t}</h3>
                 <p className="text-[#4A4A4A] flex-1 leading-relaxed text-[15px]">{item.d}</p>
               </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4} className="text-center">
            <button onClick={() => setCtaModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
              Start Your Journey Today <ArrowRight size={20} className="shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative">
         <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-4">Premium Services</h2>
              <div className="w-20 h-1 bg-[#D4B46A] mb-16"></div>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {SERVICES.map((svc, i) => (
                  <FadeIn key={i} delay={i * 0.1} className={`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start bg-[#0B3D2E] border border-[#D4B46A]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-2 relative overflow-hidden`}>
                    {svc.gold && <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B46A]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none block z-0"></div>}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors ${svc.gold ? 'bg-[#D4B46A] text-[#0B3D2E] shadow-lg' : 'bg-[#D4B46A]/10 text-[#D4B46A] group-hover:bg-[#D4B46A]/20'}`}>
                       <svc.icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className={`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 ${svc.gold ? 'text-[#D4B46A]' : 'text-[#FCFBF7]'}`}>{svc.title}</h3>
                    <p className={`relative z-10 leading-relaxed text-[15px] ${svc.gold ? 'text-[#FCFBF7]/90 mb-8' : 'text-[#FCFBF7]/70'}`}>{svc.desc}</p>
                    
                    {svc.gold && (
                       <a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="relative z-10 mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-[#bda15e] text-[#4A4A4A] px-7 py-3.5 rounded-sm font-bold tracking-widest hover:from-[#bda15e] hover:to-gold hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(212,180,106,0.3)] text-[11px] uppercase overflow-hidden group/btn w-full sm:w-auto">
                          <span className="relative z-10 flex items-center gap-2">Professional Application <Users size={14} /></span>
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                       </a>
                    )}
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* --- OUR PROCESS --- */}
      <section className="py-24 bg-[#0B3D2E] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4B46A]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/3 pointer-events-none block z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Our Proven Process</h2>
            <p className="text-[#FCFBF7]/70 text-lg">We take the guesswork out of financial planning with a clear, step-by-step approach designed to give you total clarity and control.</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#D4B46A]/10 z-0"></div>
            {[
              { num: '01', title: 'Discovery', desc: 'We explore your current financial standing, goals, and obligations in a no-pressure consultation.' },
              { num: '02', title: 'Analysis', desc: 'We identify critical gaps in your wealth protection and retirement plans.' },
              { num: '03', title: 'Blueprint', desc: 'We design a personalized financial architecture tailored specifically to your life.' },
              { num: '04', title: 'Implementation', desc: 'We help you put the right tools in place and provide ongoing review to keep you on track.' }
            ].map((step, i) => (
               <FadeIn key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-24 h-24 bg-[#0B3D2E] border-2 border-[#D4B46A]/30 rounded-full flex items-center justify-center mb-6 shadow-lg group hover:border-[#D4B46A] hover:scale-105 transition-all duration-300">
                    <span className="text-3xl font-serif text-[#D4B46A] font-bold">{step.num}</span>
                 </div>
                 <h3 className="text-xl font-serif text-[#FCFBF7] mb-3 font-semibold">{step.title}</h3>
                 <p className="text-[#FCFBF7]/70 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
               </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- MID-PAGE CTA --- */}
      <section className="py-20 bg-[#F2E6B3] border-t border-[#D4B46A]/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4B46A]/10 via-[#FCFBF7] to-[#FCFBF7] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#0B3D2E] mb-6">Ready to Take the First Step?</h2>
              <p className="text-[#0B3D2E]/80 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                Your free session is a no-pressure conversation about where you are, where you want to be, and how to get there. No obligation. No jargon.
              </p>
              <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                 <Calendar className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" /> Book Free Session
              </a>
            </FadeIn>
         </div>
      </section>

      {/* --- WHY WORK WITH ME --- */}
      <section className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Why Partner With Harmann?</h2>
                <p className="text-[#FCFBF7]/70 mb-10 leading-relaxed text-lg">We don't just offer advice; we provide a structured, long-term framework to ensure your family's financial stability and growth.</p>
                
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    'Personalized Financial Clarity', 'Structured Planning', 'Family-Focused Strategies',
                    'Long-Term Relationship Approach', 'Guidance With Simplicity', 'Confidence Through Planning'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#D4B46A] shrink-0 mt-0.5" size={20} />
                      <span className="text-[#FCFBF7] font-medium text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
             </FadeIn>
             <FadeIn delay={0.2} className="relative h-full min-h-[400px] bg-[#FCFBF7] border border-[#D4B46A]/20 rounded-sm p-10 flex flex-col justify-center border-l-4 border-[#D4B46A]">
                <Quote size={56} className="text-[#D4B46A]/20 mb-8" />
                <h3 className="text-2xl md:text-3xl font-serif text-[#0B3D2E] leading-snug mb-6">"The goal is not to accumulate a bunch of products, but to design a life of complete financial confidence."</h3>
                <p className="font-bold text-[#D4B46A] uppercase tracking-widest text-sm">— Harmann Gill</p>
             </FadeIn>
        </div>
      </section>

      {/* --- MY STORY --- */}
      <section id="story" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4B46A]/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none block"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
           <FadeIn className="order-2 lg:order-1 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                 <div className="absolute -inset-4 border border-[#D4B46A]/20 rounded-sm pointer-events-none z-0 transform translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4"></div>
                 <div className="relative aspect-[3/4] bg-[#0B3D2E] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-end group z-10">
                    <img src="https://lh3.googleusercontent.com/d/1yWzO7PO23M9EOARsJ3sMstUqcgx2n51s" referrerPolicy="no-referrer" alt="Harmann Gill" className="absolute inset-0 w-full h-full object-cover object-[center_10%] transition-transform duration-1000 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E] via-[#0B3D2E]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                    <div className="absolute inset-4 border border-[#D4B46A]/20 rounded-sm pointer-events-none transition-all duration-700 group-hover:scale-[0.96] group-hover:border-[#D4B46A]/40" />
                    <div className="relative z-10 bottom-8 px-8 pt-6 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                       <p className="text-[#FCFBF7] font-serif text-3xl font-bold mb-2 tracking-wide">Harmann Gill</p>
                       <p className="text-[#D4B46A] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <span className="w-4 h-px bg-[#D4B46A]/50 inline-block"></span> Wealth Consultant
                       </p>
                    </div>
                 </div>
              </div>
           </FadeIn>
           <FadeIn className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                 <span className="w-12 h-px bg-[#D4B46A] border-none"></span>
                 <span className="text-[#D4B46A] text-xs font-bold uppercase tracking-widest">Meet Harmann</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FCFBF7] mb-10 leading-tight">Finding Purpose Through Financial Clarity</h2>
              
              <div className="space-y-6 text-[#FCFBF7]/70 leading-relaxed text-[16px]">
                <p>
                  I did not start out planning to be a wealth consultant, but rather, I began with a personal search for stability, clarity, and an empowered future. I know exactly how it feels to have grand ambitions while lacking the precise financial roadmap to bring them to life. That very search for direction is what led me to my true calling.
                </p>
                <p>
                  Like many, I noticed how incredibly hard individuals and families work every single day, only to still feel uncertain about where they stand financially. I recognized a profound gap. The missing piece was not a lack of effort or ambition, but a lack of expert guidance, accessible strategies, and a trusted partner to simplify the complex world of personal wealth.
                </p>
                <p>
                  This realization changed my entire perspective. Seeking holistic growth, I stepped into the financial services industry and quickly discovered something much larger than a career: I found a vibrant, lifelong purpose.
                </p>
                <p>
                  I learned firsthand that true wealth extends far beyond an account balance. It is about lasting security, the freedom of choice, and the ability to navigate life without financial stress. This profound understanding inspired my transition into becoming a dedicated wealth consultant. By helping families eliminate confusion and build clear, structured blueprints for security, I realized this was the exact impact I wanted to create.
                </p>
                <p>
                  Today, my mission is twofold. I am deeply devoted to guiding my clients toward absolute financial clarity, while simultaneously expanding my business to empower others who are seeking growth, independence, and a deeply fulfilling purpose of their own.
                </p>
                <div className="mt-10 border-l-2 border-[#D4B46A] pl-8 py-3 bg-gradient-to-r from-gold/5 to-transparent">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-[#D4B46A] mb-3">My Core Philosophy</h3>
                  <p className="text-[#FCFBF7] font-serif italic text-xl md:text-2xl leading-snug">
                    “I help build lasting wealth through crystal clear strategies, not by chasing fleeting trends.”
                  </p>
                </div>
                <div className="pt-10 flex flex-col sm:flex-row flex-wrap items-center sm:items-start gap-4">
                  <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                    Book Free Session <ArrowRight size={16} />
                  </a>
                  <a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                    Become A Business Partner <Users size={16} />
                  </a>
                  <a href="tel:+12505036992" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                    <Phone size={16} /> Call Now
                  </a>
                </div>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* --- WORKSHOPS --- */}
      <section id="workshops" className="py-24 bg-[#0B3D2E] text-[#FCFBF7] relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-[#D4B46A]/20 rounded-full" />
        <div className="absolute -bottom-40 -left-60 w-[800px] h-[800px] border border-[#D4B46A]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Workshops & Seminars</h2>
              <p className="text-[#FCFBF7]/70 text-lg">Empowering our community through foundational financial education and exclusive business partnership opportunities.</p>
           </FadeIn>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
             {[
               { title: 'Financial Literacy', desc: 'Master the basics of wealth building and money management.' },
               { title: 'Retirement Planning', desc: 'Learn how to secure a comfortable and stress-free retirement.' },
               { title: 'Wealth Protection', desc: 'Discover strategies to protect your assets and your family.' },
               { title: 'Business Events', desc: 'Explore how to build your own financial consulting practice.' }
             ].map((ws, i) => (
                <FadeIn key={i} delay={i*0.1} className="bg-[#0B3D2E] p-8 rounded-sm relative group border border-[#D4B46A]/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-1 overflow-hidden">
                  <h3 className="text-xl font-serif text-[#FCFBF7] mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">{ws.title}</h3>
                  <p className="text-sm text-[#FCFBF7]/70 leading-relaxed transition-colors duration-300">{ws.desc}</p>
                </FadeIn>
             ))}
           </div>
           
           <FadeIn delay={0.4} className="flex justify-center flex-col sm:flex-row flex-wrap gap-4">
             <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
               Book Free Session
             </a>
             <button className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-sm hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
               Learn More
             </button>
           </FadeIn>
        </div>
      </section>

      {/* --- WHO WE SERVE --- */}
      <section className="py-24 bg-[#0B3D2E] relative border-t border-[#D4B46A]/10 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#D4B46A]/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none block z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Who We Serve</h2>
             <p className="text-[#FCFBF7]/70 mb-10 leading-relaxed text-lg">We partner with individuals and families who are serious about their financial future but lack the time or expertise to manage complex strategies alone.</p>
             
             <ul className="space-y-6">
                {[
                  { title: 'Growing Families', desc: 'Seeking robust wealth protection and education planning to secure their children\'s future.' },
                  { title: 'Professionals & Entrepreneurs', desc: 'Needing tax-efficient wealth accumulation and strategic business succession planning.' },
                  { title: 'Pre-Retirees', desc: 'Looking to transition safely from wealth accumulation to reliable income generation.' }
                ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 p-6 bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm hover:border-[#D4B46A]/40 transition-all shadow-md">
                      <CheckCircle2 size={24} className="text-[#D4B46A] shrink-0 mt-1" />
                      <div>
                         <h4 className="text-[#FCFBF7] font-serif font-bold text-lg mb-2">{item.title}</h4>
                         <p className="text-[#FCFBF7]/70 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </li>
                ))}
             </ul>
          </FadeIn>
          <FadeIn delay={0.2} className="relative w-full flex items-center">
             <div className="absolute -inset-4 border border-[#D4B46A]/10 rounded-sm pointer-events-none z-0 transform translate-x-4 translate-y-4 hidden lg:block"></div>
             <div className="relative w-full aspect-[2/1] rounded-sm border border-[#D4B46A]/20 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] group z-10">
                <div className="absolute inset-0 bg-[#D4B46A]/10 z-10 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                <img 
                  src="https://www.1life.co.za/globalassets/blog/2026/04/legacy-clients.jpg?width=1240&height=620&quality=80" 
                  alt="Professional Advisory" 
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 scale-[1.05] group-hover:scale-100" 
                />
             </div>
          </FadeIn>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-[#FCFBF7] relative border-t border-[#D4B46A]/20">
         <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-[#0B3D2E] mb-6">Client Experiences</h2>
              <div className="w-20 h-1 bg-[#D4B46A] mx-auto"></div>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah & James M.', text: 'For the first time, we finally feel financially organized and confident about our future. Harmann simplified everything.' },
                { name: 'David L.', text: 'The clarity I gained after just one session was incredible. I finally understand where my money is going.' },
                { name: 'The Patel Family', text: 'Harmann genuinely cares about our family\'s security. The peace of mind he provided is priceless.' }
              ].map((test, i) => (
                <FadeIn key={i} delay={i*0.1} className="bg-[#F2E6B3] border border-[#D4B46A]/20 p-10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative pt-12 text-[#4A4A4A]">
                   <div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-[#F2E6B3] border border-[#D4B46A]/30 text-[#D4B46A] rounded-full flex items-center justify-center shadow-lg">
                      <Quote size={24} fill="currentColor" />
                   </div>
                   <p className="text-[#4A4A4A] italic leading-relaxed mb-6 font-serif text-lg">"{test.text}"</p>
                   <p className="text-[#D4B46A] font-bold text-sm uppercase tracking-widest">— {test.name}</p>
                </FadeIn>
              ))}
            </div>
         </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4B46A]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none block z-0"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Frequently Asked Questions</h2>
            <p className="text-[#FCFBF7]/70 text-lg">Clear answers to help you feel confident about your next steps.</p>
          </FadeIn>
          
          <div className="border-t border-[#D4B46A]/10">
            {FAQS.map((faq, i) => (
               <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- DUAL CTA --- */}
      <section className="py-32 hero-bg relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#FCFBF7] mb-12 leading-tight">Your Financial Future<br/>Deserves More Than Guesswork.</h2>
             <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 flex-wrap">
               <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                 Book Free Session <ArrowRight size={20} />
               </a>
               <a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                 Become A Business Partner <Users size={20} />
               </a>
               <a href="tel:+12505036992" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                 <Phone size={20} /> Call Now
               </a>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Let's Build Your Plan</h2>
            <p className="text-[#FCFBF7]/70 text-lg mb-12 leading-relaxed max-w-lg">Schedule a complimentary, no-obligation consultation to discover how we can align your finances with your life goals.</p>
            
            <div className="space-y-8 mb-12">
              <a href="tel:+12505036992" className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-[#0B3D2E] border border-[#D4B46A]/20 text-[#D4B46A] rounded-full flex items-center justify-center group-hover:bg-[#D4B46A] group-hover:text-[#0B3D2E] transition-colors shadow-sm">
                   <Phone size={24} />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-[#FCFBF7]/70 mb-1">Call Directly</p>
                   <p className="text-[#FCFBF7] text-xl font-medium">+1 (250)-503-6992</p>
                 </div>
              </a>
              <a href="mailto:itsharmanngill@gmail.com" className="flex items-center gap-6 group">
                 <div className="w-14 h-14 bg-[#0B3D2E] border border-[#D4B46A]/20 text-[#D4B46A] rounded-full flex items-center justify-center group-hover:bg-[#D4B46A] group-hover:text-[#0B3D2E] transition-colors shadow-sm">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-[#FCFBF7]/70 mb-1">Email Us</p>
                   <p className="text-[#FCFBF7] text-xl font-medium">itsharmanngill@gmail.com</p>
                 </div>
              </a>
            </div>

            <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
               <Calendar size={20} className="shrink-0" /> Book Free Session
            </a>
          </FadeIn>
          
          <FadeIn delay={0.2} className="bg-[#0B3D2E] p-10 md:p-12 rounded-sm border border-[#D4B46A]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
             <h3 className="text-2xl font-serif text-[#FCFBF7] mb-8">Send a Message</h3>
             <ContactForm />
          </FadeIn>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0B3D2E] font-serif relative">
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4B46A]/30 to-transparent"></div>
         <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <p className="text-3xl font-serif font-bold text-[#FCFBF7] mb-2">Harmann Gill</p>
              <p className="text-xs font-bold tracking-widest uppercase text-[#D4B46A] mb-6">Wealth Consultant</p>
              <p className="text-sm text-[#FCFBF7]/70 font-light leading-relaxed mb-6">
                Empowering families with clarity, confidence, and absolute trust for their financial future. Building tailored blueprints that stand the test of time.
              </p>
            </div>
            
            <div>
               <h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">Quick Links</h4>
               <ul className="space-y-4">
                 {navLinks.map((link) => (
                   <li key={link.label}>
                     <a href={link.href} className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm">{link.label}</a>
                   </li>
                 ))}
               </ul>
            </div>

            <div>
               <h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">Contact</h4>
               <ul className="space-y-4">
                 <li>
                   <a href="tel:+12505036992" className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm flex items-center gap-3">
                     <Phone size={16} className="text-[#D4B46A]" /> +1 (250)-503-6992
                   </a>
                 </li>
                 <li>
                   <a href="mailto:itsharmanngill@gmail.com" className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm flex items-center gap-3">
                     <Mail size={16} className="text-[#D4B46A]" /> itsharmanngill@gmail.com
                   </a>
                 </li>
                 <li>
                   <span className="text-[#FCFBF7]/70 text-sm flex items-center gap-3 cursor-default">
                     <Calendar size={16} className="text-[#D4B46A]" /> Serving Clients Nationwide
                   </span>
                 </li>
               </ul>
            </div>

            <div>
               <h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">Start Your Journey</h4>
               <p className="text-[#FCFBF7]/70 text-sm leading-relaxed mb-6">
                 Schedule a complimentary discovery call to see if our services fit your needs.
               </p>
               <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
                 Book Free Session
               </a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-6 py-6 border-t border-[#D4B46A]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FCFBF7]/70 text-center md:text-left">
           <p>&copy; {new Date().getFullYear()} Harmann Gill. All rights reserved.</p>
           <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <button onClick={() => setPrivacyPolicyOpen(true)} className="hover:text-[#D4B46A] transition-colors">Privacy Policy</button>
              <button onClick={() => setTermsOfServiceOpen(true)} className="hover:text-[#D4B46A] transition-colors">Terms of Service</button>
           </div>
         </div>
      </footer>

      {/* --- WHATSAPP BUTTON --- */}
      <a 
        href="https://wa.me/12505036992" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-[#FCFBF7] p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 md:bottom-8 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-8 h-8 md:w-9 md:h-9 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <div className="absolute -left-36 top-1/2 -translate-y-1/2 bg-white text-[#0B3D2E] text-sm font-bold px-4 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
           Chat with us
        </div>
      </a>

      {/* --- FLOATING MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B3D2E] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-[#D4B46A]/10 p-3 flex gap-3 md:hidden">
         <a href="tel:+12505036992" className="inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
           <Phone size={18} /> Call
         </a>
         <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center">
           Book Free Session <ArrowRight size={18} />
         </a>
      </div>

      {/* --- CTA MODAL --- */}
      <AnimatePresence>
        {ctaModalOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setCtaModalOpen(false)}
                className="absolute inset-0 bg-[#0B3D2E]/90 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm shadow-2xl relative w-full max-w-3xl overflow-hidden z-10"
              >
                 <button onClick={() => setCtaModalOpen(false)} className="absolute top-4 right-4 text-[#FCFBF7] hover:text-[#D4B46A] transition-colors p-2 bg-[#0B3D2E] rounded-full z-20 shadow-sm border border-[#D4B46A]/10">
                    <X size={20} />
                 </button>
                 
                 <div className="p-6 md:p-10 text-center border-b border-[#D4B46A]/10 bg-[#0B3D2E]">
                   <h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] mb-3 pr-8 md:pr-0">How would you like to proceed?</h3>
                   <p className="text-[#FCFBF7]/70 text-[15px]">Select the path that best aligns with your goals today.</p>
                 </div>
                 
                 <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/10 max-h-[60vh] overflow-y-auto md:max-h-none md:overflow-visible">
                    <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="p-8 md:p-12 text-center hover:bg-[#0B3D2E] transition-colors group relative overflow-hidden">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B3D2E] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-[#D4B46A] group-hover:scale-110 group-hover:bg-[#D4B46A] transition-all duration-500">
                          <CheckCircle2 size={30} className="md:w-9 md:h-9 group-hover:text-[#0B3D2E]" />
                       </div>
                       <h4 className="text-xl md:text-2xl font-serif text-[#FCFBF7] mb-3 md:mb-4 font-semibold">Book Free Session</h4>
                       <p className="text-xs md:text-sm text-[#FCFBF7]/70 mb-6 md:mb-8 leading-relaxed max-w-[250px] mx-auto">Schedule your free consultation to build your personal financial blueprint.</p>
                       <span className="inline-flex items-center gap-2 text-[#D4B46A] font-bold uppercase tracking-wider text-[10px] md:text-xs group-hover:text-[#D4B46A]-hover">
                         Book Free Session <ArrowRight size={14} className="md:w-4 md:h-4" />
                       </span>
                    </a>
                    <a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="p-8 md:p-12 text-center hover:bg-[#0B3D2E] transition-colors group relative overflow-hidden">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0B3D2E] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-[#D4B46A] group-hover:scale-110 group-hover:bg-[#D4B46A] transition-all duration-500">
                          <Users size={30} className="md:w-9 md:h-9 group-hover:text-[#0B3D2E]" />
                       </div>
                       <h4 className="text-xl md:text-2xl font-serif text-[#FCFBF7] mb-3 md:mb-4 font-semibold">Become A Partner</h4>
                       <p className="text-xs md:text-sm text-[#FCFBF7]/70 mb-6 md:mb-8 leading-relaxed max-w-[250px] mx-auto">Start your journey as an independent wealth consultant with elite mentorship.</p>
                       <span className="inline-flex items-center gap-2 text-[#D4B46A] font-bold uppercase tracking-wider text-[10px] md:text-xs group-hover:text-[#D4B46A]-hover">
                         Explore Opportunity <ArrowRight size={14} className="md:w-4 md:h-4" />
                       </span>
                    </a>
                 </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>

      {/* --- PRIVACY POLICY MODAL --- */}
      <AnimatePresence>
        {privacyPolicyOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
             <motion.div
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setPrivacyPolicyOpen(false)}
               className="absolute inset-0 bg-[#0B3D2E]/90 backdrop-blur-sm"
             />
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm shadow-2xl relative w-full max-w-4xl overflow-hidden z-20 flex flex-col max-h-[90vh]"
              >
                 <button onClick={() => setPrivacyPolicyOpen(false)} className="absolute top-4 right-4 text-[#FCFBF7] hover:text-[#D4B46A] transition-colors p-2 bg-[#0B3D2E] rounded-full z-30 shadow-sm border border-[#D4B46A]/10">
                    <X size={20} />
                 </button>
                 
                 <div className="p-8 border-b border-[#D4B46A]/10 bg-[#0B3D2E] flex-shrink-0">
                   <h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] mb-2 text-center">Privacy Policy</h3>
                   <p className="text-[#D4B46A] text-xs font-bold uppercase tracking-widest text-center">World Financial Group (WFG) Independent Agent</p>
                 </div>
                 
                 <div className="p-8 overflow-y-auto text-[#FCFBF7]/70 leading-relaxed prose prose-invert mx-auto w-full text-[15px]">
                    <p className="mb-6">As an independent associate of World Financial Group (WFG), I am committed to maintaining the confidentiality, integrity, and security of personal information about our current and prospective clients. We are proud of our privacy practices and want you to know how we protect this information and use it to service your account.</p>
                    <p className="mb-4"><strong>1. Information We Collect:</strong> We collect nonpublic personal information about you from the following sources:</p>
                    <ul className="mb-6 list-disc pl-5 space-y-2">
                       <li>Information we receive from you on applications or other forms (such as your name, address, social security number, assets, and income).</li>
                       <li>Information about your transactions with us, our affiliates, or others.</li>
                       <li>Information we receive from a consumer reporting agency.</li>
                    </ul>
                    <p className="mb-6"><strong>2. Information We Disclose:</strong> We do not disclose any nonpublic personal information about our customers or former customers to anyone, except as permitted by law. We may disclose all of the information we collect to companies that perform marketing services on our behalf or to other financial institutions with whom we have joint marketing agreements.</p>
                    <p className="mb-6"><strong>3. Protection of Information:</strong> We restrict access to nonpublic personal information about you to those employees who need to know that information to provide products or services to you. We maintain physical, electronic, and procedural safeguards that comply with federal standards to guard your nonpublic personal information.</p>
                    <p><strong>4. Changes to This Privacy Policy:</strong> We may amend this Privacy Policy at any time. We will notify you of any changes if required by law.</p>
                 </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- TERMS OF SERVICE MODAL --- */}
      <AnimatePresence>
        {termsOfServiceOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
             <motion.div
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setTermsOfServiceOpen(false)}
               className="absolute inset-0 bg-[#0B3D2E]/90 backdrop-blur-sm"
             />
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm shadow-2xl relative w-full max-w-4xl overflow-hidden z-20 flex flex-col max-h-[90vh]"
              >
                 <button onClick={() => setTermsOfServiceOpen(false)} className="absolute top-4 right-4 text-[#FCFBF7] hover:text-[#D4B46A] transition-colors p-2 bg-[#0B3D2E] rounded-full z-30 shadow-sm border border-[#D4B46A]/10">
                    <X size={20} />
                 </button>
                 
                 <div className="p-8 border-b border-[#D4B46A]/10 bg-[#0B3D2E] flex-shrink-0">
                   <h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] mb-2 text-center">Terms of Service</h3>
                   <p className="text-[#D4B46A] text-xs font-bold uppercase tracking-widest text-center">World Financial Group (WFG) Independent Agent</p>
                 </div>
                 
                 <div className="p-8 overflow-y-auto text-[#FCFBF7]/70 leading-relaxed prose prose-invert mx-auto w-full text-[15px]">
                    <p className="mb-6">Welcome to Harmann Gill's website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.</p>
                    
                    <p className="mb-4"><strong>1. Independence and Affiliation:</strong> Harmann Gill is an independent associate of World Financial Group (WFG). The views, information, and opinions expressed on this website are solely those of the individual associate and do not necessarily represent those of WFG or its affiliated companies. This website is not intended to be a substitute for professional legal, tax, or specific financial advice.</p>
                    
                    <p className="mb-4"><strong>2. Information and Content:</strong> The content provided on this website is for general informational purposes only. Information is provided “as is” without any representations or warranties, express or implied. We make no representations or warranties in relation to the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                    
                    <p className="mb-4"><strong>3. Financial Products and Services:</strong> Any references to financial products or services are for illustrative purposes and do not constitute an offer to sell or a solicitation to buy any specific product or service. All products and services are subject to the terms and conditions of the applicable agreements and regulations. Eligibility for particular products and services is subject to final determination by the respective providers.</p>
                    
                    <p className="mb-4"><strong>4. No Client Relationship:</strong> Your use of this website, including establishing contact through any forms or booking links provided, does not create a client relationship between you and Harmann Gill or WFG until a formal written agreement has been executed.</p>

                    <p className="mb-4"><strong>5. Third-Party Links:</strong> Through this website, you may be able to link to other websites which are not under the control of Harmann Gill. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>

                    <p className="mb-4"><strong>6. Limitation of Liability:</strong> In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                    
                    <p><strong>7. Jurisdiction:</strong> Any dispute arising out of use of the website is subject to the laws of the jurisdiction in which Harmann Gill is licensed and operates, and applicable federal regulations.</p>
                 </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MOBILE NAV MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setMobileMenuOpen(false)}
               className="absolute inset-0 bg-[#0B3D2E]/90 backdrop-blur-md"
             />
             <motion.div
               initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "tween", duration: 0.3 }}
               className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0B3D2E] shadow-2xl flex flex-col border-l border-[#D4B46A]/10"
             >
                <div className="p-6 flex justify-between items-center border-b border-[#D4B46A]/10 bg-[#0B3D2E]">
                   <span className="text-xl font-serif font-bold text-[#FCFBF7]">Menu</span>
                   <button onClick={() => setMobileMenuOpen(false)} className="text-[#FCFBF7] hover:text-[#D4B46A] p-2 bg-[#0B3D2E] rounded-full shadow-sm border border-[#D4B46A]/10">
                      <X size={20} />
                   </button>
                </div>
                <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
                   {navLinks.map((link, i) => (
                     <a key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-[#FCFBF7] hover:text-[#D4B46A] transition-colors pb-4 border-b border-[#D4B46A]/5">
                        {link.label}
                     </a>
                   ))}
                </div>
                <div className="p-6 bg-[#0B3D2E] mt-auto border-t border-[#D4B46A]/10 pb-24">
                   <a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full mb-3 text-center disabled:opacity-70 flex-1">
                     Book Free Session <ArrowRight size={18} />
                   </a>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
