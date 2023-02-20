const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()

const app = express();
const port = 3000

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/api/menu', require('./routes/menuRoutes'))

// app.get('/', (req, res) => {
//   res.send("Hello world")
// })

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../front-end/build')));

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../', 'front-end', 'build', 'index.html')
  )
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})