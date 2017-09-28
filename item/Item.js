var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
	key: String,
	value: String,
	timestamp: {
		type: Number,
		default: Math.floor(Date.now() / 1000)
	}
});

mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');