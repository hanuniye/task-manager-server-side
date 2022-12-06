const express = require("express");
const tasksRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/v1/tasks",tasksRouter);

app.use(notFound); 

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log("server is runing"));

  } catch (error) {
    console.log(error);
  }
}
start()
