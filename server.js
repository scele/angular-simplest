var express       = require('express');

var app = express();
var port = process.env.PORT || 80;

app.get('/version', function(req, res) {
  res.json({
    version: 1.0,
  });
});

app.listen(port);
console.log('Listening on port ' + port);
