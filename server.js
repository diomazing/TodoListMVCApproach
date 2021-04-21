const express = require('express');
const app = express();
const session = require('express-session');
const db = require('./models');
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes');
const taskRoutes = require('./routes/task-routes');

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(session({
    secret: "chipitos-key",
    resave: false,
    saveUninitialized: false    
}));

app.get('/', (req, res) => {
    res.render('index');
});




app.use("/users", userRoutes);


app.use("/api/profiles", profileRoutes);


app.use("/task", taskRoutes);



// app.get('/api/login', (req, res) => {
//     res.render('index');
// });
app.get('/lobby', (req, res) => {
    res.render('lobby');
});

app.get('/api/register', (req, res) => {
    res.render('post');
});

// app.get('/new', (req, res) => {
//     res.render('lobby');
// });

// app.get('/find', (req, res) => {
//     res.render('lobby');
// });
app.use("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/');
})
db.sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`listening at: http://localhost:${PORT}`);
    })
});

