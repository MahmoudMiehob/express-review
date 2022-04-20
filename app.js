const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const birds = require('./birds')
const PORT = 3000;


app.set('etag', false);



// app.get('/',(req,res)=>{
//     res.send('hello world')
// });



// ****************************************Routing ****************************************


//post
// app.post("/",(req,res)=>{
//     res.send("Got a POST request")
// });

//put
// app.put("/puts", (req, res) => {
//     res.send("Got a PUT request at ")
// });

//delete
// app.delete("/user", (req, res) => {
//     res.send("Got a delete request at ")
// });

// ************************************* End Routing *************************************

// ************************************* Routing Type ************************************

// app.get("/about", (req, res) => {
//     res.send("about");
// });
// app.get("/random.text", (req, res) => {
//     res.send("random.text");
// });

// app.get("/ab?cd", (req, res) => {
//     res.send("ab?cd");
// });

// app.get("/ab+cd", (req, res) => {
//     res.send("ab+cd");
// });

// app.get("/ab*cd", (req, res) => {
//     res.send("ab*cd");
// });

// app.get("/ab(cd)?e", (req, res) => {
//     res.send("ab(cd)?e");
// });

// app.get(/a/, (req, res) => {
//     res.send("/a/");
// });

// app.get(/.*fly$/, (req, res) => {
//     res.send("/.*fly$/");


// ************************************* End Routing Type ********************************

// ************************************* Routing params **********************************


// app.get('/users/:userId/books/:bookId', (req, res) => {
//     res.send(req.params)
// })
// app.get('/users/:userId/books/:bookId', (req, res) => {
// res.send(req.params.userId)
// })


// ************************************* End Routing Type ********************************


// app.get("/example/a", (req, res) => {
//     res.send("Hello from A!");
// });


// app.get(
//     "/example/b",
//     (req, res, next) => {
//         console.log("the response will be sent by the next function ...");
//         next();
//     },
//     (req, res) => {
//         res.send("Hello from B!");
//     }
// );

// ************************************  start res.json  *********************************


// app.get("/", (req, res,next) => {
//     let Student = { name: "danial", age: 24, courses: ["html", "css"], isAdmin: true };
//     stringData = JSON.stringify(Student);
//     jsonData = JSON.parse(stringData);
//     //res.json(stringData);
//     res.json(jsonData);
// });

//*************************************   end res.json  ***********************************

//************************************** start res.status********************************** 

// app.get("/", (req, res) => {
//     res.end();
// });


//************************************** end res.status************************************
// *************************************start res.redirect ********************************


// app.get("/", (req, res) => {
//     let v = false;
//     //let v = true;
//     if (v) res.redirect("/about");
//     else res.redirect("/login");
// });
// app.get("/about", (req, res) => {
//     res.send("about page !!!");
// });
// app.get("/login", (req, res) => {
//     res.send("login page !!!");
// });


// app.get("/", (req, res) => {
//     res.redirect("http://google.com");
// });


// *************************************end res.redirect **********************************


// app.get("/", (req, res) => {
// res.set('Content-Type', 'text/html')
// //res.send(Buffer.from("whoop"));
// res.send({ some: "json" });
// // res.send("<p>some html</p>");
// // res.status(404).send("Sorry, we cannot find that!");
// // res.status(500).send({ error: "something blew up" });


// });

//********************************************************************************


app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set("view engine", "hbs");

//**********************************************************************************

// app.get('/', function(req, res) {
//     res.render('home', {
//         post: {
//             author: 'Janith Kasun',
//             image: 'https://picsum.photos/500/500',
//             comments: []
//         }
//     });
// });


// app.get('/', function(req, res) {
//     res.render('home', {
//         post: {
//             author: 'Janith Kasun',
//             image: 'https://picsum.photos/500/500',
//             comments: [
//                 'This is the first comment',
//                 'This is the second comment',
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
//             ]
//         }
//     });
// });



app.get('/', function(req, res) {
    res.render('home', {
        posts: [{
                author: 'Janith Kasun',
                image: 'https://picsum.photos/500/500',
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula.Sed vitae erat lectus.'
                ]
            },
            {
                author: 'John Doe',
                image: 'https://picsum.photos/500/500?2',
                comments: []
            }
        ]
    });
});
app.use('/birds', birds)


app.listen(PORT, () => {
    console.log(`run \n http://localhost:${PORT}`);
})