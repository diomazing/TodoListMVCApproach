const express = require("express");
const router = express.Router();
const db = require("../models");

//CREATING A TASK
router.post('/new', (req,res) => {
    db.Task.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        UserId: req.body.UserId,
    }).then(newTask => res.send(newTask));
});

//FINDING A TASK
router.get('/find/:id', (req, res) => {
    db.Task.findAll({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(task => res.send(task));
});

//DELETION OF TASK
router.delete("/delete/:id", (req, res) => {
    db.Task.destroy({
        where: {
            Taskid: req.params.id
        }
    }).then(() => res.send("Success"));
});

//UPDATEOF TASK
router.put("/edit", (req, res) => {
    db.Task.update({
        title: req.body.title,
        description: req.body.description
    }, {
        where: {
            Taskid: req.body.id
        }
    }).then(() => res.send("Success"));
})

module.exports = router;