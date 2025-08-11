const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/users", require("./routes/userRoutes"));
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB connected");
app.listen(process.env.PORT, () => console.log(`Server
running on port ${process.env.PORT}`));
})
.catch(err => console.log(err));