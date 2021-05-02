require('dotenv').config();
var createError     = require("http-errors");
var express         = require("express");
var path            = require("path");
var cookieParser    = require("cookie-parser");
var logger          = require("morgan");
var middleware      = require('./helpers/middleware')
var body            = require('body-parser');
var app             = express();
var server          = require("http").Server(app);
var io              = require("socket.io")(server);
var middleware      = require('./helpers/middleware');
var blockChain 		= new (require("./models/block-chain"))();
var indexRouter     = require("./routes/index");
global.listNode = [];
global.mining = require('./helpers/virtual/nodeMining');
io.on("connection", function (socket) {
	socket.emit('storeSocketId',socket.id);
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(body.urlencoded({extended:false}));
app.use(body.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(middleware.parseUser);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
global.io = io;
global.blockChain = blockChain;
module.exports = {
  app: app,
  io: io,
  server: server,
};
