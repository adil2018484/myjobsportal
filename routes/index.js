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

router.get("/job/:sid", function (req, res, next) {
  Job.findById(req.params.sid).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
//POST Operations
router.post("/addjob", function (req, res, next) {
  Job.create(req.body)
    .then(
      (job) => {
        console.log("Student has been Added ", job);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(job);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//PUT Operations
router.put("/updatejob/:id/:name/:des/:key/:loc", function (req, res, next) {
  Job.findOneAndUpdate(
    { _id: req.params.id },
    {
      name: req.params.name,
      description: req.params.des,
      keyword: req.params.key,
      location: req.params.loc,
    },
    function (error, results) {
      if (error) {
        return next(error);
      }

      res.json(results);
    }
  );
});
module.exports = router;
