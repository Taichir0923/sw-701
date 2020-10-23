const express = require('express');
const app = express();

app.listen(8087);
app.get('/', (req, res) => {
    res.json({success: 'hello Guys!'});
});
//jwt - json web token
//passport