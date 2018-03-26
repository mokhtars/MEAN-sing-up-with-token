const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database')
const path = require('path')

mongoose.Promise= global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Can\'t connect to database: ', (err));
    }
    else{
        console.log('Connected to database: ' +config.db);
    }
});
app.use(express.static(__dirname +'/Client/dist/'))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname +'/Client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('Listening in port 8080')
});