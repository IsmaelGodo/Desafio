const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoutes");
const usersRouter = require("./routes/usersRoutes");
const dataformRouter = require("./routes/dataformRoutes");
const app = express();
const port = 4000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/dataform", dataformRouter);

const server = app.listen(port, () => {
  console.log(
    "Puerto funcionando en el siguiente enlace: http://localhost:${port}"
  );
});

module.exports = server;
