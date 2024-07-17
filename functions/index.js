const functions = require("firebase-functions");
const admin = require("firebase-admin");
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

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log("Server is live");
// });

exports.app = functions.https.onRequest(app);

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
