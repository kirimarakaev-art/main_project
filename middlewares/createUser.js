var User = require("../models/user").User;

module.exports = async function(req, res, next) {
    res.locals.user = null

    if (req.session.user_id) {
        res.locals.user = await User.findById(req.session.user_id);
    }
    next();
}
