const express = require("express");
const app = express();

const flightController = require("../flight/controller/flight.controller")
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/flight", flightController)
app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`)
})