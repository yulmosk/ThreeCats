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
    Cat.findOne({nick:req.params.nick}, function(err, cat){
        if(err) return next(err)
        if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
            res.render('cat', {
                title: cat.title,
                picture: cat.avatar,
                desc: cat.desc,
            });       
         })
});

module.exports = router;
