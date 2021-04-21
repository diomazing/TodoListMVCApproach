const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
    db.User.create({
        username: req.body.username, 
        password: req.body.password,
    }).then((newUser) => res.redirect('/'));
});

router.post("/all", (req, res) => {
    try {
        db.User.findAll({
            include: [db.Profile, db.Task]
        }).then(allUsers => res.send(allUsers));
    } catch (error) {
        console.log(error);
    }
});
router.post('/find', (req, res) => {
    db.User.findOne({
        where: {
            username: req.body.username
        },
    }).then(allUsers => {
        console.log(req.body.username);
        if(allUsers){
            console.log(allUsers.id);
            req.session.id = allUsers.id;
            req.session.username = allUsers.username;
            res.redirect('/task/find')
        }else{
            console.log("User not found");
        }
    });
});


module.exports = router;

