const parser = require("body-parser");
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel');
    const guestsCollection = db.collection('guests');
    const guestsRouter = createRouter(guestsCollection);
    app.use('/api/guests', guestsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

//git test