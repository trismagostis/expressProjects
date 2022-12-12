const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/express-blog',  {useNewUrlParser: true, useUnifiedTopology: true});


const schema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    created_at: {type: Date, default: Date.now},
    isPublic: Boolean
});


module.exports = mongoose.model('Post', schema);