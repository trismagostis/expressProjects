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


function postGet(id, cb) {
    Post.findById(id).exec(function(err, post) {
        if(err) {
            cb(err)
        } else {
            cb(null, post)
        }
    })
}

module.exports = {
    list: postList,
    get: postGet
}