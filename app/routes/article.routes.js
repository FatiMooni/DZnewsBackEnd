module.exports = (app) => {

    //create an instance for the controller
    const articles = require('../controllers/article.controller.js')

    //@get all articles
    app.get('/articles', articles.findAll)

    //@post new article
    app.post('/articles', articles.create)
    
}