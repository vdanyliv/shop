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

router.post('/getProduct', (req, res) => {
	let request = req.body;
	let id = request.id;
	let productList = fs.readFileSync(__dirname + '/mock/products.json', 'UTF8');
	let parsedData = JSON.parse(productList);

	parsedData = parsedData.find((elem) => {
		return elem.id === id;
	});

	res.send(parsedData);
});

router.post('/getUserAccount', (req, res) => {
	let request = req.body;
	let id = request.id;
	let userList = fs.readFileSync(__dirname + '/mock/accounts.json', 'UTF8');
	let parsedUserList = JSON.parse(userList);

	parsedUserList = parsedUserList.find((elem) => {
		return elem.id === id;
	});

	res.send(parsedUserList);
});

router.post('/updateAccount', (req, res) => {
	let request = req.body;
	let userId = request.id;
	let userList = fs.readFileSync(__dirname + '/mock/accounts.json');
	let parsedUserList = JSON.parse(userList);
	let userInfo = [];

	let currentAccount = parsedUserList.find((elem) => {
		return elem.id === userId;
	});

	for (let value in request) {
		currentAccount[value] = request[value];
	}

	userInfo.push(currentAccount);

	fs.writeFileSync(__dirname + '/mock/accounts.json', JSON.stringify(userInfo), 'utf-8', () => {
		res.send('Error while editing user information');
	});

	res.send('Inforamtion updated!');
});


module.exports = router;