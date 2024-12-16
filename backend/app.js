const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connect");

//imports
const UserRoutes = require("./routes/UserRoutes");

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api", UserRoutes);

PORT = process.env.PORT || 5001;

//route middlewares

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is connected to port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
