var MongoClient = require('mongodb').MongoClient ;
  //  , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
   // assert.equal(null, err);
    console.log("Connected correctly to server");

    // Get the collection
    var products = db.collection('product');
    products.insertOne({'id':'A0010030087','name':'PSC1812-N'}, function(err, r) {

        console.log(r);
        // Finish up test
        db.close();
    });
});