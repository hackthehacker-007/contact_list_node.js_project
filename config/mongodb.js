const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db');

const db = mongoose.connection;

db.on('error',function(err){
    console.log(err.message);
});

db.on('open',function(){
    console.log("database is connected!");
});

module.exports =db;