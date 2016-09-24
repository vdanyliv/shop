let express = require('express');
let fs = require('fs');
let router = express.Router();


router.post('/getProducts', (req, res) => {
	let request = req.body;
	let count = request.count;
	let productList = fs.readFileSync(__dirname + '/mock/products.json', 'UTF8');
	let parsedData = JSON.parse(productList);

	if (count > parsedData.length) count = parsedData.length;

	res.send(parsedData.slice(0, count));
});


module.exports = router;