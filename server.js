var express = require('express');
var app = express();
var middleware = require('./middleware.js')

var PORT = 3000;


app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('Hello About us!')
})

app.use(express.static(__dirname+'/public'));
app.listen(PORT, function() {
    console.log('Express server started on port '+PORT+'!');
});