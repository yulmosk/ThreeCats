var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET  Карамельке page. */
router.get('/karamelka', function(req, res, next) {
  res.render('cat', { 
  	title: 'Карамелька',
  	picture: "images/karamelka.jpeg",
  	desc: "Cамый младший член семьи. Коронная фраза — «Я знаю, что надо делать!». Носит красный бант и красное платье."
  });
});

/* GET  Компот page. */
router.get('/kompot', function(req, res, next) {
  res.render('cat', { 
  	title: 'Компот',
  	picture: "images/kompont.png",
  	desc: "Cтарший котёнок в семье. Ходит в школу. Очень любит грибы, читает про них энциклопедии. Любит игры на логику. Когда очень сильно огорчается, восклицает «Ну вот!» и начинает плакать. Обожает вкусно поесть. Носит зелёный костюм и шапку."
  });
});

/* GET  Коржик page. */
router.get('/korthik', function(req, res, next) {
  res.render('cat', { 
  	title: 'Коржик',
  	picture: "images/korthik.png",
  	desc: "средний котёнок в семье. Очень любит футбол. Любит бегать, прыгать и веселиться. Иногда делает такие вещи, что из них приходится выбираться всей семье. Одет в форму моряка."
  });
});


module.exports = router;
