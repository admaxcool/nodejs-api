var mongoose = require('mongoose');
var Item = require('../item/Item');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

// Parent block
describe('Item', () => {
	beforeEach((done) => {
		// Empty db before each test
		Item.remove({}, (err) => {
			done();
		});
	});

	// Test the list all items route
	describe('GET /items', () => {
		it('it should GET all the items', (done) => {
			chai.request(server)
				.get('/items')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(0);
				done();
				});
		});
	});

	// Test the /POST route
	describe('/POST item', () => {
		it('it should post an item', (done) => {
			let item = {
				key: 'key1',
				value: 'value1'
			}
			chai.request(server)
				.post('/items')
				.set('content-type', 'application/x-www-form-urlencoded')
				.send(item)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('key');
					res.body.should.have.property('value');
				done();
				});
		});
	});

	// Test the /GET/:key route
	describe('/GET item', () => {
		
		// Return 200 when key is in database
		it('it should get an item by the given key', (done) => {
			let item = new Item({
				key: 'key2',
				value: 'value2'
			});
			item.save((err, item) => {
				chai.request(server)
				.get('/items/key2')
				.set('content-type', 'application/x-www-form-urlencoded')
				.send(item)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					item.should.have.property('key');
					item.should.have.property('value').eql('value2');
				done();
				});
			});
		});

		// Return 404 when :key is not in database
		it('it should return 404 when given key is not in database', (done) => {
			chai.request(server)
			.get('/items/missingKey')
			.end((err, res) => {
				res.should.have.status(404);
			done();
			});
		});
	});
});

