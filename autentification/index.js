require('dotenv').config();

const express = require('express');
const app = express();

const hbs = require('express-handlebars');

const blogRouter = require('./app/routes/blogRouter');
const postApiRouter = require('./app/api/postApi');
const userApiRouter = require('./app/api/userApi');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use( express.static('public'));

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');


/* Routes */
app.use('/blog', blogRouter);

/* API Routes */
app.use('/api/post', postApiRouter);
app.use('/api/user', userApiRouter);

app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });
});


app.listen(process.env.PORT || 8080, function(){
    console.log('Serwer Node.js działa');
});