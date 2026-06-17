const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Section 3: Services
code = code.replace(/id="services" className="py-24 bg-\[\#F2E6B3\] border-t border-\[\#D4B46A\]\/20 relative"/, 'id="services" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/10 relative"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-4">Premium Services<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-4">Premium Services</h2>');

// Fine-tune the map inside Services
const servicesBlockRegex = /<FadeIn key=\{i\} delay=\{i \* 0\.1\} className=\{`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start \$\{svc\.gold \? 'bg-\[\#FCFBF7\][^`]+`\}>/;
code = code.replace(servicesBlockRegex, `<FadeIn key={i} delay={i * 0.1} className={\`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start \${svc.gold ? 'bg-[#F2E6B3] border border-[#D4B46A]/40 shadow-[0_15px_40px_rgba(212,180,106,0.15)] hover:-translate-y-2 relative overflow-hidden' : 'bg-[#0B3D2E] shrink-0 snap-center w-[300px] md:w-auto p-8 rounded-sm relative group border border-[#D4B46A]/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-1 overflow-hidden'}\`}>`);

code = code.replace(/<h3 className=\{`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 \$\{svc\.gold \? 'text-\[\#D4B46A\]' : 'text-\[\#0B3D2E\]'\}`\}>\{svc\.title\}<\/h3>/, '<h3 className={`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 ${svc.gold ? \'text-[#D4B46A]\' : \'text-[#FCFBF7]\'}`}>{svc.title}</h3>');
code = code.replace(/<p className=\{`relative z-10 leading-relaxed text-\[15px\] \$\{svc\.gold \? 'text-\[\#0B3D2E\]\/90 mb-8' : 'text-\[\#4A4A4A\]'\}`\}>\{svc\.desc\}<\/p>/, '<p className={`relative z-10 leading-relaxed text-[15px] ${svc.gold ? \'text-[#0B3D2E]/90 mb-8\' : \'text-[#FCFBF7]/70\'}`}>{svc.desc}</p>');

// Section 6: Why Partner With Harmann
code = code.replace(/<section className="py-24 bg-\[\#FCFBF7\] border-t border-\[\#D4B46A\]\/20">/, '<section className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/10">');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Why Partner With Harmann\?<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Why Partner With Harmann?</h2>');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 mb-10 leading-relaxed text-lg">We don\'t just offer advice/g, '<p className="text-[#FCFBF7]/70 mb-10 leading-relaxed text-lg">We don\'t just offer advice');
code = code.replace(/<div className="space-y-6 text-\[\#FCFBF7\]\/70 leading-relaxed text-\[16px\]">/g, '<div className="space-y-6 text-[#FCFBF7]/70 leading-relaxed text-[16px]">');

// Section 8: Workshops
code = code.replace(/id="workshops" className="py-24 bg-\[\#FCFBF7\] text-\[\#0B3D2E\] relative overflow-hidden"/, 'id="workshops" className="py-24 bg-[#0B3D2E] text-[#FCFBF7] relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#0B3D2E\] mb-6">Workshops & Seminars<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Workshops & Seminars</h2>');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">Empowering our community/, '<p className="text-[#FCFBF7]/70 text-lg">Empowering our community');
code = code.replace(/className="bg-\[\#0B3D2E\] p-8 rounded-sm relative group border border-\[\#D4B46A\]\/20 transition-all duration-300 shadow-\[0_8px_30px_rgb\(0,0,0,0\.04\)\] hover:shadow-\[0_10px_40px_rgba\(212,180,106,0\.15\)\] hover:border-\[\#D4B46A\]\/40 hover:-translate-y-1 overflow-hidden"/g, 'className="bg-[#0B3D2E] p-8 rounded-sm relative group border border-[#D4B46A]/20 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(212,180,106,0.15)] hover:border-[#D4B46A]/40 hover:-translate-y-1 overflow-hidden"');
// Inside workshops maps
code = code.replace(/<h3 className="text-xl font-serif text-\[\#FCFBF7\] mb-4 group-hover:text-\[\#D4B46A\] transition-colors duration-300">\{ws\.title\}<\/h3>/g, '<h3 className="text-xl font-serif text-[#FCFBF7] mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">{ws.title}</h3>');
code = code.replace(/<p className="text-sm text-\[\#FCFBF7\]\/70 leading-relaxed transition-colors duration-300">\{ws\.desc\}<\/p>/g, '<p className="text-sm text-[#FCFBF7]/70 leading-relaxed transition-colors duration-300">{ws.desc}</p>');

// Section 11: FAQ
code = code.replace(/id="faq" className="py-24 bg-\[\#0B3D2E\] border-t border-\[\#D4B46A\]\/20 relative overflow-hidden"/, 'id="faq" className="py-24 bg-[#0B3D2E] border-t border-[#D4B46A]/10 relative overflow-hidden"');
code = code.replace(/<h2 className="text-3xl md:text-5xl font-serif text-\[\#FCFBF7\] mb-6">Frequently Asked Questions<\/h2>/, '<h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF7] mb-6">Frequently Asked Questions</h2>');
code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">Clear answers/g, '<p className="text-[#FCFBF7]/70 text-lg">Clear answers');
// FAQ Accordion items
code = code.replace(/className="w-full text-justify py-6 md:py-8 flex justify-between items-start md:items-center gap-6 group"/g, 'className="w-full text-justify py-6 md:py-8 flex justify-between items-start md:items-center gap-6 group"');
code = code.replace(/<span className="text-lg md:text-xl font-serif font-semibold text-\[\#FCFBF7\] group-hover:text-\[\#D4B46A\] transition-colors text-left">\{faq\.q\}<\/span>/g, '<span className="text-lg md:text-xl font-serif font-semibold text-[#FCFBF7] group-hover:text-[#D4B46A] transition-colors text-left">{faq.q}</span>');
code = code.replace(/<div className="pb-8 md:pl-\[84px\] text-\[\#FCFBF7\]\/70 leading-relaxed text-lg max-w-3xl">\{faq\.a\}<\/div>/g, '<div className="pb-8 md:pl-[84px] text-[#FCFBF7]/70 leading-relaxed text-lg max-w-3xl">{faq.a}</div>');


// Footer
code = code.replace(/<footer className="bg-\[\#FCFBF7\] font-serif relative">/, '<footer className="bg-[#0B3D2E] font-serif relative">');
code = code.replace(/<p className="text-3xl font-serif font-bold text-\[\#FCFBF7\] mb-2">Harmann Gill<\/p>/, '<p className="text-3xl font-serif font-bold text-[#FCFBF7] mb-2">Harmann Gill</p>');
code = code.replace(/<p className="text-sm text-\[\#4A4A4A\] font-light leading-relaxed mb-6">/g, '<p className="text-sm text-[#FCFBF7]/70 font-light leading-relaxed mb-6">');
code = code.replace(/<h4 className="text-\[\#0B3D2E\] font-bold tracking-wider uppercase text-sm mb-6">/g, '<h4 className="text-[#FCFBF7] font-bold tracking-wider uppercase text-sm mb-6">');


fs.writeFileSync('src/App.tsx', code);
