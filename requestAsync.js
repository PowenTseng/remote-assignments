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
      callback(`Execution time: ${end - start}ms`);
    })
    .catch((error) => {
      console.error("Error:", error.message);
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
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);
