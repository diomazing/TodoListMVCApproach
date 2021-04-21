"use strict";

var express = require('express');

var app = express();

var db = require('./models');

var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var userRoutes = require('./routes/user-routes');

app.use("/api/users", userRoutes);

var profileRoutes = require('./routes/profile-routes');

app.use("/api/profiles", profileRoutes);

var taskRoutes = require('./routes/task-routes');

app.use("/api/tasks", taskRoutes);
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("listening at: http://localhost:".concat(PORT));
  });
});