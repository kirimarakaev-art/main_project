var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Golang' });
});

/* Страница «История Go» */
router.get('/history', function(req, res, next) {
    res.render('topic', {
        title: "История Go",
        picture: "/images/history.png",
        desc: "Язык Go был создан в Google в 2007 году Робертом Гризмером, Робом Пайком и Кеном Томпсоном. Публично представлен в 2009 году, версия 1.0 вышла в 2012. Цель — простой, быстрый и удобный язык для серверных программ."
    });
});

/* Страница «Горутины» */
router.get('/goroutines', function(req, res, next) {
    res.render('topic', {
        title: "Горутины",
        picture: "/images/goroutines.png",
        desc: "Горутины — это лёгкие потоки выполнения, которыми управляет рантайм Go. Запускаются ключевым словом go перед вызовом функции, занимают мало памяти, поэтому их можно создавать тысячами."
    });
});

/* Страница «Каналы» */
router.get('/channels', function(req, res, next) {
    res.render('topic', {
        title: "Каналы",
        picture: "/images/channels.png",
        desc: "Каналы — способ обмена данными между горутинами. Создаются через make(chan T), значения отправляются и принимаются оператором <-. Бывают буферизированными и небуферизированными."
    });
});

/* Страница «Установка и первая программа» */
router.get('/install', function(req, res, next) {
    res.render('topic', {
        title: "Установка и первая программа",
        picture: "/images/install.png",
        desc: "Скачайте установщик с go.dev, проверьте установку командой go version, создайте файл main.go с функцией main и запустите программу командой go run main.go."
    });
});

module.exports = router;