var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mcats')
var async = require("async")
var data = require('./data.js').data

async.series([
        open,
        dropDatabase,
        requireModels,
        createCats
    ],
    function(err,result){
        mongoose.disconnect()
    })

function open(callback){
    console.log("Тут")
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createCats(callback){
    async.each(data, function(catData, callback){
            var cat = new mongoose.models.Cat(catData)
            cat.save(callback)
        },
        callback)
}

function requireModels(callback){
    require("./models/cat").Cat

    async.each(Object.keys(mongoose.models),function(modelName){
        mongoose.models[modelName].ensureIndexes(callback)
    },
        callback
    )
}
