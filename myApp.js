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
  
  























 module.exports = app;
