const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');

app.use(adminRoutes)

app.use('/admin' , (req,res,next)=> {
    res.write('<h1>admin</h1>')
});

app.use('/' , (req, res, next) => {
    res.write('<h1>jj</h1>');
});

app.listen(3000);