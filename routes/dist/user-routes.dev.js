"use strict";

var express = require("express");

var router = express.Router();

var db = require("../models");

router.post("/new", function (req, res) {
  db.User.create({
    username: req.body.username,
    password: req.body.password
  }).then(function (newUser) {
    return res.send(newUser);
  });
});
router.get("/all", function (req, res) {
  try {
    db.User.findAll({
      include: [db.Profile, db.Task]
    }).then(function (allUsers) {
      return res.send(allUsers);
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;