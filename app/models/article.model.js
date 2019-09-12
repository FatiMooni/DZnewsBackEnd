const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    userID : String,
    articleID : Sreing ,
    title: String,
    categoryID : String,
    uri : String,
    img : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);