const path = require('path');
const express = require('express');
const router = express.Router();

const postModel = require('../models/newPost');

router.get('/newpost', (req, res) => {
    res.render('newPost');
});

router.post('/post' , (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const image = req.body.imageSrc;
    const publisher = req.body.publisher;
    const post = new postModel(title, body, image, publisher);
    post.save();
    res.redirect('/');
})

module.exports = router;