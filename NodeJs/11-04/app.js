const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const homeRouter = require('./routes/homepage');
const postRouter = require('./routes/createPost');
const app = express();
app.use(homeRouter);
app.use(postRouter);

app.set('view engine' , 'pug');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname , 'public')));
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views' , '404.html'))
})
app.listen(3000);