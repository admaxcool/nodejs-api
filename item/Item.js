var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
	key: String,
	value: String,
	timestamp: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');