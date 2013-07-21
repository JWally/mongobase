// 
var db_construct = function(){
	  this.mongo = require("mongodb"),	
	  this.BSON = this.mongo.BSONPure;


    this.start = function (server, port, database) {
	    var server = new this.mongo.Server(server, port, {auto_reconnect: true});
	    this.db = new this.mongo.Db("diet", this.server);

	    this.db.open(function(err, db) {
			    if (!err) { 
				    console.log("Connected to '" + database + "diet' database"); 
			    } else {
			        console.log("Something more useful than this");
			    }
	    });  
    }
}

var base = base || new db_construct();

module.exports = function(){
	return base;
}
