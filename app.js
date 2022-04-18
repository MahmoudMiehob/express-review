const express = require("express");
const app = express();
const birds = require('./birds')
const PORT = 3000 ;



app.get('/',(req,res)=>{
    res.send('hello world')
});


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


app.use('/birds', birds)



app.listen(PORT,()=>{
    console.log(`run \n http://localhost:${PORT}`);
})