const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
username:{
type:String,
required:true

},
password:{
    type:String,
    required:true
    
    }
    




})

const userModel=mongoose.model('usermeta',userSchema);


module.exports=userModel