const express = require('express');
const app = express();

const hbs = require('express-handlebars');


app.use( express.static('public'));

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');


const Post = require('./app/models/Post');

const post = require('./app/controllers/post.controller');

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });
 

});

app.get('/mongoose', function(req, res){
   

    let newPost = new Post({
        title: 'Kolejny',
        content: 'Jestem postem piątym szóstym',
        isPublic: true
    });

    newPost.save(function(err){

        console.log(err);
        console.log('Zapisałem');
    })


    res.send('done');
});


app.get('/blog', function(req, res){
    post.list(function(err, posts){
        if(err) res.send(err);
        // console.log(posts);
        res.render('blog', {posts});
    });
});



app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});