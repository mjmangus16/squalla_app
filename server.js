const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profiles");
const submitRound = require("./routes/api/rounds");
const leagues = require("./routes/api/leagues");
const courses = require("./routes/api/courses");
const achievements = require("./routes/api/achievements");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profiles", profile);
app.use("/api/rounds", submitRound);
app.use("/api/leagues", leagues);
app.use("/api/courses", courses);
app.use("/api/achievements", achievements);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
