const express = require('express');
const signRouter=express.Router();
function router(nav){
    signRouter.get('/Signin',function(req,res){
        res.render('signin',{
            nav,
            title: "Library"
        })
    });
    signRouter.get('/Signup',function(req,res){
        res.render('signup',{
            nav,
            title: "Library"
        })
    })
    return signRouter;
}




module.exports = router;