global.mylet = 42;
console.log(global.mylet);

// const fs = require("fs");
// fs.readFile("myfile.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const https = require("https");
https.get("https://example.com", (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => console.log(data));
});

const name = "node.js";
console.log(`Hello, ${name}`);

console.log("All arguments:", process.argv);
console.log("First argument:", process.argv[2]);
console.log("Second argument:", process.argv[3]);
//Example: Non-blocking File Read
const fs = require("fs");
console.log("before file read");
fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File contents:", data);
});
console.log("after file read");

//Example: Event Loop Order
console.log("First");
setTimeout(() => console.log("Third"), 0);
Promise.resolve().then(() => console.log("Second"));
console.log("Fourth");
//This shows the priority order: sync code > nextTick > Promises > Timers > Check phase.