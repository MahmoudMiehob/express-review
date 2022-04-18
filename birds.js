const express = require("express");
const router = express.Router();

// FIRE MIDDLEWARE THAT IS SPECIFIC TO THIS ROUTER
router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

//GREEN DEFINE THE HOME PAGE ROUTE
router.get("/", (req, res) => {
    res.send("Birds home page");
});
// ORANGE DEFINE THE ABOUT ROUTE
router.get("/about", (req, res) => {
    res.send("About birds");
});

// GRAY EXPORT THE ROUTER
module.exports = router;