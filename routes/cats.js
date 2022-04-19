var express = require('express');
var router = express.Router();

/* GET cats listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Это экран для списка котков</h1>');
});

/* Страница героев */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});

module.exports = router;
