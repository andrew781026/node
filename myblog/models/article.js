var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient ;

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

function Article(){};

module.exports = Article ;

//  新增文章,並儲存其資訊
Article.prototype.save = function (article,callbackFunction) {

    // article 是要存入資料庫的文章資料

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(connectErr, db) {
        if ( connectErr ){
            return callbackFunction(connectErr);
        }
        console.log("We are connected in insert function");

        // Get the collection
        var articles = db.collection('articles');

        articles.findOne({title:article.title,meta:article.meta},function (findErr, findResult) {

            if ( findErr ){
                db.close();
                return callbackFunction(findErr);
            }else {
                if ( findResult != null ){
                    db.close();
                    return callbackFunction('已有資料錯誤'+JSON.stringify(findResult));
                }else{
                    articles.insertOne(article, function(insertErr, insertResult) {
                        db.close();

                        if ( insertErr ){
                            return callbackFunction(insertErr);
                        }else {
                            return callbackFunction(null,insertResult.ops[0]);
                        }

                    });

                }
            }

        });


    });


};

//  取得文章資訊
Article.prototype.getByID = function (qryID, callbackFunction) {

    var o_id = new mongo.ObjectID(qryID);

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(connectErr, db) {
        if ( connectErr ){
            return callbackFunction(connectErr);
        }
        console.log("We are connected in find function");

        // Get the collection
        var articles = db.collection('articles');
        articles.findOne({_id:o_id}, function(insertErr, r) {

            // console.log(r);
            // Finish up test
            db.close();

            if ( insertErr ){
                return callbackFunction(insertErr);
            }else {
                return callbackFunction(null,r);
            }

        });
    });

};

//  取得文章資訊
Article.prototype.get = function (qryTitle,qryMeta, callbackFunction) {

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(connectErr, db) {
        if ( connectErr ){
            return callbackFunction(connectErr);
        }
        console.log("We are connected in find function");

        // Get the collection
        var articles = db.collection('articles');
        articles.findOne({title:qryTitle,meta:qryMeta}, function(insertErr, r) {

            // console.log(r);
            // Finish up test
            db.close();

            if ( insertErr ){
                return callbackFunction(insertErr);
            }else {
                return callbackFunction(null,r);
            }

        });
    });

};

//  新增文章,並儲存其資訊
Article.prototype.update = function (article,callbackFunction) {

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(connectErr, db) {
        if ( connectErr ){
            return callbackFunction(connectErr);
        }
        console.log("We are connected in update function");

        // Get the collection
        var products = db.collection('articles');
        products.findOneAndUpdate({title:article.title,meta:article.meta},article, function(insertErr, r) {

            // console.log(r);
            // Finish up test
            db.close();

            if ( insertErr ){
                return callbackFunction(insertErr);
            }else {
                return callbackFunction(null,r.value);
            }

        });
    });


};

//  新增文章,並儲存其資訊
Article.prototype.delete = function (qryTitle,qryMeta, callbackFunction) {

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(connectErr, db) {
        if ( connectErr ){
            return callbackFunction(connectErr);
        }
        console.log("We are connected in delete function");

        // Get the collection
        var products = db.collection('articles');
        products.findOneAndDelete({title:qryTitle,meta:qryMeta}, function(insertErr, r) {

            // console.log(r);
            // Finish up test
            db.close();

            if ( insertErr ){
                return callbackFunction(insertErr);
            }else {
                // r.ops[0].articleID = r.ops[0]._id ;
                return callbackFunction(null,r.value);
            }

        });
    });

};
