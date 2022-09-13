const express = require("express");
const router = require("./routers");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}/`);
});
