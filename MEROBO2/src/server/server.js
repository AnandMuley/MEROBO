var express = require('express')
var bodyParser = require('body-parser')
var base64Encoder = require('urlsafe-base64')
var app = express()
app.use(bodyParser.json())
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
var MongoClient = require('mongodb').MongoClient
var DB_URL = 'mongodb://192.168.2.163:27017/mrbooking'
var db

MongoClient.connect(DB_URL,(err,databaseHandle)=>{
  if(err) return console.log(err)
  db = databaseHandle
  app.listen(3000,function(){
    console.log('REST server is running on port 3000')
  })
})

app.get('/booking/searchby',function(req,res){
  db.collection('bookings').find({"roomName":req.query.meetingRoom,"startTime":{"$gte":new Date()}}).toArray(function(err,result){
    if(err){
      res.json({"message":err})
    }else {
      res.json(result)
    }
  })
})

app.post('/login',function(req,res){
  var authBody = req.body
  var encodedPwd = base64Encoder.encode(new Buffer(authBody.password).toString('base64'))
  console.log("BUFF : "+encodedPwd)
    db.collection('users').find({"username" : authBody.username,"password":encodedPwd}).toArray(function(err,result){
      console.log(err)
      if (err){
        res.json({"message":err})
      }
      console.log(JSON.stringify(result))
      if(result.length == 0){
        res.json({"message":"failed"})
      }else{
        res.json({"message":"authenticated"})
      }
    })
})
