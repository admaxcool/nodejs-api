var mongoose = require('mongoose');
let DBUSER = process.env.DBUSER
let DBPASSWORD = process.env.DBPASSWORD
mongoose.connect(`mongodb://${DBUSER}:${DBPASSWORD}@ds151014.mlab.com:51014/vdragon`)