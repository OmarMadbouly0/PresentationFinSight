const fs = require('fs');
const path = 'src/lib/slide-content.ts';
let content = fs.readFileSync(path, 'utf8');

const updates = {
  s3: '03 · Introduction',
  s4: '04 · Problem Statement',
  s5: '05 · Project Objectives',
  s23: '06 · Business Model Canvas',
  s24: '07 · Investment Ecosystem',
  s25: '08 · Competitors',
  s17: '09 · Target Customers',
  s7: '10 · Dashboard',
  s8: '11 · AI Forecasting',
  s11: '12 · Notifications (Alerts)',
  s10: '13 · Scenario Simulator',
  s18: '14 · Financial Records',
  s19: '15 · CSV Data Import',
  s20: '16 · Workspaces',
  s21: '17 · Admin Dashboard',
  s22: '18 · Customer Support',
  s9: '19 · AI Assistant',
  s12: '20 · Tech Stack',
  s13: '21 · Future Work',
  s14: '22 · Conclusion',
  s15: '23 · Demo',
  s26: '24 · Team'
};

for (const [key, kicker] of Object.entries(updates)) {
  const regex = new RegExp('(  ' + key + ': \\{\\s+kicker: ").*?(",)');
  content = content.replace(regex, '$1' + kicker + '$2');
}

content = content.replace(/slideOrder: SlideId\\[\\] = \\[.*?\\];/s, 'slideOrder: SlideId[] = [\n  "s1", "s2", "s3", "s4", "s5", "s23", "s24", "s25", "s17", "s7", "s8", "s11", "s10", "s18", "s19", "s20", "s21", "s22", "s9", "s12", "s13", "s14", "s15", "s26", "s16"\n];');

content = content.replace('finsight:content:v6', 'finsight:content:v7');

fs.writeFileSync(path, content);
console.log('Done!');
