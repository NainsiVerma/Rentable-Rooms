const express = require("express");

const app = express(); // initialize express
const port = 5000;

const userRouter = require("./routers/userRouter");
const roomRouter = require("./routers/roomRouter");
const utilRouter = require("./routers/util");

const cors = require("cors");
app.use(cors());
app.use(express.json());
// middleware
app.use("/user", userRouter);
app.use("/room", roomRouter);
app.use("/util", utilRouter);

app.use(express.static("./uploads"));

//to accept request from client
// routing
app.get("/", (req, res) => {
  res.send("response from backend");
});
app.get("/add", (req, res) => {
  res.send("response from add route");
});
app.get("/getall", (req, res) => {
  res.send("response from getall route");
});
app.get("/getbyid", (req, res) => {
  res.send("response from getbyid route");
});
app.get("/update", (req, res) => {
  res.send("response from update route");
});
app.get("/delete", (req, res) => {
  res.send("response from delete route");
});

// /update
// /delete

app.listen(port, () => {
  console.log("server started on 5000");
}); // listen for requests
