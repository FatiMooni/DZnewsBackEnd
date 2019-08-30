module.exports = (app) => {

    //create an instance for the controller
    const users = require('../controllers/user.controller')

    //@post new article
    app.post('/users', users.create)
}