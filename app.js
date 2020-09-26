const express = require('express'),
    parser =require('body-parser'),
    mongo = require('./db/mongo');

let app = express();


app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use('/',require('./routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("Route not found")
});

app.listen(3000,()=> {
  console.log('listening....')
} )

module.exports = app;
