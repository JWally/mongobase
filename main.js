var db_construct = function(){
	this.mongo = require('mongodb'),	
	this.Server = this.mongo.Server,
	this.Db = this.mongo.Db,
	this.BSON = this.mongo.BSONPure,


	this.server = new this.Server('localhost', 27017, {auto_reconnect: true});
	this.db = new this.Db('diet', this.server);

	this.db.open(function(err, db) {
			if(!err) { 
				console.log("Connected to 'diet' database"); }
	});

}

var base = base || new db_construct();

module.exports = function(){
	return base;
}
