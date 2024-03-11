const express=require('express');
const port=8000;
const app=express();
const db=require('./dbconnection')
const appRoute=require('./routes')

app.use(appRoute);











app.listen(port,(error)=>{
if(error)
{

    console.log(error);
}
else{

console.log(`App running at ${port}`)

}

})