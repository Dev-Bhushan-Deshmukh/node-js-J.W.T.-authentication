const {Router}=require('express');
const userModel =require('./schema')
const appRouter=Router();
const fs=require('fs')
const jwt=require('jsonwebtoken')



appRouter.get('/' , async(req , res)=>{

 

})


appRouter.get('/createuser' ,async (req , res)=>{
    let secretKey='sdsldlsdlsdl'


    let x={

        username:'bbb',
        password:'sfjoo'
    
    
    }
// const cc=await userModel.create(x)
const cc= jwt.sign(x,secretKey)

   res.cookie('cc',cc)
   res.json(cc)
 
 
 })
 
appRouter.get('/login:cook',async(req,res)=>{
const {cook}=req.params.cook;

jwt.verify




})

module.exports=appRouter;