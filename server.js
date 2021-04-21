const express = require('express');
const app = express();

const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set('view engine', 'ejs');
app.use(express.static("public"));

const userRoutes = require('./routes/user-routes');
app.use("/api/users", userRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use("/api/profiles", profileRoutes);

const taskRoutes = require('./routes/task-routes');
app.use("/api/tasks", taskRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/login', (req, res) => {
    res.render('index');
});
app.get('/lobby', (req, res) => {
    res.render('lobby');
});
app.get('/api/register', (req, res) => {
    res.render('post');
});
app.get('/new', (req, res) => {
    res.render('lobby');
});
app.get('/find/:username', (req, res) => {
    res.render('lobby');
});

db.sequelize.sync().then(() => {
    app.listen(PORT, () =>{
        console.log(`listening at: http://localhost:${PORT}`);
    })
});

