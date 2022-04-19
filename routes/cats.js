var express = require('express');
var router = express.Router();
var Cat = require("../models/cat").Cat
var async = require("async")


/* GET cats listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Это экран для списка котков</h1>');
});

/* Страница героев */
router.get("/:nick", function(req, res, next) {
    async.parallel([
        function(callback){
            Cat.findOne({nick:req.params.nick}, callback)
        },
        function(callback){
            Cat.find({},{_id:0,title:1,nick:1},callback)
        }
    ],
    function(err,result){
        if(err) return next(err)
        var cat = result[0]
        var cats = result[1] || []
        if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
            res.render('cat', {
                title: cat.title,
                picture: cat.avatar,
                desc: cat.desc,
                menu: cats
            });
        })

});

module.exports = router;
