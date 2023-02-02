const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.set("view engine", "ejs");

app.get('/', function(req,res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
        
    }


    var day = today.toLocaleString("en-US", options);



    res.render("list", {kindOfDay: day})
});


app.listen(3002, function(){
    console.log("server up and running")
})