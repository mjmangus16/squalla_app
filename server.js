const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
// const cors = require("cors");

const path = require("path");

const users = require("./routes/api/users");
const dashboard = require("./routes/api/dashboard");
const performance = require("./routes/api/performance");
const profile = require("./routes/api/profiles");
const submitRound = require("./routes/api/rounds");
const leagues = require("./routes/api/leagues");
const courses = require("./routes/api/courses");
const achievements = require("./routes/api/achievements");
const addRound = require("./routes/api/addRound");
const friends = require("./routes/api/friends");
const pdgaAPI = require("./routes/api/pdgaAPI");
const notifications = require("./routes/api/notifications");

const app = express();
// app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/dashboard", dashboard);
app.use("/api/performance", performance);
app.use("/api/rounds", submitRound);
app.use("/api/profiles", profile);
app.use("/api/leagues", leagues);
app.use("/api/courses", courses);
app.use("/api/achievements", achievements);
app.use("/api/addRound", addRound);
app.use("/api/friends", friends);
app.use("/api/pdgaAPI", pdgaAPI);
app.use("/api/notifications", notifications);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

// const expGained = require("./functions/leveling/expGained");

// expGained(10, 150, 87, 27, 85, 76, 86);

app.listen(port, () => console.log(`Server running on port ${port}`));
