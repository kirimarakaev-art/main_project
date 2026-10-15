var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Golang' });
});

/* Страница «История Go» */
router.get('/history', function(req, res, next) {
    res.send("<h1>История Go</h1>")
});

/* Страница «Горутины» */
router.get('/goroutines', function(req, res, next) {
    res.send("<h1>Горутины</h1>")
});

/* Страница «Каналы» */
router.get('/channels', function(req, res, next) {
    res.send("<h1>Каналы</h1>")
});

/* Страница «Установка и первая программа» */
router.get('/install', function(req, res, next) {
    res.send("<h1>Установка и первая программа</h1>")
});

module.exports = router;