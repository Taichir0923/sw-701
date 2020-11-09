const path = require('path');
const express = require('express');
const router = express.Router();

const postModel = require('../models/newPost');

router.get('/' , (req, res) => {
    postModel.fetchAll(posts => {
        res.render('index', {post: posts});
    })
})

module.exports = router;
