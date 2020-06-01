const express = require("express");
const routes = require('./routes');
const handlebars = require("express-handlebars");
var path = require('path'); 
require('./database');

const app = express();

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.use(express.static(path.join(__dirname, '/public')));


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'handlebars');

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/automacao', function(req, res){
    res.render('automacao');
});

app.get('/geradores', function(req, res){
    res.render('geradores');
});

app.get('/sobre', function(req, res){
    res.render('sobre');
});


app.get('/view', function(req, res){
    res.render('view');
});


app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));