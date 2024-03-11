const mongoose=require('mongoose');

const conn=mongoose.connect('mongodb://127.0.0.1:27017/SystemUsers',{ useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('connected',()=>{
    console.log('connected to database')
})
db.on('disconnected',()=>{
    console.log('Disconnected')
})

db.on('open',()=>{
    console.log('connection open')
})

db.on('close',()=>{
    console.log('connected closed')
})















            module.exports=conn