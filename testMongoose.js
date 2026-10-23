const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var Topic = require('./models/topic.js').Topic

var topic = new Topic({
    title: "Горутины",
    nick: "goroutines"
})

topic.save();
