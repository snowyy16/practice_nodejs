let http = require("http");
const { resolve } = require("path");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello world");
  })
  .listen(3030);

// Variables (let, const, var)
let name = "node.js";
const version = 20;

// Function declaration
function greet(user) {
  return `Hello, ${user}`;
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

console.log(greet("Developer")); // Hello, Developer
console.log(add(5, 3)); //8

// Object
const user = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
//Array
const colors = ["red", "green", "blue"];

colors.forEach((color) => console.log(color));
const lengths = colors.map((color) => color.length);

// 1. Callbacks (traditional)
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

// 2. Promises (ES6+)
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved"), 1000);
  });
};
// 3. Async/Await (ES8+)
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}
getData();

// const { name } = user;
// console.log(`Hello, ${name}`);
