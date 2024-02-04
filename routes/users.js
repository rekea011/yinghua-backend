var express = require('express')
var User = require('../models/user')
var router = express.Router()

router.post('/', async function (req, res, next) {
    const data = {
        mobile,
    } = req.body

    let result = await User.findOne({mobile: data.mobile})

    if(result) {
        res.json({
            status: 200
        })
    } else {
        res.json({
            status: 0
        })
    }
})

module.exports = router;