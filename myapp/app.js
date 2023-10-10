const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const PORT = 3000;

require("dotenv").config();
app.use(express.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

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

// User Sign Up API
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received request body:", req.body);
  // Validation
  const nameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (
    !nameRegex.test(name) ||
    !emailRegex.test(email) ||
    !passwordRegex.test(password)
  ) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    // Insert data into database
    const [result] = await pool.execute(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    // Send response
    res.status(200).json({
      data: {
        user: {
          id: result.insertId,
          name,
          email,
        },
        "request-date": req.get("Request-Date"),
      },
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Email already exists" });
    }
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/users", async (req, res) => {
  const { id } = req.query;

  // Validate id
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    // Query user from database
    const [rows] = await pool.execute("SELECT * FROM user WHERE id = ?", [id]);

    // Check if user exists
    if (rows.length === 0) {
      return res.status(403).json({ error: "User not existing" });
    }

    // Send response
    const user = rows[0];
    res.status(200).json({
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        "request-date": new Date().toUTCString(),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
