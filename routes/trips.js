const express = require("express");
const router = express.Router();
const flightsService = require("../services/flights");
const staysService = require("../services/stays");
router.use(express.json());

router.post("/flight/countries", async (req, res) => {
  try {
    const flightData = await flightsService.getAllCountries(
      req.body,
      req.params
    );
    res.json(flightData);
  } catch (err) {
    console.log("Error retrieving flight details:", err);
    res.status(500).json({ error: "Error retrieving flight details" });
  }
});

router.post("/flight/cities", async (req, res) => {
  try {
    const flightData = await flightsService.getAllCities(req.body, req.params);
    res.json(flightData);
  } catch (err) {
    console.log("Error retrieving flight details:", err);
    res.status(500).json({ error: "Error retrieving flight details" });
  }
});

router.post("/flight/flights", async (req, res) => {
  try {
    const flightData = await flightsService.getAllFlights(req.body, req.params);
    res.json(flightData);
  } catch (err) {
    console.log("Error retrieving flight details:", err);
    res.status(500).json({ error: "Error retrieving flight details" });
  }
});

router.post("/flight/complete", async (req, res) => {
  try {
    const flightData = await flightsService.getAllFlightsComplete(
      req.body,
      req.params
    );
    res.json(flightData);
  } catch (err) {
    console.log("Error retrieving flight details:", err);
    res.status(500).json({ error: "Error retrieving flight details" });
  }
});

router.post("/flight", async (req, res) => {
  try {
    const flightData = await flightsService.getFlightDetails(
      req.body,
      req.params
    );
    res.json(flightData);
  } catch (err) {
    console.log("Error retrieving flight details:", err);
    res.status(500).json({ error: "Error retrieving flight details" });
  }
});


// routes for stays
router.post("/stays/city", async (req, res) => {
  try {
    const hotelData = await staysService.getCity(
      req.body,
      req.params
    );
    res.json(hotelData);
  } catch (err) {
    console.log("Error retrieving stays details:", err);
    res.status(500).json({ error: "Error retrieving stays details" })
  }
});

router.post("/stays/hotels", async (req, res) => {
  try {
    const hotelData = await staysService.getHotels(
      req.body,
      req.params
    );
    res.json(hotelData);
  } catch (err) {
    console.log("Error retrieving stays details:", err);
    res.status(500).json({ error: "Error retrieving stays details" })
  }
});

router.post("/stays/hotels/prices", async (req, res) => {
  try {
    const hotelData = await staysService.getHotels(
      req.body,
      req.params
    );
    res.json(hotelData);
  } catch (err) {
    console.log("Error retrieving stays details:", err);
    res.status(500).json({ error: "Error retrieving stays details" })
  }
});

// router.post("/trips");

module.exports = router;
