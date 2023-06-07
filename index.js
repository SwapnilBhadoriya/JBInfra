require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Routers
const customerRouter = require('./routes/customer')


app.use('/customer', customerRouter)



const { connectDB } = require("./config/dbConfig");

const startServer = async function () {
  try {
    await connectDB();
    app.listen((port = process.env.PORT || 3000), () => {
      console.log("Server is running on port :", port);
    });
  } catch (error) {
    console.log("Error in starting the server .");
  }
};
startServer();
