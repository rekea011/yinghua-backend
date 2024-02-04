var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.ip)
    res.json({
        message: 'fuck you all,what are you looking at'
    })
    // res.render('index', { title: 'Express' });
});

module.exports = router;
