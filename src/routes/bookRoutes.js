const express = require('express');
const booksrouter=express.Router();
function router(nav,books){
    booksrouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title: 'Library',
            books
        });
    });
    booksrouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("book",{
            nav,
            title: 'Library',
            book: books[id]
        });
    });

    return booksrouter;
}




module.exports = router;