var mongoClient = require("mongodb").MongoClient;

var doc = [{name:"Jose Fela"},{name:"Newton san joan"},{name:"Eduardo do santos pereira"}];


url = "mongodb://web:somalia989@kamino.mongodb.umbler.com:43689/mongo";
//mongoClient.connect(url,{ useNewUrlParser: true },
//function(err,conn){
       //if(err) return console.log(err);
      // global.db = conn;
  // })


   function saveCustomer(nome,idade,senha,callback){
     mongoClient.connect(url,function(err,db){
         if(err) return console.log(err)     
         db.db('mongo').collection("custon").insert({nome,idade,senha},function(err,result){
         if(err) return console.log(err);
         console.log(result);
         db.close();
         callback();

        });
      });
   }




function findCuston(callback){
  mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    db.db('mongo').collection("custon").find({}).toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      db.close();
      callback(docs);
    });
  });

}



module.exports = {saveCustomer,findCuston}