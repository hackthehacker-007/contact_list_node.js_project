const contact=require('../models/contact_list');

module.exports.home = function(req, res){
    
    contact.find({},function(err,contact){
        if(err){console.log('error'); return;}
        return res.render('home', {
            title: "Home",
            contact_list:contact
        });
    })
   
}

//populating data base
module.exports.populating = function(req, res){
   
    contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, post){
        if(err){console.log('error in creating a contact'); return;}

        return res.redirect('back');
    });
}


//delete contact from data base


module.exports.delete= function(req, res){
   
    let Id=req.query.id;
    
    contact.findByIdAndDelete(Id, function(err)
    {  
        if(err){console.log('error in deleting a contact'); return;}

        return res.redirect('back');

    });
}


