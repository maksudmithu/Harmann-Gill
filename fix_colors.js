const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Section 3: Services
code = code.replace(/id="services" className="py-24 bg-\[\#F2E6B3\] border-t border-\[\#D4B46A\]\/20 relative"/g, 'id="services" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-4">Premium Services<\/h2>/g, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-4">Premium Services</h2>');
// Replace the map
code = code.replace(/bg-\[\#FCFBF7\] shrink-0 snap-center w-\[300px\] md:w-auto/g, 'bg-[#FCFBF7] shrink-0 snap-center w-[300px] md:w-auto'); 

// Section 6: Why Partner With Harmann bg-[#FCFBF7] -> Forest Green
code = code.replace(/className="py-24 bg-\[\#FCFBF7\] border-t border-\[\#D4B46A\]\/20">/g, 'className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20">');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Why Partner With Harmann\?<\/h2>/g, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Why Partner With Harmann?</h2>');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 mb-10 leading-relaxed text-lg">We don\'t just/g, '<p className="text-[#FCFBF7]/70 mb-10 leading-relaxed text-lg">We don\'t just');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#0B3D2E\] mb-2">/g, '<h3 className="text-xl font-serif text-[#FCFBF7] mb-2">');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 leading-relaxed">/g, '<p className="text-[#FCFBF7]/70 leading-relaxed">');
code = code.replace(/<div className="space-y-6 text-\[\#FCFBF7\]\/70 leading-relaxed text-\[16px\]">/g, '<div className="space-y-6 text-[#FCFBF7]/70 leading-relaxed text-[16px]">');
code = code.replace(/<div className="space-y-6 text-\[\#4A4A4A\] leading-relaxed text-\[16px\]">/g, '<div className="space-y-6 text-[#FCFBF7]/70 leading-relaxed text-[16px]">');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#FCFBF7\] mb-2">/g, '<h3 className="text-xl font-serif text-[#FCFBF7] mb-2">');

// Section 7: Beyond the Numbers bg-[#F2E6B3] Butter Beige (Correct)
// Headings #0B3D2E, text #4A4A4A (Should be correct)

// Section 8: Workshops bg-[#FCFBF7] -> Forest Green
code = code.replace(/id="workshops" className="py-24 bg-\[\#FCFBF7\] text-\[\#0B3D2E\] relative overflow-hidden"/g, 'id="workshops" className="py-24 bg-[#0B3D2E] text-[#FCFBF7] relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Workshops & Seminars<\/h2>/g, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Workshops & Seminars</h2>');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">Empowering our/g, '<p className="text-[#FCFBF7]/70 text-lg">Empowering our');
// Its cards bg-[#F2E6B3] -> let's make them Butter Beige with #4A4A4A text
code = code.replace(/className="bg-\[\#F2E6B3\] p-8 rounded-sm relative group border border-\[\#D4B46A\]\/20 transition-all duration-300 shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] hover:shadow-\[0_10px_40px_rgba\(212,180,106,0\.15\)\] hover:border-\[\#D4B46A\]\/40 hover:-translate-y-1 overflow-hidden"/g, 'className="bg-[#F2E6B3] text-[#4A4A4A] p-8 rounded-sm relative group border border-[#D4B46A]/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-1 overflow-hidden"');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#0B3D2E\] mb-4 group-hover:text-\[\#D4B46A\] transition-colors duration-300">/g, '<h3 className="text-xl font-serif text-[#0B3D2E] mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] leading-relaxed transition-colors duration-300">/g, '<p className="text-sm text-[#4A4A4A] leading-relaxed transition-colors duration-300">');
code = code.replace(/<h3 className="text-xl font-serif text-\[\#FCFBF7\] mb-4 group-hover:text-\[\#D4B46A\] transition-colors duration-300">/g, '<h3 className="text-xl font-serif text-[#0B3D2E] mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">');
code = code.replace(/<p className="text-sm text-\[\#FCFBF7\]\/70 leading-relaxed transition-colors duration-300">/g, '<p className="text-sm text-[#4A4A4A] leading-relaxed transition-colors duration-300">');


// Section 11: FAQ bg-[#F2E6B3] -> Forest Green
code = code.replace(/id="faq" className="py-24 bg-\[\#F2E6B3\] border-t border-\[\#D4B46A\]\/20 relative overflow-hidden"/g, 'id="faq" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/20 relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#FCFBF7\] mb-6">Frequently/g, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Frequently');
code = code.replace(/<span className="text-lg md:text-xl font-serif font-semibold text-\[\#FCFBF7\] group-hover:text-\[\#D4B46A\] transition-colors text-left">/g, '<span className="text-lg md:text-xl font-serif font-semibold text-[#FCFBF7] group-hover:text-[#D4B46A] transition-colors text-left">');

// Footer bg-[#FCFBF7] -> Forest Green
code = code.replace(/<footer className="bg-\[\#FCFBF7\] font-serif relative">/g, '<footer className="bg-[#0B3D2E] font-serif relative">');
code = code.replace(/<p className="text-3xl font-serif font-bold text-\[\#0B3D2E\] mb-2">Harmann Gill<\/p>/g, '<p className="text-3xl font-serif font-bold text-[#FCFBF7] mb-2">Harmann Gill</p>');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] font-light leading-relaxed mb-6">/g, '<p className="text-sm text-[#FCFBF7]/70 font-light leading-relaxed mb-6">');
code = code.replace(/<h4 className="text-\[\#0B3D2E\] font-bold tracking-wider uppercase text-sm mb-6">/g, '<h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">');
code = code.replace(/<a href=\{link\.href\} className="text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] transition-colors text-sm">\{link\.label\}<\/a>/g, '<a href={link.href} className="text-[#FCFBF7]/70 hover:text-[#D4B46A] transition-colors text-sm">{link.label}</a>');
code = code.replace(/<p className="text-sm text-\[\#FCFBF7\]\/70 font-light leading-relaxed mb-6">/g, '<p className="text-sm text-[#FCFBF7]/70 font-light leading-relaxed mb-6">');


// Replaces previously wrong texts:
code = code.replace(/text-forest/g, 'text-[#0B3D2E]');
code = code.replace(/bg-forest/g, 'bg-[#0B3D2E]');

// Revert left justify stuff
code = code.replace(/text-justify/g, 'text-center');
code = code.replace(/text-center md:text-center/g, 'text-center md:text-left');
code = code.replace(/lg:items-start lg:text-center mt-10 lg:mt-0/g, 'lg:items-start lg:text-left mt-10 lg:mt-0');

fs.writeFileSync('src/App.tsx', code);
