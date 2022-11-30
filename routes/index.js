var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Сиджея */
router.get('/CJ', function(req, res, next) {
  res.send("<h1>CJ page</h1>")
});

/* Страница Свита */
router.get('/Sweet', function(req, res, next) {
  res.send("<h1>Sweet page</h1>")
});

/* Страница БигСмоука */
router.get('/BigSmoke', function(req, res, next) {
  res.send("<h1>BigSmoke page</h1>")
});



module.exports = router;
