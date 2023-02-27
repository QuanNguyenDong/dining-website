const express = require('express');
const path = require('path');
// const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT
} = require('./config/config');

const app = express();
const port = 3000

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

console.log(mongoURL)

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log('successfully connected to DB')
    })
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 50000);
    });
};
connectWithRetry();
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