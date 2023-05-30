const router = require('express').Router();
const mysql = require('mysql2');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'x',
    database: 'get_pics_db'
  }
  
);

//# app.METHOD(PATH, HANDLER)
// Where:

// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.
// var router = express.Router()

router.route('/')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next()
  })
  
  .get((req, res) => {
  const sql = `SELECT * FROM pics`;
  
connection.query(sql, (err, result) => {

    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: result
    });
  });
});


module.exports = router