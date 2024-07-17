const express = require("express");
const router = express.Router();
const nearbyService = require("../services/nearby");
router.use(express.json());

router.post("/attractions", async (req, res) => {
  try {
    const attractionData = await nearbyService.getAttractions(
      req.body,
      req.params
    );
    res.json(attractionData);
  } catch (err) {
    console.log("Error retrieving attractions:", err);
    res.status(500).json({ error: "Error retrieving attractions" });
  }
});

module.exports = router;
