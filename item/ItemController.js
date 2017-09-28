var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var Item = require('./Item');
module.exports = router;

// Create an item or update existing item
router.post('/', (req, res) => {
	Item.create({
		key: req.body.key,
		value: req.body.value
	},
	(err, item) => {
		if (err) return res.status(500).send("error");
		res.status(200).send(item);
	});
});

// Get the value according to key
router.get('/:key', (req, res) => {
	var timestampQuery = parseInt(req.query.timestamp)
	// Get the value less than or equal to the timestamp in query string
	if (timestampQuery) {
		Item.find({ 
			'key': req.params.key,
			'timestamp': { $lte : timestampQuery }
		}).
		sort({ 'timestamp': -1 }).
		limit(1).
		exec((err, item) => {
			if (err) return res.status(500).send('error');
			if (item.length === 0) return res.status(404).send('not found');
			res.status(200).send('value: ' + item[0].value)
		});
	} else {
		Item.find({ 'key': req.params.key }).
		sort({ 'timestamp': -1 }).
		exec((err, item) => {
			if (err) return res.status(500).send('error');
			if (item.length === 0) return res.status(404).send('not found');
			res.status(200).send('value: ' + item[0].value);
		});
	}	
}); 