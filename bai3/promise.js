// const myPromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve("Operation completed successfully");
//     } else {
//       rejected(new Error("Operation failed"));
//     }
//   }, 1000);
// });
// myPromise
//   .then((result) => console.log("Success", result))
//   .catch((error) => console.error("Error", error.message));


  const fs = require("fs").promises;
  const promise1 = Promise.resolve("First result");
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Second result"), 1000)
  );
  const promise3 = fs.readFile("myfile.txt", "utf8"); // Read local file instead of fetch

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log("Results:", results);
      // results[0] is from promise1
      // results[1] is from promise2
      // results[2] is the content of myfile.txt
    })
    .catch((error) => {
      console.error("Error in one of the promises:", error);
    });

function getUser(userId) {
  return new Promise((resolve, reject) => {
    // Simulating database call
    setTimeout(() => {
      resolve({ id: userId, name: "John" });
    }, 1000);
  });
}

function getUserPosts(user) {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

// Chain the promises
getUser(123)
  .then((user) => {
    console.log("User:", user);
    return getUserPosts(user);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });