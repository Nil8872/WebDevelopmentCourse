const fs = require("fs");

let text = fs.readFileSync('Nilesh.txt', 'utf-8');
console.log(text);

text = text.replace("Nilesh", "Vijay");
fs.writeFileSync('vijay.txt', text);