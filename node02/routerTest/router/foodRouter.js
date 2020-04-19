var express = require('express')
var router = express.Router()

router.get('/eat', (req, res) => {
  res.send('food eat')
})

module.exports = router
