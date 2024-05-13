const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: true }));

const nearbyRoutes = require("./routes/nearby.js");
const userRoutes = require("./routes/user.js");
const tripRoutes = require("./routes/trips.js");

app.use("/trips", tripRoutes);
app.use("/user", userRoutes);
app.use("/nearby", nearbyRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is working as expected" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is live");
});

//TODO
//Routes initialization, etc
