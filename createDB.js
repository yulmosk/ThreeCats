const {MongoClient} = require('mongodb')
var data = require("./data.js").data 

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
    try  {
        await client.connect();
        const database = client.db("threecats");
        const cats = database.collection("cats");
        const result = await cats.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);

    } finally {
        await client.close();
    }
}
run()


// MongoClient.connect("mongodb://localhost:27017/threecats", function(err,client){
//     console.log(arguments)
//     if(err) throw err
//     
//     db.dropDatabase()	
//     var collection = db.collection("cats")
//     collection.insertMany(data,function(err,result){
//         db.close()
//     })
// })