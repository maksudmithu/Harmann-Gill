const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Unify all H2 section headers
// Usually they are: <h2 className="text-3xl md:text-5xl font-serif text-[COLOR] mb-6">TITLE</h2>
// Or something similar

// The prompt said: Same spacing, Same alignment logic, Same hierarchy.
// Let's make them ALL: `<h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-center">`
// Wait, the color depends on the section background, so we just replace the layout/spacing classes.

const headerRe = /<h2 className="([^"]*)">([^<]+)<\/h2>/g;

code = code.replace(headerRe, (match, classes, title) => {
    let colorClass = 'text-[#FCFBF7]';
    if (classes.includes('text-[#0B3D2E]')) colorClass = 'text-[#0B3D2E]';
    if (classes.includes('text-forest')) colorClass = 'text-[#0B3D2E]';
    if (classes.includes('text-[#4A4A4A]')) colorClass = 'text-[#0B3D2E]';
    
    // Some are not H2s, but regex specifically catches `</h2`
    return `<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight mb-6 text-center ${colorClass}">${title}</h2>`;
});

// Since we centered the headings, we should center the subtext paragraphs right below them.
// Subtext usually looks like:
// <p className="text-[COLOR] text-lg">
// We want: `<p className="text-[COLOR] text-lg font-light max-w-2xl mx-auto text-center mb-12 leading-relaxed">`

// I'll manually run a few targeted replaces for the section subtexts, since they vary.

code = code.replace(/<p className="text-\[\#4A4A4A\] text-lg">Millions are working hard/g, '<p className="text-[#4A4A4A] text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">Millions are working hard');

code = code.replace(/<div className="w-20 h-1 bg-\[\#D4B46A\] mb-16"><\/div>/g, '<div className="w-20 h-1 bg-[#D4B46A] mx-auto mb-16"></div>'); // Centers the divider

code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">We take the guesswork/g, '<p className="text-[#FCFBF7]/70 text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">We take the guesswork');

code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 mb-10 leading-relaxed text-lg">We don't just offer/g, '<p className="text-[#FCFBF7]/70 text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">We don\'t just offer');

code = code.replace(/<p className="text-\[\#4A4A4A\] leading-relaxed text-lg max-w-3xl">/g, '<p className="text-[#4A4A4A] text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">');

code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">Empowering our community/g, '<p className="text-[#FCFBF7]/70 text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">Empowering our community');

code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg">Clear answers/g, '<p className="text-[#FCFBF7]/70 text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">Clear answers');

code = code.replace(/<p className="text-\[\#FCFBF7\]\/70 text-lg mb-12 leading-relaxed max-w-lg">Schedule/g, '<p className="text-[#FCFBF7]/70 text-lg md:text-xl font-light max-w-3xl mx-auto text-center mb-16 leading-relaxed">Schedule');


// Testimonial quote has Quote text. Let's make it consistent.
code = code.replace(/<h3 className="text-2xl md:text-3xl font-serif text-[#0B3D2E] leading-snug mb-6">/g, '<h3 className="text-3xl md:text-4xl font-serif font-medium text-[#0B3D2E] leading-relaxed mb-6">');

fs.writeFileSync('src/App.tsx', code);
