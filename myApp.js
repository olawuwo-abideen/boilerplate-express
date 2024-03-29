const express = require('express');
const app = express();
const bodyParser = require('body-parser')



app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

// console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });
  

app.use(bodyParser.urlencoded({extended: false})).


  app.get('/json', function(req, res){
    const helloJSON = 'Hello json';
    let message;
    if (process.env.MESSAGE_STYLE === 'uppercase'){
      message = helloJSON.toUpperCase();
    } else{
      message = helloJSON;
    }
    const data = {
      "message": message
    };
    res.json(data);
  })
  
  app.use(function (req, res,  next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
  });



  app.get('/now', function(req, res, next) {
    req.time = (new Date()).toString();
    next();
  }, function(req, res) {
    res.json({time: req.time});
  });

  app.get('/:word/echo', function(req, res){
    res.json({echo: req.params.word})
  });


  app.route('/name')
  .get, (function(req, res){
    res.json({name: `${req.query.first} ${req.query.last}`});
  });
  app.route("/name")
  .post (function(req, res){
    res.json({name: `${req.body.first} ${req.body.last}`});
  });














 module.exports = app;
