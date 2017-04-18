var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
var MongoClient = require('mongodb').MongoClient

app.get('/booking',function(req,res){
  res.json({"teamName":"Avengers","bookedBy":"Iron Man"})
})

app.post('/login',function(req,res){
  var authBody = req.body
  MongoClient.connect('mongodb://localhost:27017/mrbooking',function(err,db){
    if (err) throw err

    db.collection('users').find({"username" : authBody.username,"password":authBody.password}).toArray(function(err,result){
      if (err){
        res.json({"message":"failed"})
      }
      if(result.length == 0){
        res.json({"message":"failed"})
      }else{
        res.json({"message":"authenticated"})
      }
    })
  })
})

app.listen(3000,function(){
  console.log('REST server is running on port 3000')
})
