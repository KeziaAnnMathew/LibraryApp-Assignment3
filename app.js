const express = require('express');
const app= new express();
const port = process.env.PORT || 5050;
const nav =[
    {
        link:'/books',name: 'Books'
    },
    {
        link:'/authors',name: 'Authors'
    },
    {
        link:'/addbook',name: 'Add a Book'

    },
    {
        link:'/addauthor',name: 'Add an Author'

    },
    {
        link:'/Signin',name: 'Log In'
    },
    {
        link:'/Signup',name: 'Sign Up'
    },
    {
        link:'/',name: 'Logout'
    }
];
var books = [
    {
        title: "When Breath Becomes Air",
        author: "Dr. Paul Kalanithi",
        genre: "Autobiography",
        img: "Book1.jpg",
        details:"A memoir about his life and illness, battling stage IV metastatic lung cancer.",
        link:"https://en.wikipedia.org/wiki/When_Breath_Becomes_Air"
    },
    {
        title: "The Women In the Window",
        author: "A.J. Finn ",
        genre: "Thriller",
        img: "book2.jfif",
        details:"Agoraphobic Dr. Anna Fox witnesses something she shouldn't while keeping tabs on the Russell family, the seemingly picture perfect clan that lives across the way.",
        link:"https://en.wikipedia.org/wiki/The_Woman_in_the_Window_(novel)"
    },
    {
        title: "Fly Hasina Fly",
        author: "Anees Salim",
        genre: "Fiction",
        img: "Book3.jfif",
        details:"All about Hasina Mansoor, her dreams, her thoughts, her realities.",
        link:"https://www.goodreads.com/book/show/51118360-fly-hasina-fly"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Novel",
        img: "book4.jpg",
        details:"it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
        link:"https://en.wikipedia.org/wiki/The_Kite_Runner"
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        genre: "Thriller",
        img: "book5.jfif",
        details:"Narratives from three different women about relationship troubles and binge drinking.",
        link:"https://en.wikipedia.org/wiki/The_Girl_on_the_Train_(novel)"
    },
    {
        title: "Daivathinte Charanmar",
        author: "Joseph Annamkutty Jose",
        genre: "Memoir",
        img: "book6.jpg",
        details:"A thanks to different people who helped the author at some point in his life one way or the other",
        link:"https://dcbookstore.com/books/daivathinte-charanmar---you-could-be-one"
    },
    {
        title: "The Silent patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        img: "book7.png",
        details:"The story is narrated by an English psychotherapist, dealing with a patient who turns mute after murdering her husband.",
        link:"https://en.wikipedia.org/wiki/The_Silent_Patient"
    },
    {
        title: "It's All in the Planets",
        author: "Preeti Shenoy",
        genre: "Romance",
        img: "book8.jpg",
        details:"One man, two women and the trap called Destiny. Some things, they say, are all in the planets.",
        link:"https://www.goodreads.com/book/show/31359150-it-s-all-in-the-planets"
    },
    {
        title: "A Promised Land",
        author: "Barack Obama",
        genre: "Memoir",
        img: "book9.png",
        details:"A memoir by Barack Obama, President of the United States from 2009 to 2017.",
        link:"https://en.wikipedia.org/wiki/A_Promised_Land"
    },
    {
        title: "Pillow Thoughts",
        author: "Courtney Peppernell",
        genre: "Poetry",
        img: "book10.jfif",
        details:"A collection of poetry and prose about heartbreak, love, and raw emotions.",
        link:"https://books.google.co.in/books/about/Pillow_Thoughts.html?id=5PwoDwAAQBAJ&source=kp_book_description&redir_esc"
    }
];
const booksrouter= require('./src/routes/bookRoutes')(nav,books);
const authorsRouter= require('./src/routes/authorRoutes')(nav);
const addRouter=  require('./src/routes/addRoutes')(nav);
const signRouter= require('./src/routes/signRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksrouter);
app.use('/',addRouter);
app.use('/',signRouter);
app.use('/authors',authorsRouter);
app.get('/',function(req,res){
    res.render("home",{
        nav,
        title: 'Library',
        books
    });
});
app.get('/index',function(req,res){
    res.render("index",{
        nav,
        title: 'Library',
        books
    });
});


app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
