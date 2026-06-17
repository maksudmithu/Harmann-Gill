const fs = require('fs');

let code = fs.readFileSync('/tmp/App.tsx.bak', 'utf-8');

// I am directly applying ONLY color changes and matching EXACT classes or structure.

/*
Color Mapping:
Deep Forest Green: #0B3D2E (bg for most sections)
Muted Gold: #D4B46A (highlights, borders)
Butter Beige: #F2E6B3 (bg for 10% sections, like Services and Story)
Off-White: #FCFBF7 (bg for 10% sections, like Testimonials and Gap)
Slate Gray: #4A4A4A (text on light backgrounds)
*/

// Replace ALL bg-forest and text-forest with their respective hex
code = code.replace(/bg-forest/g, 'bg-[#0B3D2E]');
code = code.replace(/text-forest-dark/g, 'text-[#0B3D2E]'); // if it exists
code = code.replace(/text-forest/g, 'text-[#0B3D2E]');
code = code.replace(/border-forest/g, 'border-[#0B3D2E]');

// GAP Section (Already FCFBF7 in backup?)
// Let's verify GAP section in backup.
// Backup is my App_backup.tsx from beginning of this turn.
// In that file, GAP was #FCFBF7.
code = code.replace(/<section className="py-24 bg-\[\#FCFBF7\] text-\[\#4A4A4A\] relative">/, '<section className="py-24 bg-[#FCFBF7] text-[#4A4A4A] relative">');

// SERVICES Section -> It was F2E6B3. Let's change it to #0B3D2E!
code = code.replace(/id="services" className="py-24 bg-\[\#F2E6B3\] border-t border-\[\#D4B46A\]\/20 relative"/, 'id="services" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-4">Premium Services<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-4">Premium Services</h2>');
// Fix Services cards (they were FCFBF7). We make them bg-[#0B3D2E] border-[#D4B46A]/20
const mapBlock = /className=\{`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start[^`]+`\}/g;
code = code.replace(mapBlock, "className={`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start bg-[#0B3D2E] border border-[#D4B46A]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-2 relative overflow-hidden`}");
code = code.replace(/<h3 className=\{`relative z-10 text-xl font-serif mb-4 font-semibold flex-1[^}]+`\}>\{svc\.title\}<\/h3>/g, '<h3 className={`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 ${svc.gold ? \'text-[#D4B46A]\' : \'text-[#FCFBF7]\'}`}>{svc.title}</h3>');
code = code.replace(/<p className=\{`relative z-10 leading-relaxed text-\[15px\][^}]+`\}>\{svc\.desc\}<\/p>/g, '<p className={`relative z-10 leading-relaxed text-[15px] ${svc.gold ? \'text-[#D4B46A]/90 mb-8\' : \'text-[#FCFBF7]/70\'}`}>{svc.desc}</p>');
code = code.replace(/<div className=\{`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors \$\{svc\.gold \? 'bg-gradient-to-br from-gold to-\[\#bda15e\] text-\[\#4A4A4A\] shadow-lg' : 'bg-\[\#D4B46A\]\/10 text-\[\#D4B46A\] group-hover:bg-\[\#D4B46A\]\/20'\}`\}>/g, '<div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors ${svc.gold ? \'bg-[#D4B46A] text-[#0B3D2E] shadow-lg\' : \'bg-[#D4B46A]/10 text-[#D4B46A] group-hover:bg-[#D4B46A]/20\'}`}>');


// WHY PARTNER Section -> It was FCFBF7 text-[#4A4A4A]
code = code.replace(/<section className="py-24 bg-\[\#FCFBF7\] border-t border-\[\#D4B46A\]\/20">/, '<section className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20">');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Why Partner With Harmann\?<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Why Partner With Harmann?</h2>');
code = code.replace(/<p className="text-\[\#4A4A4A\] mb-10 leading-relaxed text-lg">We don't just/g, '<p className="text-[#FCFBF7]/70 mb-10 leading-relaxed text-lg">We don\'t just');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#0B3D2E\] mb-2">/g, '<h3 className="text-xl font-serif text-[#FCFBF7] mb-2">');
code = code.replace(/<div className="space-y-6 text-\[\#4A4A4A\] leading-relaxed text-\[16px\]">/g, '<div className="space-y-6 text-[#FCFBF7]/70 leading-relaxed text-[16px]">');
code = code.replace(/<p className="text-\[\#4A4A4A\] leading-relaxed">/g, '<p className="text-[#FCFBF7]/70 leading-relaxed">');
code = code.replace(/<FadeIn delay=\{0\.2\} className="relative h-full min-h-\[400px\] bg-\[\#FCFBF7\] border border-\[\#D4B46A\]\/20 p-10 flex flex-col justify-center border-l-4 border-\[\#D4B46A\] rounded-sm">/g, '<FadeIn delay={0.2} className="relative h-full min-h-[400px] bg-[#0B3D2E] border border-[#D4B46A]/20 p-10 flex flex-col justify-center border-l-4 border-[#D4B46A] rounded-sm shadow-xl">');
code = code.replace(/<h3 className="text-2xl md:text-3xl font-serif text-\[\#0B3D2E\] leading-snug mb-6">/g, '<h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] leading-snug mb-6">');
code = code.replace(/<p className="font-serif text-\[\#0B3D2E\] font-bold">Harmann Gill<\/p>/g, '<p className="font-serif text-[#FCFBF7] font-bold">Harmann Gill</p>');

// BEYOND THE NUMBERS
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#FCFBF7\] mb-6">Beyond the Numbers<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#0B3D2E] mb-6">Beyond the Numbers</h2>');
code = code.replace(/<div className="space-y-6 text-\[\#FCFBF7\]\/70 leading-relaxed text-\[16px\] font-light">/, '<div className="space-y-6 text-[#4A4A4A] leading-relaxed text-[16px] font-light">');

// WORKSHOPS Section -> was FCFBF7 text-[#0B3D2E]
code = code.replace(/id="workshops" className="py-24 bg-\[\#FCFBF7\] text-\[\#0B3D2E\] relative overflow-hidden"/, 'id="workshops" className="py-24 bg-[#0B3D2E] text-[#FCFBF7] relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Workshops & Seminars<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Workshops & Seminars</h2>');
code = code.replace(/<p className="text-\[\#0B3D2E\]\/70 text-lg">Empowering our community/g, '<p className="text-[#FCFBF7]/70 text-lg">Empowering our community');
// The cards inside workshops
code = code.replace(/className="bg-\[\#F2E6B3\] p-8 rounded-sm relative group border border-\[\#D4B46A\]\/20 transition-all duration-300 shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] hover:shadow-\[0_10px_40px_rgba\(212,180,106,0\.15\)\] hover:border-\[\#D4B46A\]\/40 hover:-translate-y-1 overflow-hidden"/g, 'className="bg-[#0B3D2E] p-8 rounded-sm relative group border border-[#D4B46A]/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-1 overflow-hidden"');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#0B3D2E\] mb-4 group-hover:text-\[\#D4B46A\] transition-colors duration-300">/g, '<h3 className="text-xl font-serif text-[#FCFBF7] mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] leading-relaxed transition-colors duration-300">/g, '<p className="text-sm text-[#FCFBF7]/70 leading-relaxed transition-colors duration-300">');


// WHO WE SERVE -> Forest Green #0B3D2E (Correct)
// The items inside used to be bg-[#FCFBF7] border border-[#D4B46A]/10.
// Let's change them to bg-[#0B3D2E] border border-[#D4B46A]/20.
code = code.replace(/<li key=\{i\} className="flex items-start gap-4 p-6 bg-\[\#FCFBF7\] border border-\[\#D4B46A\]\/10 rounded-sm hover:border-\[\#D4B46A\]\/30 transition-colors">/g, '<li key={i} className="flex items-start gap-4 p-6 bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm hover:border-[#D4B46A]/40 transition-all shadow-md">');
code = code.replace(/<h3 className="text-lg font-serif text-\[\#0B3D2E\] mb-1 font-semibold">/g, '<h3 className="text-lg font-serif text-[#FCFBF7] mb-1 font-semibold">');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] leading-relaxed">/g, '<p className="text-sm text-[#FCFBF7]/70 leading-relaxed">');


// TESTIMONIALS -> Was FCFBF7. Correct. Let's make sure the cards are F2E6B3.
// Wait, the original in backup Testimonials had cards bg-[#FCFBF7] which blended.
// Let's make the cards bg-[#F2E6B3] Butter Beige.
code = code.replace(/<FadeIn key=\{i\} delay=\{i\*0\.1\} className="bg-\[\#FCFBF7\] border border-\[\#D4B46A\]\/10 p-10 rounded-sm shadow-sm relative pt-12">/g, '<FadeIn key={i} delay={i*0.1} className="bg-[#F2E6B3] border border-[#D4B46A]/20 p-10 rounded-sm shadow-md relative pt-12">');
code = code.replace(/<div className="absolute top-0 right-10 -translate-y-1\/2 w-14 h-14 bg-\[\#FCFBF7\] border border-\[\#D4B46A\]\/20 text-\[\#D4B46A\] rounded-full flex items-center justify-center shadow-lg">/g, '<div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-[#F2E6B3] border border-[#D4B46A]/20 text-[#D4B46A] rounded-full flex items-center justify-center shadow-lg">');
// The text inside testimonials
code = code.replace(/<p className="text-\[\#4A4A4A\] leading-relaxed flex-1 pt-6">/g, '<p className="text-[#4A4A4A] leading-relaxed flex-1 pt-6">');
code = code.replace(/<p className="font-serif text-\[\#0B3D2E\] font-bold mt-8">/g, '<p className="font-serif text-[#0B3D2E] font-bold mt-8">'); // already is this


// FAQ -> Was F2E6B3
code = code.replace(/id="faq" className="py-24 bg-\[\#F2E6B3\] border-t border-\[\#D4B46A\]\/20 relative overflow-hidden"/, 'id="faq" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Frequently Asked Questions<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Frequently Asked Questions</h2>');
code = code.replace(/<p className="text-\[\#4A4A4A\] text-lg">Clear answers/g, '<p className="text-[#FCFBF7]/70 text-lg">Clear answers');
code = code.replace(/<span className="text-lg md:text-xl font-serif font-semibold text-\[\#0B3D2E\] group-hover:text-\[\#D4B46A\] transition-colors text-left">/g, '<span className="text-lg md:text-xl font-serif font-semibold text-[#FCFBF7] group-hover:text-[#D4B46A] transition-colors text-left">');
code = code.replace(/<div className="pb-8 md:pl-\[84px\] text-\[\#4A4A4A\] leading-relaxed text-lg max-w-3xl">/g, '<div className="pb-8 md:pl-[84px] text-[#FCFBF7]/70 leading-relaxed text-lg max-w-3xl">');

// FOOTER -> Was FCFBF7
code = code.replace(/<footer className="bg-\[\#FCFBF7\] font-sans relative">/, '<footer className="bg-[#0B3D2E] font-serif relative">');
code = code.replace(/<p className="text-3xl font-serif font-bold text-\[\#0B3D2E\] mb-2">Harmann Gill<\/p>/, '<p className="text-3xl font-serif font-bold text-[#FCFBF7] mb-2">Harmann Gill</p>');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] font-light leading-relaxed mb-6">/g, '<p className="text-sm text-[#FCFBF7]/70 font-light leading-relaxed mb-6">');
code = code.replace(/<h4 className="text-\[\#0B3D2E\] font-bold tracking-wider uppercase text-sm mb-6">/g, '<h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">');
code = code.replace(/<a href=\{link\.href\} className="text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] transition-colors text-sm">/g, '<a href={link.href} className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm">');
code = code.replace(/<a href="tel:\+12505036992" className="text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] transition-colors text-sm flex items-center gap-3">/g, '<a href="tel:+12505036992" className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm flex items-center gap-3">');
code = code.replace(/<a href="mailto:itsharmanngill@gmail\.com" className="text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] transition-colors text-sm flex items-center gap-3">/g, '<a href="mailto:itsharmanngill@gmail.com" className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm flex items-center gap-3">');
code = code.replace(/<span className="text-\[\#4A4A4A\] text-sm flex items-center gap-3 cursor-default">/g, '<span className="text-[#FCFBF7]/70 text-sm flex items-center gap-3 cursor-default">');
code = code.replace(/<p className="text-\[\#4A4A4A\] text-sm leading-relaxed mb-6">/g, '<p className="text-[#FCFBF7]/70 text-sm leading-relaxed mb-6">');
code = code.replace(/<div className="max-w-7xl mx-auto px-6 py-6 border-t border-\[\#D4B46A\]\/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-\[\#4A4A4A\] text-left md:text-left">/g, '<div className="max-w-7xl mx-auto px-6 py-6 border-t border-[#D4B46A]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FCFBF7]/70 text-left md:text-left">');

// ALSO Need to apply button definitions everywhere exactly
const primaryBtnClass = "inline-flex items-center justify-center gap-2 bg-[#D4B46A] text-[#0B3D2E] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgba(212,180,106,0.39)] hover:shadow-[0_6px_20px_rgba(212,180,106,0.23)] hover:bg-[#c2a155] hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center";

const secondaryBtnClass = "inline-flex items-center justify-center gap-2 bg-transparent text-[#D4B46A] border border-[#D4B46A] px-8 py-4 rounded-sm font-serif font-bold tracking-wide transition-all hover:bg-[#D4B46A]/10 hover:-translate-y-1 uppercase text-sm w-full sm:w-auto text-center";

// Replace old buttons structure
code = code.replace(/<a href="https:\/\/calendly\.com\/harmankaursrealty\/45min" target="_blank" rel="noreferrer" className="[^"]*bg-\[\#D4B46A\][^"]*"/g, `<a href="https://calendly.com/harmankaursrealty/45min" target="_blank" rel="noreferrer" className="${primaryBtnClass}"`);
code = code.replace(/<a href="https:\/\/www\.jotform\.com\/260195787903468" target="_blank" rel="noreferrer" className="[^"]*bg-transparent[^"]*"/g, `<a href="https://www.jotform.com/260195787903468" target="_blank" rel="noreferrer" className="${secondaryBtnClass}"`);
// In some places tel: had transparent classes
code = code.replace(/<a href="tel:\+12505036992" className="[^"]*border-\[\#D4B46A\][^"]*"/g, `<a href="tel:+12505036992" className="${secondaryBtnClass}"`);

// Contact Section fixes
code = code.replace(/<FadeIn delay=\{0\.2\} className="bg-\[\#FCFBF7\] p-10 md:p-12 rounded-sm border border-\[\#D4B46A\]\/20 shadow-xl">/, '<FadeIn delay={0.2} className="bg-[#0B3D2E] p-10 md:p-12 rounded-sm border border-[#D4B46A]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">');
code = code.replace(/<h3 className="text-2xl font-serif text-\[\#0B3D2E\] mb-8">Send a Message<\/h3>/, '<h3 className="text-2xl font-serif text-[#FCFBF7] mb-8">Send a Message</h3>');
code = code.replace(/className="w-full bg-white border border-\[\#D4B46A\]\/40 text-\[\#0B3D2E\] placeholder:text-\[\#0B3D2E\]\/50 p-4 outline-none focus:border-\[\#D4B46A\] transition-colors rounded-sm disabled:opacity-50"/g, 'className="w-full bg-[#0B3D2E] border border-[#D4B46A]/40 text-[#FCFBF7] placeholder:text-[#FCFBF7]/50 p-4 outline-none focus:border-[#D4B46A] transition-colors rounded-sm disabled:opacity-50"');

// Submit button in contact form
code = code.replace(/<button type="submit" disabled=\{status === 'submitting'\} className="[^"]+"/g, `<button type="submit" disabled={status === 'submitting'} className="${primaryBtnClass.replace('w-full sm:w-auto', 'w-full')}"`);

// Modals
// Let's make modal background #0B3D2E
code = code.replace(/className="bg-\[\#FCFBF7\] border border-\[\#D4B46A\]\/20 rounded-sm shadow-2xl relative w-full max-w-3xl overflow-hidden z-10"/g, 'className="bg-[#0B3D2E] border border-[#D4B46A]/20 rounded-sm shadow-2xl relative w-full max-w-3xl overflow-hidden z-10"');
code = code.replace(/<div className="p-6 md:p-10 text-center border-b border-\[\#D4B46A\]\/10">/g, '<div className="p-6 md:p-10 text-center border-b border-[#D4B46A]/10 bg-[#0B3D2E]">');
code = code.replace(/<h3 className="text-2xl md:text-3xl font-serif text-\[\#0B3D2E\] mb-3 pr-8 md:pr-0">/g, '<h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] mb-3 pr-8 md:pr-0">');
code = code.replace(/<p className="text-\[\#4A4A4A\] text-\[15px\]">/g, '<p className="text-[#FCFBF7]/70 text-[15px]">');
code = code.replace(/className="bg-\[\#F2E6B3\] p-6 md:p-10 hover:bg-\[\#0B3D2E\]\/5 transition-colors group cursor-pointer relative overflow-hidden"/g, 'className="bg-[#0B3D2E] p-6 md:p-10 hover:bg-[#D4B46A]/10 transition-colors group cursor-pointer relative overflow-hidden"');
code = code.replace(/className="bg-white p-6 md:p-10 hover:bg-\[\#0B3D2E\]\/5 transition-colors group cursor-pointer relative overflow-hidden text-left"/g, 'className="bg-[#0B3D2E] p-6 md:p-10 hover:bg-[#D4B46A]/10 transition-colors group cursor-pointer relative overflow-hidden text-left"');
code = code.replace(/<h4 className="text-xl md:text-2xl font-serif text-\[\#0B3D2E\] mb-3 md:mb-4 font-semibold">/g, '<h4 className="text-xl md:text-2xl font-serif text-[#FCFBF7] mb-3 md:mb-4 font-semibold">');
code = code.replace(/<p className="text-xs md:text-sm text-\[\#4A4A4A\] mb-6 md:mb-8 leading-relaxed max-w-\[250px\] mx-auto">/g, '<p className="text-xs md:text-sm text-[#FCFBF7]/70 mb-6 md:mb-8 leading-relaxed max-w-[250px] mx-auto">');
code = code.replace(/<span className="inline-flex items-center gap-2 text-\[\#0B3D2E\] font-bold uppercase tracking-wider text-\[10px\] md:text-xs group-hover:text-\[\#D4B46A\]">/g, '<span className="inline-flex items-center gap-2 text-[#D4B46A] font-bold uppercase tracking-wider text-[10px] md:text-xs">');

fs.writeFileSync('src/App.tsx', code);
