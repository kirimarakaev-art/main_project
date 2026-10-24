var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
var Topic = require('../models/topic').Topic;

/* GET home page. */
router.get('/', async function(req, res, next) {
  req.session.greeting = "Hi!!!";
  try {
    var topics = await Topic.find({}, {_id: 0, title: 1, nick: 1, desc: 1});
    res.render('index', { title: 'Главная', counter: req.session.counter, topics: topics });
  } catch (err) {
    next(err);
  }
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg', { title: 'Вход', error: null });
});

/* POST login/registration page. */
router.post('/logreg', async function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  try {
    var users = await User.find({username: username});
    if (!users.length) {
      var user = new User({username: username, password: password})
      await user.save();
      req.session.user_id = user._id;
      res.redirect('/');
    } else {
      var foundUser = users[0];
      if (foundUser.checkPassword(password)) {
        req.session.user_id = foundUser._id
        res.redirect('/')
      } else {
        res.render('logreg', {title: 'Вход', error: 'Пароль не верный'});
      }
    }
  } catch (err) {
    next(err);
  }
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy();
  res.locals.user = null;
  res.redirect('/');
});

module.exports = router;
