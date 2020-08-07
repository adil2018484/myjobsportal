var express = require("express");
var router = express.Router();
var Job = require("../models/job");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/jobs", function (req, res, next) {
  Job.find()
    .sort("name")
    .exec(function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    });
});

module.exports = router;
