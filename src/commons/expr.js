var express = require("express");

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(request, response){

  response.send("<h1>Главная страница</h1>");
});
app.get("/about", function(request, response){

  response.send("<h1>О сайте</h1>");
});
app.get("/rumba", function(request, response){
  console.log('Hi ubludok!!!');

  response.send("<h1>Контакты</h1>");
});
app.get("/v3", function(request, response){

  response.send("<h1>Express from Moscow</h1>");
});
app.post('/v3', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo + ' Hello Ilmir');
});

app.listen(8088);
