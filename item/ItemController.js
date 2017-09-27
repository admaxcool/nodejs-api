var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Item = require('./Item');
module.exports = router;

// Create an item
router.post('/', (req, res) => {
	Item.create({
		key: req.body.key,
		value: req.body.value
	},
	(err, item) => {
		if (err) return res.status(500).send("Error!");
		res.status(200).send(item);
	});
});