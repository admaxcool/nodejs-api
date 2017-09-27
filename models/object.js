var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectSchema = new Schema({
	key: String,
	value: String,
	timestamp: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Objects', ObjectSchema);