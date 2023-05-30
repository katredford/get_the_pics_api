const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.get('/example/b', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })
app.use(routes); 

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});