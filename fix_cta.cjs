const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/Book A Free Session <ArrowRight/g, 'Book Free Session <ArrowRight');
content = content.replace(/Book My Free Session Now/g, 'Book Free Session');
content = content.replace(/Book Free Clarity Session/g, 'Book Free Session');
content = content.replace(/Reserve Your Seat/g, 'Book Free Session');
content = content.replace(/Become A Client/g, 'Book Free Session');
content = content.replace(/Schedule Your Free Consultation/g, 'Book Free Session');
content = content.replace(/Start Your Journey Today/g, 'Book Free Session');
content = content.replace(/>\s*Book <ArrowRight/g, '>\n           Book Free Session <ArrowRight'); 

fs.writeFileSync('src/App.tsx', content);
