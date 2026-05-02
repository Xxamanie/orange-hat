const fs = require('fs');

function fixFile(path) {
    let c = fs.readFileSync(path, 'utf8');
    c = c.replace(/\u2014/g, '--'); // em-dash
    c = c.replace(/\u2013/g, '-');  // en-dash
    c = c.replace(/\u2726/g, '*');  // ✦
    c = c.replace(/\u2727/g, '*');  // ✧
    c = c.replace(/\u2500/g, '-');  // ─
    c = c.replace(/\u2666/g, '*');  // ♦
    c = c.replace(/\u00B7/g, '-');  // ·
    
    // Emojis (simplified)
    c = c.replace(/\uD83C\uDFA5/g, ''); // 🎥
    c = c.replace(/\u2709\uFE0F/g, ''); // ✉️
    c = c.replace(/\uD83D\uDCCD/g, ''); // 📍
    c = c.replace(/\uD83D\uDD4A\uFE0F/g, ''); // 🕊️
    
    fs.writeFileSync(path, c, 'utf8');
}

// fixFile('src/pages/HomePage.tsx');
fixFile('src/styles/NewDesign.css');
