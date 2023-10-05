const express = require("express");
const app = express();
const PORT = 3000;

// Define the /healthcheck API endpoint
app.get("/healthcheck", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is healthy",
  });
});

// Start the Express.js server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
