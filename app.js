const express = require('express');
const app = express();
require('dotenv').config(); 
const indexRoutes = require('./src/routes/indexRouter');

app.set('view engine', 'ejs');
app.set('views', './src/views'); 
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
