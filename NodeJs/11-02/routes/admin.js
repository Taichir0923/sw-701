const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/admin/newpost', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'public', 'admin.html'));
});

router.post('/posts', (req, res, next) => {
    res.redirect('/');
})

module.exports = router;