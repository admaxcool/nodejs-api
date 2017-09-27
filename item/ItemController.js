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

// Get the latest value according to key
router.get('/:key', (req, res) => {
	Item.find({ 'key': req.params.key }, (err, item) => {
		if (err) return res.status(500).send('error');
		if (item.length === 0) return res.status(404).send('not found');
		console.log(item)
		res.status(200).send('value: ' + item[0].value);
	}).sort({timestamp: -1});
}); 