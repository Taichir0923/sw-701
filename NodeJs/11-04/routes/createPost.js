const path = require('path');
const express = require('express');
const rootDir = require('../util/rootDir');

const router = express.Router();

const postTitles = [];

router.get('/newpost' , (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'post.html'));
});

router.post('/posts' , (req, res) => {
    postTitles.push({
        title: req.body.title
    })
    res.sendFile(path.join(rootDir, 'views', 'postlist.html'));
    console.log(req.body);
})

module.exports = router;