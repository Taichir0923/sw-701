const path = require('path');
const express = require('express');
const rootDir = require('../util/rootDir');
const router = express.Router();

router.get('/' , (req,res) => {
    res.render('home', {docTitle: 'Pug home'});
});

module.exports = router;