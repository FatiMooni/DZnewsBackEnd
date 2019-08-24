module.exports = (app) => {

    //create an instance for the controller
    const articles = require('../controllers/article.controller.js')

    //@get all articles
    app.get('/articles', articles.findAll)

    //@post new article

    // Create and Save a new article
    exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "article content can not be empty"
        });
    }

    // Create a Note
    const article = new article({
        title: req.body.title || "Untitled Article", 
        id : req.body.id,
        theme : req.body.theme,
        resume : req.body.resume,
        author : req.body.author,
        date : req.body.date,
        uri : req.body.uri,
        content: req.body.content
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};
}