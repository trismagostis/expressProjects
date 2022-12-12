const express = require('express');
const app = express();


app.use('/files', express.static('public'));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});