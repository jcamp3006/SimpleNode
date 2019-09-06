var express = require('express');
var app = express();
var PORT = 8080                     // 8080 must be the port to deploy on openshift
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + ' !' );
});