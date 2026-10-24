var mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/golang2026")
var User = require("./models/user.js").User

var first_user = new User({
    username: "test_gopher",
    password: "qwerty"
})

first_user.save();
