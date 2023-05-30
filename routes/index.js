const express = require('express');
var router = express.Router()
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


router.use((req, res) => {
  res.send("<h1>Nothing at this endpoint</h1>")
})

module.exports = router;