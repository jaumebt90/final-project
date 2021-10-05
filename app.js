require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT

const app = express();
require("./config")(app);

// 👇 MIDDLEWARE MISSING
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

const playsRouter = require("./routes/plays.routes");
app.use("/api", playsRouter);

const clubRouter = require("./routes/club.routes");
app.use("/api", clubRouter);

const staffRouter = require("./routes/staff.routes");
app.use("/api", staffRouter);

const playerRouter = require("./routes/player.routes");
app.use("/api", playerRouter);


const newsRouter = require("./routes/news.routes");
app.use("/api", newsRouter);



// app.use((req, res, next) => {
//     // If no routes match, send them the React HTML.
//     res.sendFile(__dirname + "/public/index.html");
//   });

require("./error-handling")(app);

module.exports = app;
