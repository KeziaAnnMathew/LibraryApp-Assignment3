const express = require('express');
const addRouter=express.Router();
function router(nav){
    addRouter.get('/addbook',function(req,res){
        res.render("addbook",{
            nav,
            title: 'Library',
            heading: 'Add A Book'
        });
    });
    addRouter.get('/addauthor',function(req,res){
        res.render("addauthor",{
            nav,
            title: 'Library',
            heading: 'Add Author'
        });
    });

    return addRouter;
}




module.exports = router;