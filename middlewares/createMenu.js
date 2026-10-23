var Topic = require("../models/topic").Topic

module.exports = async function(req, res, next) {
    res.locals.nav = []

    var menu = await Topic.find({},{_id: 0, title: 1, nick: 1});
    if (menu.length != 0) {
        res.locals.nav = menu;
    }
    next();
}
