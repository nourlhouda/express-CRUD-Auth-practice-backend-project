const cors = require("cors");
const express = require("express");
require("dotenv").config({ path: "./.env" });
const app = require("express")();
app.use(express.json());

//cors settings
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// connecting to database
const connectDB = require("./helpers/connectDB");
connectDB();

//routes
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/posts", require("./routes/postRoute"));

app.listen(process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log("server running on port:", process.env.PORT);
});
