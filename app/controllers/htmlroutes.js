
var path = require("path")
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/views/index.html"));
});

router.get("/beerList", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/views/beerList.html"));
});

router.get("/breweryList", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/views/breweryList.html"));
});

router.get("/breweryList", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/views/breweryList.html"));
});

module.exports = router;