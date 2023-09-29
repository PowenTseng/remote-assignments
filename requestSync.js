// requestSync.js
const request = require("sync-request");

const url =
  "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url) {
  // write code to request url synchronously
  const start = Date.now();
  try {
    const response = request("GET", url);
    const end = Date.now();
    console.log(`Execution time: ${end - start}ms`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
requestSync(url); // would print out the execution time
requestSync(url);
requestSync(url);
