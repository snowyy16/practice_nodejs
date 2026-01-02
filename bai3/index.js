//Example: Synchronous File Read
// const fs = require("fs");
// console.log("1. Starting sync read...");
// const data = fs.readFileSync("myfile.txt", "utf8");
// console.log("2. File contents:", data);
// console.log("3. Done reading file");

 //Example: Asynchronous File Read
// console.log("1. Starting async read...");
// fs.readFile("myfile.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("2. File contents:", data);
// });
// console.log("3. Done starting read operation");

//Problem: Nested Callbacks (Callback Hell)
// getUser(userId, (err, user) => {
//   if (err) return handleError(err);
//   getOrders(user.id, (err, orders) => {
//     if (err) return handleError(err);
//     processOrders(orders, (err) => {
//       if (err) return handleError(err);
//       console.log('All done!');
//     });
//   });
// });
//Promise
// const fs = require("fs").promises;
// console.log("1. Reading file ...");
// fs.readFile("myfile.txt", "utf8")
//   .then((data) => {
//     console.log("3. File content:", data);
//   })
//   .catch((err) => console.log("Error:", err));
//   console.log("2. This runs before file is read!");

//   async function readFiles() {
//   try {
//     console.log('1. Starting to read files...');
//     const data1 = await fs.readFile('file1.txt', 'utf8');
//     const data2 = await fs.readFile('file2.txt', 'utf8');
//     console.log('2. Files read successfully!');
//     return { data1, data2 };
//   } catch (error) {
//     console.error('Error reading files:', error);
//   }
// }
//2. Async/Await (Recommended)
async function readFiles() {
  try {
    console.log("1. Starting to read files...");
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    console.log("2. Files read successfully!");
    return { data1, data2 };
  } catch (error) {
    console.error("Error reading files:", error);
  }
}