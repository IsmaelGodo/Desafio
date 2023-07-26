const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const app = express();
const port = 4000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", usersRouter);

const server = app.listen(port, () => {
  console.log(
    `Puerto funcionando en el siguiente enlace: http://localhost:${port}`
  );
});

module.exports = server;
