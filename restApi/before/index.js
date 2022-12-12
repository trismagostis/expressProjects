const express = require('express');
const app = express();

const hbs = require('express-handlebars');
const cors = require("cors");
const blogRouter = require('./app/routes/blogRouter');
const postApi = require('./app/api/postApi');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use( express.static('public'));

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');



app.get('/', function(req, res){
    res.render('home', {
        title: 'Tytuł z Express',
        content: 'Cześć programisto'
    });
 
});



/* Routes */
app.use('/blog', blogRouter);

/* Api routes */
app.use('/api/post', postApi);



app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});