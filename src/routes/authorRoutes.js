const express = require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors = [
        {
            name: "Dr. Paul Kalanithi",
            genre: "AutoBiography",
            img: "author1.jpg",
            book: "When Breath Becomes Air",
            details: "An Indian-American neurosurgeon and writer.",
            link: "https://en.wikipedia.org/wiki/Paul_Kalanithi"
        },
        {
            name: "A.J. Finn",
            genre: "Thriller",
            img: "author2.jpg",
            book: "The women In The Window",
            details: "Daniel Mallory is an American editor and author who writes under the name A. J. Finn.",
            link: "https://en.wikipedia.org/wiki/A._J._Finn"
        },
        {
            name: "Anees Salim",
            genre: "Fiction",
            img: "author3.jpeg",
            book: "Fly Hasina Fly",
            details: "Anees Salim is an Indian author known for his books.",
            link: "https://en.wikipedia.org/wiki/Anees_Salim"
        },
        {
            name: "Khaled Hosseini",
            genre: "Novel",
            img: "author4.jpg",
            book: "The Kite Runner",
            details: "Khaled Hosseini was born in Kabul, Afghanistan, in 1965",
            link: "https://en.wikipedia.org/wiki/Khaled_Hosseini"
        },
        {
            name: "Paula Hawkings",
            genre: "Thriller",
            img: "author5.jpeg",
            book: "The Girl on the Train",
            details: "A Zimbabwe-born British author, best known for her best-selling psychological thriller novel ",
            link: "https://en.wikipedia.org/wiki/Paula_Hawkins_(author)"
        },
        {
            name: "Joseph Annamkutty Jose",
            genre: "Memoir",
            img: "author6.jpg",
            book: "Davathinte Charanmar",
            details: "An author, vlogger, motivational speaker, a social influencer and an RJ by proffession.",
            link: "https://en.everybodywiki.com/Joseph_Annamkutty_Jose"
        },
        {
            name: "Alex Michaelides",
            genre: "Thriller",
            img: "author7.jpg",
            book: "The Silent Patient",
            details: "A bestselling British-Cypriot author and screenwriter.",
            link: "https://en.wikipedia.org/wiki/Alex_Michaelides"
        },
        {
            name: "Preeti Shenoy",
            genre: "Fiction",
            img: "author8.jpg",
            book: "Its All in the Planets",
            details: "Preeti received the Indian of the Year award by Brands Academy.",
            link: "https://en.wikipedia.org/wiki/Preeti_Shenoy"
        },
        {
            name: "Barack Obama",
            genre: "Memoir",
            img: "author9.jpg",
            book: "A Promised Land",
            details: "American politician and attorney who served as the 44th president of the United States.",
            link: "https://en.wikipedia.org/wiki/Barack_Obama"
        },
        {
            name: "Courtney Peppernell",
            genre: "Poetry",
            img: "author10.jpg",
            book: "Pillow Thoughts",
            details: "A best-selling author from Sydney, Australia, best known for her Pillow Thoughts poetry collection",
            link: "https://courtneypeppernell.net/"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title: 'Library',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("author",{
            nav,
            title: 'Library',
            author: authors[id]
        });
    });

    return authorsRouter;
}




module.exports = router;