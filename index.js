var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/static'));
app.listen(process.env.PORT);

 mongoose.connect('mongodb://linds-roman:lindsey188@ds060478.mongolab.com:60478/upgrade') 