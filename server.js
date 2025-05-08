const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const db = require("./dbconfig/db");

dotenv.config();
const app = express();

// middleware
app.use(morgan("combined"));
app.use(express.json());

app.use("/api/v1", require("./routes/userRoutes"));

// define the port number on which your server will run
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.black);
});
