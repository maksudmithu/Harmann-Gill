const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Modals: Privacy Policy & Terms of Service
code = code.replace(/<div className="p-8 border-b border-\[\#D4B46A\]\/10 bg-white flex-shrink-0">/g, '<div className="p-8 border-b border-[#D4B46A]/10 bg-[#0B3D2E] flex-shrink-0">');
code = code.replace(/<h3 className="text-2xl md:text-3xl font-serif text-\[\#0B3D2E\] mb-2 text-center">/g, '<h3 className="text-2xl md:text-3xl font-serif text-[#FCFBF7] mb-2 text-center">');
code = code.replace(/<div className="p-8 overflow-y-auto text-\[\#4A4A4A\] leading-relaxed prose prose-invert mx-auto w-full text-\[15px\]">/g, '<div className="p-8 overflow-y-auto text-[#FCFBF7]/70 leading-relaxed prose prose-invert mx-auto w-full text-[15px]">');

// Mobile Menu Modal
code = code.replace(/<div className="p-6 flex justify-between items-center border-b border-\[\#D4B46A\]\/10 bg-white">/, '<div className="p-6 flex justify-between items-center border-b border-[#D4B46A]/10 bg-[#0B3D2E]">');
code = code.replace(/<span className="text-xl font-serif font-bold text-\[\#0B3D2E\]">Menu<\/span>/, '<span className="text-xl font-serif font-bold text-[#FCFBF7]">Menu</span>');
code = code.replace(/className="text-xl font-medium text-\[\#0B3D2E\] hover:text-\[\#D4B46A\] transition-colors pb-4 border-b border-\[\#D4B46A\]\/5"/g, 'className="text-xl font-medium text-[#FCFBF7] hover:text-[#D4B46A] transition-colors pb-4 border-b border-[#D4B46A]/5"');

// Close buttons for modals
code = code.replace(/<button onClick=\{[^}]+\} className="absolute top-4 right-4 text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] transition-colors p-2 bg-\[\#FCFBF7\] rounded-full z-[0-9]+ shadow-sm border border-\[\#D4B46A\]\/10">/g, (match) => {
   return match.replace(/text-\[\#4A4A4A\]/, 'text-[#FCFBF7]').replace(/bg-\[\#FCFBF7\]/, 'bg-[#0B3D2E]');
});
code = code.replace(/<button onClick=\{\(\) => setMobileMenuOpen\(false\)\} className="text-\[\#4A4A4A\] hover:text-\[\#D4B46A\] p-2 bg-\[\#FCFBF7\] rounded-full shadow-sm border border-\[\#D4B46A\]\/10">/, '<button onClick={() => setMobileMenuOpen(false)} className="text-[#FCFBF7] hover:text-[#D4B46A] p-2 bg-[#0B3D2E] rounded-full shadow-sm border border-[#D4B46A]/10">');

fs.writeFileSync('src/App.tsx', code);
