var express = require('express');
var router = express.Router();
var Cat = require("../models/cat").Cat

/* GET home page. */
router.get('/', function(req, res, next) {
  Cat.find({},{_id:0,title:1,nick:1},function(err,menu){
    req.session.greeting = "Hi!!!!"
    res.render('index', {
                            title: 'Express',
                            menu: menu
                        });
    })
});

module.exports = router;
