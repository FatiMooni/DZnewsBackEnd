module.exports = (app) => {

    //create an instance for the controller
    const articles = require('../controllers/article.controller.js')

    //@get all articles
    app.get('/articles', articles.findAll)

    //@post new article
    app.post('/articles', articles.create)

   //@get one article
   app.get('/articles/:id', articles.findOne)

   //@delete one article
   app.delete('/users/:id/articles/:article_id', articles.delete)

   //@get saved articles of a user
   app.get('/users/:id/articles' , articles.findAllForUser)

   //@post saved articles of a user
   app.post('/users/:id/articles' , articles.addArticle)


    
}