var express = require('express')
  , app = express()
  , server = app.listen(8095)
  , io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/static/'));
