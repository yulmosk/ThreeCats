var express = require('express');
var router = express.Router();
var User = require("./../models/User").User

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!!"
    res.render('index', {
                            title: 'Express',
                            counter: req.session.counter
                        });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});

/* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
    if(err) return next(err)
    if(user){
	res.send("<h1>Пользователь найден</h1>");
    } else {
	res.send("<h1>Пользователь НЕ найден</h1>")
}
})
});

module.exports = router;
