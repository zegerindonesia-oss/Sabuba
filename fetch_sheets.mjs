async function main() {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/1HuhlPIe-GF7fIewCD__NHIkt8xEBzXfx0LdBIek16Q0/export?format=csv&gid=1112273668';
  const res = await fetch(csvUrl);
  const text = await res.text();
  console.log("Status:", res.status);
  console.log("Length:", text.length);
  
  // Print header and rows
  const lines = text.split('\n');
  console.log("Total lines:", lines.length);
  for (let i = 0; i < Math.min(lines.length, 60); i++) {
    console.log(`[${i}]`, lines[i]);
  }
}
main();
