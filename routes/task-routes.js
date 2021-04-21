const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', (req, res) => {
    res.render('task', {UserId: req.session.id});
})

//FINDING A TASK
router.get('/find', (req, res) => {
    db.Task.findAll({
        where: {
            username: req.session.username
        },
    }).then(task => res.render('lobby', {tasks: task}));
});

//CREATING A TASK
router.post('/new', (req,res) => {
    db.Task.create({
        title: req.body.title,
        description: req.body.description,
        status: "pending",
        username: req.session.username
    }).then(newTask => res.redirect('/task/find'));
});



//DELETION OF TASK
router.get("/delete", (req, res) => {
    db.Task.destroy({
        where: {
            username: req.session.username
        }
    }).then(() => res.redirect('/task/find'));
});

//UPDATEOF TASK
router.get("/edit",  async (req, res) => {
    await db.Task.update({
        status: 'completed'
    }, {
        where: {
            username: req.session.username
        }
    }).then(() =>  res.redirect('/task/find'));
})

module.exports = router;