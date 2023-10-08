const axios = require("axios");

const url =
  "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestCallback(url, callback) {
  // write code to request url asynchronously
  const start = Date.now();
  axios
    .get(url)
    .then((response) => {
      const end = Date.now();
      callback(null, `Execution time: ${end - start}ms`);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      callback(error);
    });
}

function requestPromise(url) {
  // write code to request url asynchronously with Promise
  const start = Date.now();
  return axios
    .get(url)
    .then((response) => {
      const end = Date.now();
      return `Execution time: ${end - start}ms`;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

async function requestAsyncAwait(url) {
  // write code to request url asynchronously
  // you should call requestPromise here and get the result using async/await.
  try {
    const result = await requestPromise(url);
    return result;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

let completedRequests = 0;
const totalRequests = 3;

function checkAllRequestsCompleted() {
  completedRequests++;
  if (completedRequests === totalRequests) {
    console.timeEnd("Total execution time for requestAsync.js");
  }
}

console.time("Total execution time for requestAsync.js");
requestCallback(url, (error, result) => {
  if (error) return;
  console.log(result);
  checkAllRequestsCompleted();
});

requestPromise(url).then((result) => {
  console.log(result);
  checkAllRequestsCompleted();
});

requestAsyncAwait(url).then((result) => {
  console.log(result);
  checkAllRequestsCompleted();
});
