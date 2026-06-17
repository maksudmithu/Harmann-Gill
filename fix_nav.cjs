const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(/<div className="fixed bottom-0 left-0 right-0 bg-\[\#FCFBF7\] border-t border-\[\#D4B46A\]\/20 p-4 md:hidden z-40 shadow-\[0_-10px_40px_rgba\(0,0,0,0\.05\)\] flex gap-4">/, '<div className="fixed bottom-0 left-0 right-0 bg-[#0B3D2E] border-t border-[#D4B46A]/20 p-4 md:hidden z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex gap-4">');

// Header navbar bg
code = code.replace(/<div className="hidden lg:flex items-center gap-8 bg-\[\#FCFBF7\]\/90 backdrop-blur-md px-8 py-3 rounded-full border border-\[\#D4B46A\]\/20 shadow-sm">/, '<div className="hidden lg:flex items-center gap-8 bg-[#0B3D2E]/90 backdrop-blur-md px-8 py-3 rounded-full border border-[#D4B46A]/20 shadow-sm">');
code = code.replace(/<span className="text-2xl font-serif font-bold tracking-wide text-\[\#0B3D2E\]">/, '<span className="text-2xl font-serif font-bold tracking-wide text-[#FCFBF7]">');
code = code.replace(/<a key=\{link\.label\} href=\{link\.href\} className="text-sm tracking-wide font-medium hover:text-\[\#D4B46A\] transition-colors text-\[\#4A4A4A\]">/g, '<a key={link.label} href={link.href} className="text-sm tracking-wide font-medium hover:text-[#D4B46A] transition-colors text-[#FCFBF7]/90">');
code = code.replace(/<button className="lg:hidden text-\[\#0B3D2E\] hover:text-\[\#D4B46A\] transition-colors" onClick=\{\(\) => setMobileMenuOpen\(true\)\}>/, '<button className="lg:hidden text-[#FCFBF7] hover:text-[#D4B46A] transition-colors" onClick={() => setMobileMenuOpen(true)}>');

fs.writeFileSync('src/App.tsx', code);
