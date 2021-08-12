const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bd=require('./config/mongodb');
const contact=require('./models/contact_list');
app.use(express.urlencoded());
app.use(express.static('./assets'));
const port =8000;

// use express router
app.use('/', require('./routes'));
app.use(expressLayouts);


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './view');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
