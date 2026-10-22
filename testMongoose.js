const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

const Gopher = mongoose.model('Gopher', { name: String });

const gopher = new Gopher({ name: 'Гофер' });
gopher.save().then(() => console.log('Гофер сохранён'));
