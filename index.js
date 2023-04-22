// CONFIGURING EXPRESS APP 
const express = require('express');
const app = express();
const port = 8001;
const fs = require('fs');


const path = require('path');

// Use to convert Value to key Value pair After form submit
app.use(express.urlencoded());
app.use(express.static('assets'));

// CONFIGURING VIEW ENGINE
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.set('views','./views');

// Create a Default contact list
var contactList = [
    {
        name:"Aman Tiwari",
        phone:"8303024282"
    },
    {
        name:"Shruti Mishra",
        phone:"8175973674"
    },
    {
        name:"Shubhi Mishra",
        phone:"1212185457"
    },
    {
        name:"Shruti",
        phone:"8175973674"
    }
]


// Rendering The ejs File
app.get('/',function(req,res){

    return res.render('home',{
        title: "Contact List",
        Contact_List : contactList
    });
});

app.post('/add-contact',function(req,res){

    console.log(req.body);

    contactList.push(req.body);
    return res.redirect('back');
});

app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});


// LISTENING TO THE PORT 
app.listen(port,err=>{
    if(err){
        console.log("Error connecting to the Port ",port);
        return;
    }
    console.log("Successfully connected to the Server at port",port);
});