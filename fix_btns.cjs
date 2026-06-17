const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');


const primaryBtnPattern = /className="[^"]*bg-\[\#D4B46A\] text-\[\#0B3D2E\][^"]*"/g;
const secondaryBtnPattern = /className="[^"]*bg-transparent text-\[\#D4B46A\] border border-\[\#D4B46A\][^"]*"/g;

const unifiedPrimary = 'inline-flex flex-1 items-center justify-center gap-3 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_8px_20px_rgba(212,180,106,0.25)] hover:shadow-[0_12px_25px_rgba(212,180,106,0.4)] hover:-translate-y-1 hover:bg-[#c2a155] w-full text-center disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_20px_rgba(212,180,106,0.25)]';

const unifiedSecondary = 'inline-flex flex-1 items-center justify-center gap-3 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_25px_rgba(212,180,106,0.2)] hover:-translate-y-1 hover:bg-[#D4B46A]/10 w-full text-center';

// For buttons with w-full sm:w-auto
const unifiedPrimarySmAuto = unifiedPrimary.replace('w-full text-center', 'w-full sm:w-auto text-center');
const unifiedSecondarySmAuto = unifiedSecondary.replace('w-full text-center', 'w-full sm:w-auto text-center');


// Find buttons explicitly to keep the structure
// Let's just do an iterative pass finding them. I will use regex on href or button with class names
code = code.replace(/<a href="https:\/\/calendly\.com\/harmankaursrealty\/45min" target="_blank" rel="noreferrer" className="[^"]*bg-\[\#D4B46A][^"]*"/g, '<a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="' + unifiedPrimarySmAuto + '"');

code = code.replace(/<a href="https:\/\/www\.jotform\.com\/260195787903468" target="_blank" rel="noreferrer" className="[^"]*bg-transparent text-\[\#D4B46A\] border border-\[\#D4B46A\][^"]*"/g, '<a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="' + unifiedSecondarySmAuto + '"');

code = code.replace(/<a href="tel:\+12505036992" className="[^"]*bg-transparent text-\[\#D4B46A\] border border-\[\#D4B46A\][^"]*"/g, '<a href="tel:+12505036992" className="' + unifiedSecondarySmAuto + '"');

// And submit buttons
code = code.replace(/<button type="submit" disabled=\{status === 'submitting'\} className="[^"]+"/g, '<button type="submit" disabled={status === \'submitting\'} className="' + unifiedPrimary + '"');

// And the CTA floating button
code = code.replace(/<button onClick=\{\(\) => setCtaModalOpen\(true\)\} className="[^"]+"/g, '<button onClick={() => setCtaModalOpen(true)} className="' + unifiedPrimarySmAuto + '"');

// Mobile CTA buttons in the fixed bottom panel
code = code.replace(/<a href="tel:\+12505036992" className="flex-1 [^"]+"/g, '<a href="tel:+12505036992" className="' + unifiedSecondary + ' flex-1 mx-2"'); 

code = code.replace(/<a href="https:\/\/calendly\.com\/harmankaursrealty\/45min" target="_blank" rel="noreferrer" className="flex-1 [^"]*bg-\[\#D4B46A\][^"]*"/g, '<a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="' + unifiedPrimary + ' flex-1 mx-2"');

// And the one inside the mobile menu
code = code.replace(/<a href="https:\/\/calendly\.com\/harmankaursrealty\/45min" target="_blank" rel="noreferrer" onClick=\{\(\) => setMobileMenuOpen\(false\)\} className="[^"]*bg-\[\#D4B46A\][^"]*"/g, '<a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="' + unifiedPrimary + ' mb-3"');


// Let's also unify ALL the cards
// "Every card on the website must use the exact same design system"
// Same border radius, shadow, spacing, hover animation, border treatment, internal padding
const unifiedCard = "p-10 rounded-sm relative border border-[#D4B46A]/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-2 overflow-hidden flex flex-col h-full";

// Replace services cards
code = code.replace(/className=\{`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start[^`]+`\}/g, `className={\`group \${svc.gold ? 'bg-[#F2E6B3] ' : 'bg-[#0B3D2E] '} ${unifiedCard}\`}`);

// Replace GAP cards: they use hardcoded classes currently: className="bg-[#FCFBF7] p-10 border border-[#D4B46A]/10 rounded-none shadow-sm hover:border-[#D4B46A]/30 transition-colors duration-500"
code = code.replace(/className="bg-\[\#FCFBF7\] p-10 border border-\[\#D4B46A\]\/10 rounded-none shadow-sm hover:border-\[\#D4B46A\]\/30 transition-colors duration-500"/g, `className="bg-[#FCFBF7] group ${unifiedCard}"`);

// Replace Workshop cards
code = code.replace(/className="bg-\[\#F2E6B3\] text-\[\#4A4A4A\] p-8 rounded-sm relative group border border-\[\#D4B46A\]\/20 transition-all duration-300 shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] hover:shadow-\[0_10px_40px_rgba\(212,180,106,0\.15\)\] hover:border-\[\#D4B46A\]\/40 hover:-translate-y-1 overflow-hidden"/g, `className="bg-[#F2E6B3] text-[#4A4A4A] group ${unifiedCard}"`);

// Replace Testimonial cards
code = code.replace(/className="bg-\[\#F2E6B3\] border border-\[\#D4B46A\]\/20 p-10 rounded-sm shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] relative pt-12 text-\[\#4A4A4A\]"/g, `className="bg-[#F2E6B3] text-[#4A4A4A] pt-12 group ${unifiedCard}"`);

// Write back
fs.writeFileSync('src/App.tsx', code);
