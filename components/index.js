var express = require('express');
var path = require('path');
var router = express.Router();

const dist = path.join(__dirname, '..', 'client', 'build')

router.get('/', function(req, res, next) {
    res.sendFile(path.join(dist, 'index.html'))
});

module.exports = router;
