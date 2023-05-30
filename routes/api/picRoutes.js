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

//# router.METHOD(PATH, HANDLER)
// Where:

// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.
// var router = express.Router()

  
  router.get( "/", (req, res) => {
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

  router.post( "/",({body}, res) => {
  const sql = `INSERT INTO pics (title, url, description) VALUES (?, ?, ?)`;
  const addPics = [body.title, body.url, body.description]
connection.query(sql, addPics, (err, result) => {

    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'pic added',
    });
  });
  });

    router.delete( "/:id",(req, res) => {
  const sql = `DELETE FROM pics WHERE id=?`;
  const deletePics = [req.params.id]
connection.query(sql, deletePics, (err, result) => {

    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: `pic #${deletePics} deleted`,
    });
  });
});


module.exports = router