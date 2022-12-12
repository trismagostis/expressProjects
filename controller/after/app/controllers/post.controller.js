const Post = require('../models/Post');


function postList(cb) {
    Post.find().lean().exec(function(err, posts) {
        if(err) {
            cb(err)
        } else {
            cb(null, posts)
        }
    });
}

module.exports = {
    list: postList
}