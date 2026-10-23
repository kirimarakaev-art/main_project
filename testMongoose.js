const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var schema = mongoose.Schema({ name: String })

schema.methods.hello = function(){
    console.log(this.name + " сказал: Hello, Go!")
}

const Gopher = mongoose.model('Gopher', schema);

const gopher = new Gopher({ name: 'Гофер' });
gopher.save().then(() => gopher.hello());
