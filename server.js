const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'x',
    database: 'get_pics_db'
  }
  
);

app.get('/api/pics', (req, res) => {
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


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});