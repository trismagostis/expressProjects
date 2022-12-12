const express = require('express');
const app = express();

const hbs = require('express-handlebars');


app.use( express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });
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