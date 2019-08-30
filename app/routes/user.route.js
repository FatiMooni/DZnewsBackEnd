module.exports = (app) => {

    //create an instance for the controller
    const users = require('../controllers/user.controller')

    //@post new user
    app.post('/users', users.create)
    

    //@get all users
    app.get('/users' , users.findAll)

    
    
}