const express = require("express")
const cors = require('cors');
const rateLimit = require("express-rate-limit"); 
const morgan = require('morgan');
require('express-async-errors');

const dotenv = require('dotenv');
dotenv.config();

const db = require('./utils/db');

const port = process.env.PORT || 5000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 100 // limit each IP to 100 requests per windowMs
  });


const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(limiter);


(async () => {
    try {
        //console.log(process.env.MONGODB_URI);
      const dbInfo = await db.connectDB(process.env.MONGODB_URI);
      if (dbInfo) {
        console.log(`\nConnected to MongoDB successfully ${dbInfo.connection.host}`)
      }
    } catch (error) {
      console.log(`\nConnected to DB failed ${error}`)
    }
  })();


// Index - Home
app.get('/', (req, res) => {              
    res.json('Welcome to myCoin - Nguyễn Minh Thông, 1612674');
});




app.use(function (err, req, res, next) {        // default error-handler
    if (typeof err.status === 'undefined' || err.status === 500) {
        console.error(err.stack);
        res.status(500).send('View error log on console.');
      } else {
        res.status(err.status).send(err);
      }
})

app.listen(port,()=>{
    console.log(`API is running at http://localhost:${port}`)
})