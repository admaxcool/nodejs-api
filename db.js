var mongoose = require('mongoose');
let DBUSER = process.env.DBUSER
let DBPASSWORD = process.env.DBPASSWORD

if (process.env.NODE_ENV === 'test') {
	mongoose.connect(process.env.DB_TEST_URL)
} else {
	mongoose.connect(process.env.DB_URL)
}
