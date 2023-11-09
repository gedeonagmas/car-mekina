const express = require("express");
require("express-async-catch");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(cors({ origin: "https://car-rental-system-mern-stack.vercel.app" }));
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

app.get("/hello", (req, res, next) => {
  res.send("hello gedion it's working");
});

app.listen(2000, (err) => {
  if (err) {
    console.log("server disconnected", err);
  }
  console.log(`server connected on port $5000}`);
});
