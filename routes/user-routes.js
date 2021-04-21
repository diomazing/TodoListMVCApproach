const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/new", (req, res) => {
    db.User.create({
        username: req.body.username, 
        password: req.body.password,
    }).then((newUser) => res.send(newUser));

    res.render("")
});

router.post("/all", (req, res) => {
    try {
        db.User.findAll({
            include: [db.Profile, db.Task]
        }).then(allUsers => res.send(allUsers));
    } catch (error) {
        console.log(error);
    }
})
// router.post('/find/:username', (req, res) => {
//     db.User.findAll({
//         where: {
//             username: req.params.username
//         },
//         include: [db.User]
//     }).then(allUsers => res.send(allUsers));
// })

module.exports = router;

