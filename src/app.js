

const express = require("express");
const healthRouter = require("./routers/healthRouter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Portfolio API is running" });
});
app.use("/api/health", healthRouter);
app.use(notFound);
app.use(errorHandler);
module.exports = app;
