const fs = require('fs');
const path = 'src/lib/slide-content.ts';
let content = fs.readFileSync(path, 'utf8');

const s27Content = `
  s27: {
    kicker: "The Reality",
    titlePre: "Meet",
    titleAccent: "Sarah",
    p1: "Imagine it's Monday morning. Sarah, the owner of a growing company with 30 employees, receives three emails before 9 a.m.",
    p2: "1. A major customer delays a payment by 45 days.\\n2. Her sales manager wants to hire five new employees.\\n3. The marketing team proposes organizing a large event.",
    p3: "Each decision sounds reasonable. But together, they raise one critical question:\\n\\n'Can the company actually afford this?'",
    p4: "Sarah opens spreadsheets, checks bank statements, and tries to estimate what will happen over the next few months. Hours later, she's still guessing.",
    punchline: "This is the reality for thousands of SMEs. They don't fail because they lack opportunities—they fail because they can't see the financial impact of today's decisions before making them. That's exactly the problem our project aims to solve.",
  },
`;

const s27Meta = `
  s27: {
    title: "Hook Anecdote", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "p1", label: "Paragraph 1", type: "textarea" },
      { key: "p2", label: "Paragraph 2", type: "textarea" },
      { key: "p3", label: "Paragraph 3", type: "textarea" },
      { key: "p4", label: "Paragraph 4", type: "textarea" },
      { key: "punchline", label: "Punchline", type: "textarea" },
    ]
  },
`;

// Insert into defaultContent before s4
if (!content.includes('s27: {')) {
  content = content.replace(/(\s+s4: \{)/, s27Content + '$1');
  content = content.replace(/(\s+s4: \{)/, s27Meta + '$1');
  
  // Insert into slideOrder before s4
  content = content.replace(/'s3', 's4'/, "'s3', 's27', 's4'");
  
  // Bump version
  content = content.replace('finsight:content:v7', 'finsight:content:v8');
  
  fs.writeFileSync(path, content);
  console.log('Added s27');
} else {
  console.log('s27 already exists');
}
