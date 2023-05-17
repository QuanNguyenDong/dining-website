const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const food = require('./data/food');
// const dotenv = require('dotenv').config();

const app = express();
const port = 3000

connectDB()

app.enable("trust proxy")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/menu', require('./routes/menuRoutes'))

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', 'front-end', 'build', 'index.html')
  )
})

app.get('/menu', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', 'front-end', 'build', 'index.html')
  )
})

app.get('/contact', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', 'front-end', 'build', 'index.html')
  )
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front-end/build')));

  app.get('/', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'front-end', 'build', 'index.html')
    )
  })
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})