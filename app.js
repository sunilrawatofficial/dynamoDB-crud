var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
var bodyParser = require('body-parser')
var cors = require('cors')
const dynamoDB = require('./database/dynamoDB')


var app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(bodyParser.json())
app.use(cors())

const applicationRoutes = require('./routes');
dynamoDB.connect();
// console.log(readDynamoDBInstance);




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ping', async (req, res, next) => {
   res.send({
      status: "OK",
      message: "welcome to dynamoDB-crud"
   })
});
app.use(applicationRoutes.userRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;
