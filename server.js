const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require( 'body-parser' )

const items = require('./routes/api/items')

const app = express()

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  } )
  .then(() => console.log("MongoDB Connected"))
  .catch( ( err ) => console.log( err ) );
// mongoose
//   .connect("mongodb+srv://youtube:youtube1@cluster0.gps36.mongodb.net/traver?retryWrites=true&w=majority")
//   .then(() => console.log("MongoDB Connected"))
//   .catch( ( err ) => console.log( err ) );
  
app.use('/api/items', items)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server started...'))