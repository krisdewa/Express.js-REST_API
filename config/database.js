// import library mysql
let mysql = require("mysql");

// konfigurasi dari koneksi database MySQL
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// cek koneksi
connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log("Connected!");
    }
});

// export module connection agar dapat digunakan di file lain
module.exports = connection;
