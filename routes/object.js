module.exports = (app) => {
	var object = require('../controllers/object');

	// object routes
	app.route('/object')
		.post(object.create);

	app.route('/object/:key')
		.get(object.show)
		.put(object.update);
}