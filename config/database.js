// import library mysql
let mysql = require("mysql");

// konfigurasi dari koneksi database MySQL
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_express_api",
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
