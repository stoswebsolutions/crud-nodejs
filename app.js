var express = require('express')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require('body-parser')
var userdetailsrouter = require('./routes/userdetailsrouter')

app.use(bodyparser.json())
app.use(cors())

app.use('/getdata', userdetailsrouter)
app.use('/postdata', userdetailsrouter)
app.use('/deletedata', userdetailsrouter)
app.use('/modifydata', userdetailsrouter)
app.use('/getspecificdata', userdetailsrouter)

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => { console.log(err) })

app.listen(4000, err => {
    if (!err) {
        console.log('App is listening...');
    }
    else {
        console.log('App crashed');
    }
})