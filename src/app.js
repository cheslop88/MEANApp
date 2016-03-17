'use strict';

var express = require('express'),
    parser = require('body-parser'),
    router = require('./api');

var app = express();

require('./database');
/*require('./seed');*/

app.use('/', express.static('public/app'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function(){
  console.log("Server running on port 3000");
});