const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    userID : String,
    articleID : String ,
    title: String,
    categoryID : String,
    categoryOrigin : String,
    uri : String,
    publicationDate : String,
    author : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);