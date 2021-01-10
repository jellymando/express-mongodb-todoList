const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/');
var router = require('./router/main')(app);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const Mongoose = require('mongoose');
Mongoose.connect('mongodb+srv://dikang:1016@cluster0.qfe5p.mongodb.net/MyTripApp?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongo...'))
.catch(e => console.log(e));

app.use("/", express.static(__dirname + "/"));

app.listen("1016", () => console.log('listen'));