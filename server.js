const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config();
const app = express();

// middleware
app.use(morgan("combined"));

app.use("/api/v1", require("./routes/userRoutes"));

// define the port number on which your server will run
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan.black);
});
