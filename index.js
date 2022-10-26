const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// import library body parser
const bodyParser = require("body-parser");

// assign library
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// import route posts
const postsRouter = require("./routes/posts");
app.use("/api/posts", postsRouter); // use route posts di Express

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
