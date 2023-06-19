const express = require("express");

const router = express.Router();

const { getFlightPrices } = require("../service/flight.service");

router.post("/get-flight-price",  async (req, res, next) => {
  try {
   const data = getFlightPrices(req.body.source, req.body.destination, req.body.date);
    return res.send({ data });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;