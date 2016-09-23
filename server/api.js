var express = require('express');
var router = express.Router();


router.get('/getProducts', function (req, res) {
	res.send('hello world');
});


module.exports = router;