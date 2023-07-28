const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const app = express();
const port = 4000;

// Initialize express
const app = express();

// Middlewares
// app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: "http://localhost:5173"}));
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);

// Assigning port
const server = app.listen(port, () => {
  console.log(
    `Puerto funcionando en el siguiente enlace: http://localhost:${port}`
  );
});

module.exports = server;