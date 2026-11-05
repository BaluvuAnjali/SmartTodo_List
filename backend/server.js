require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./src/routes/taskRoutes");
const { notFound, errorHandler } = require("./src/middleware/errorHandler");

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "disconnected" });
});
app.use("/api/tasks", taskRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/smarttodo";
mongoose.connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`SmartTodo API running at http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
