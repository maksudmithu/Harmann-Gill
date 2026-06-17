const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace("text-[#0B3D2E]/90 mb-8' : 'text-[#4A4A4A]'", "text-[#FCFBF7]/90 mb-8' : 'text-[#FCFBF7]/70'");
code = code.replace("text-[#D4B46A]' : 'text-[#0B3D2E]'", "text-[#D4B46A]' : 'text-[#FCFBF7]'");

fs.writeFileSync('src/App.tsx', code);
