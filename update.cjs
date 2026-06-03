const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Section 3: SERVICES
content = content.replace(
  /className={\`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start \$\{svc\.gold \? 'bg-forest-dark border border-\[\#D4B46A\]\/40 shadow-\[0_15px_40px_rgba\(212,180,106,0\.15\)\] hover:-translate-y-2 relative overflow-hidden' : 'bg-forest-dark border border-\[\#D4B46A\]\/10 shadow-sm hover:border-\[\#D4B46A\]\/30 hover:-translate-y-2'\}\`}/g,
  "className={`p-10 rounded-sm transition-all duration-300 group flex flex-col items-start ${svc.gold ? 'bg-[#FCFBF7] border border-[#D4B46A]/40 shadow-[0_15px_40px_rgba(212,180,106,0.15)] hover:-translate-y-2 relative overflow-hidden' : 'bg-[#FCFBF7] border border-[#D4B46A]/10 shadow-sm hover:border-[#D4B46A]/30 hover:-translate-y-2'}`}"
);
content = content.replace(
  /<h3 className={`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 \$\{svc\.gold \? 'text-\[\#D4B46A\]' : 'text-offwhite'\}`}>{svc\.title}<\/h3>/g,
  "<h3 className={`relative z-10 text-xl font-serif mb-4 font-semibold flex-1 ${svc.gold ? 'text-[#D4B46A]' : 'text-forest'}`}>{svc.title}</h3>"
);
content = content.replace(
  /<p className={`relative z-10 leading-relaxed text-\[15px\] \$\{svc\.gold \? 'text-offwhite\\/90 mb-8' : 'text-slate-light'\}`}>{svc\.desc}<\/p>/g,
  "<p className={`relative z-10 leading-relaxed text-[15px] ${svc.gold ? 'text-forest/90 mb-8' : 'text-forest-dark'}`}>{svc.desc}</p>"
);

// Section 4: PROCESS
content = content.replace(
  /className="w-24 h-24 bg-forest-dark border-2 border-\[\#D4B46A\]\/30 rounded-full flex items-center justify-center mb-6 shadow-\[0_10px_20px_rgba\(0,0,0,0\.5\)\] group hover:border-\[\#D4B46A\] hover:scale-105 transition-all duration-300"/g,
  'className="w-24 h-24 bg-[#FCFBF7] border-2 border-[#D4B46A]/30 rounded-full flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(0,0,0,0.5)] group hover:border-[#D4B46A] hover:scale-105 transition-all duration-300"'
);

// Section 6: WHY PARTNER
content = content.replace(
  /className="relative h-full min-h-\[400px\] bg-forest-dark border border-\[\#D4B46A\]\/20 rounded-sm p-10 flex flex-col justify-center border-l-4 border-l-gold"/g,
  'className="relative h-full min-h-[400px] bg-[#FCFBF7] border border-[#D4B46A]/20 rounded-sm p-10 flex flex-col justify-center border-l-4 border-[#D4B46A]"'
);
content = content.replace(
  /<h3 className="text-2xl md:text-3xl font-serif text-offwhite leading-snug mb-6">/g,
  '<h3 className="text-2xl md:text-3xl font-serif text-forest leading-snug mb-6">'
);

// Section 8: WORKSHOPS
content = content.replace(
  /className="bg-white\/5 border border-white\/10 p-8 hover:bg-white\/10 transition-all duration-300 rounded-sm backdrop-blur-sm group hover:scale-105 hover:shadow-\[0_15px_30px_rgba\(0,0,0,0\.4\)\] hover:border-\[\#D4B46A\]\/30"/g,
  'className="bg-[#FCFBF7] border border-[#D4B46A]/10 p-8 hover:bg-[#FCFBF7]/90 transition-all duration-300 rounded-sm backdrop-blur-sm group hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-[#D4B46A]/30"'
);
content = content.replace(
  /<h3 className="text-xl font-serif text-offwhite mb-4 group-hover:text-\[\#D4B46A\] transition-colors duration-300">\{ws\.title\}<\/h3>/g,
  '<h3 className="text-xl font-serif text-forest mb-4 group-hover:text-[#D4B46A] transition-colors duration-300">{ws.title}</h3>'
);
content = content.replace(
  /<p className="text-sm text-offwhite\/70 leading-relaxed group-hover:text-offwhite\/90 transition-colors duration-300">\{ws\.desc\}<\/p>/g,
  '<p className="text-sm text-forest-dark leading-relaxed group-hover:text-forest transition-colors duration-300">{ws.desc}</p>'
);

// Section 9: WHO WE SERVE
content = content.replace(
  /className="flex items-start gap-4 p-6 bg-forest-dark border border-\[\#D4B46A\]\/10 rounded-sm hover:border-\[\#D4B46A\]\/30 transition-colors"/g,
  'className="flex items-start gap-4 p-6 bg-[#FCFBF7] border border-[#D4B46A]/10 rounded-sm hover:border-[#D4B46A]/30 transition-colors"'
);
content = content.replace(
  /<h4 className="text-offwhite font-serif font-bold text-lg mb-2">\{item\.title\}<\/h4>/g,
  '<h4 className="text-forest font-serif font-bold text-lg mb-2">{item.title}</h4>'
);
content = content.replace(
  /<p className="text-slate-light text-sm leading-relaxed">\{item\.desc\}<\/p>/g,
  '<p className="text-forest-dark text-sm leading-relaxed">{item.desc}</p>'
);

// Section 10: TESTIMONIALS
content = content.replace(
  /className="bg-forest-dark border border-\[\#D4B46A\]\/10 p-10 rounded-sm shadow-sm relative pt-12"/g,
  'className="bg-[#FCFBF7] border border-[#D4B46A]/10 p-10 rounded-sm shadow-sm relative pt-12"'
);
content = content.replace(
  /<div className="absolute top-0 right-10 -translate-y-1\/2 w-14 h-14 bg-forest border border-\[\#D4B46A\]\/20 text-\[\#D4B46A\] rounded-full flex items-center justify-center shadow-lg">/g,
  '<div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-[#FCFBF7] border border-[#D4B46A]/20 text-[#D4B46A] rounded-full flex items-center justify-center shadow-lg">'
);
content = content.replace(
  /<p className="text-slate-light italic leading-relaxed mb-6 font-serif text-lg">"\{test\.text\}"<\/p>/g,
  '<p className="text-forest-dark italic leading-relaxed mb-6 font-serif text-lg">"{test.text}"</p>'
);

fs.writeFileSync('src/App.tsx', content);
console.log("Done updates!");
