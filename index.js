// Dependencies
require("dotenv").config();
const express = require("express");
const quotesRoutes = require("./routes/quotes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public/images"));

//Routes
app.use("/quotes", quotesRoutes);

// Bootstrap server
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});
