/**************************************
* Simple module to act as a singleton
* to expose a mongodb connection.
*
***************************************/

var db_construct = function(){
	  this.mongo = require("mongodb");
	  this.BSON = this.mongo.BSONPure;

    // Primary Function
    this.start = function (server, port, database) {
      
      // 1. Connect to the db using the given arguments
	    var server = new this.mongo.Server(server, port, {auto_reconnect: true});

      // 2. Connect to the requested "schema"
	    this.db = new this.mongo.Db(database, server);

      // 3. Open the connection
	    this.db.open(function(err, db) {
			    if (!err) { 
				      console.log("Connected to '" + database + " database"); 
			    } else {
			        console.log("Something more useful than this");
			    }
	    });  
    }
}

var base = base || new db_construct();

module.exports = base;
