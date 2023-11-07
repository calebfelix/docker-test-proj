var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Your Docker container is active!!");
});

app.listen((3000),()=>{
    console.log("listening at port 3000")
});