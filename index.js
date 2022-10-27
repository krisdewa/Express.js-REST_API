const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// CORS merupakan singkatan dari Cross Origin Resource Sharing, yaitu
// sebuah teknik menggunakan permintaan HTTP untuk mengizinkan browser
// pada suatu domain mendapatkan akses ke server pada sumber yang berbeda.
// Ini digunakan agar Restful API yang sudah kita buat sebelumnya bisa digunakan
// atau bisa di akses oleh aplikasi lain seperti aplikasi Android atau web browser.

// import library CORS
const cors = require("cors");

// use library CORS
app.use(cors());

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
