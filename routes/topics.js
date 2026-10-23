var express = require('express');
var router = express.Router();
var Topic = require('../models/topic').Topic;

/* Страница темы */
router.get('/:nick', async function(req, res, next) {
  var topics = await Topic.find({nick: req.params.nick});
  if (!topics.length) return next(new Error("Нет такой темы в справочнике Go"));
  var topic = topics[0];
  res.render('topic', {
    title: topic.title,
    picture: topic.avatar,
    desc: topic.desc
  });
});

module.exports = router;
