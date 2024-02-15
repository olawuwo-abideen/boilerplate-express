let express = require('express');
let app = express();



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



















 module.exports = app;
