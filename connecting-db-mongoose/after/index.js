const express = require('express');
const app = express();

const hbs = require('express-handlebars');


app.use( express.static('public'));

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');


const Post = require('./app/models/Post');

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });


});

app.get('/mongoose', function(req, res){
   
    Post.find({title: 'Post trzeci'}).lean().exec(function(err, posts) {
        console.log(posts);
    });


    let newPost = new Post({
        title: 'Post czwarty',
        content: 'Jestem postem czwartym',
        isPublic: true
    });

    newPost.save(function(err){

        console.log(err);
        console.log('Zapisałem');
    })


    res.send('done');
});


app.get('/blog/:id?', function(req, res){
    res.render('blog', {
        title: 'Tytuł posta',
        content: 'Treść posta',
        id: req.params.id
    });
});



app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});