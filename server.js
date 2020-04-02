const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const MongoClient = require('mongodb').MongoClient;

var db;

const DB_URL = "mongodb+srv://ajay:root@cluster0-qjjx7.mongodb.net/topappsdb?retryWrites=true&w=majority"

MongoClient.connect(DB_URL, (err, client) => {
  if (err) return console.log(err)
  db = client.db('topappsdb') // whatever your database name is
  app.listen(port, () => console.log(`Magic port ${port}!`))
})


app.use(express.static(__dirname));

app.get('home/', function (req, res) {
res.sendFile(path.join(__dirname, 'index.html'));
});




