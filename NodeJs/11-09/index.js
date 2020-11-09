const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const homeRouter = require('./routes/home');
const newPostRouter = require('./routes/newPost');
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine' , 'ejs');
app.set('views', 'views');


app.use(homeRouter);
app.use(newPostRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000);