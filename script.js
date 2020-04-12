const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//routes define
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(4000, () => {
  console.log("Server connected! Listen port 4000");
});