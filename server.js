var express       = require('express');

var app = express();
var port = process.env.PORT || 80;

app.use('/src', express.static('src'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html'); });

app.get('/version', function(req, res) {
  res.json({
    version: 1.0,
  });
});

app.listen(port);
console.log('Listening on port ' + port);
