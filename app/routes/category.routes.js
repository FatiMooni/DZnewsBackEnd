module.exports = (app) => {

    //create an instance for the controller of categories
    const category = require('../controllers/category.controller')

    //@get all categories
    app.get('/categories', category.findAll)

    //@post new category
    app.post('/categories', category.create)

   //@get onecategory
   app.get('/categories/:id', category.findOne)

   //@delete one category
   app.delete('/categories/:id', category.delete)
    
}