const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title: String,
    img : String,
    feeds :  {
        type: Map,
        of: String
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', CategorySchema);