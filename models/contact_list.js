const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
     name:{
         type:'string',
         require:true
     },
     phone:{
        type:'string',
        require:true
     }
    });
    
    const contact=mongoose.model('Contact',contactschema);

    module.exports =contact;