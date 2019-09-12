const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    userID : String,
    articleID : String ,
    title: String,
    categoryID : String,
    uri : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);