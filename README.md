# Restful API menggunakan Express.js
Express.js adalah salah satu framework Node.js yang paling populer dan banyak digunakan oleh para developer, karena memiliki ukuran yang minimalis dan performa yang sangat cepat . Express bersifat open source dan mudah untuk di pelajari.

## Instalasi
1. clone repository ini dengan perintah `git clone` atau download zip nya dan ekstrak ke folder yang di inginkan
2. masuk ke folder express-api dengan terminal atau cmd ketik `cd express-api`
3. jalankan perintah `npm install`
4. jalankan perintah `npm start`
5. buka browser dan ketikkan url `http://localhost:3000`

## Cara Penggunaan
1. terminal atau cmd ketik `node index.js`
2. buka browser dan ketikkan url `http://localhost:3000`

## Cara Penggunaan dengan Nodemon
1. terminal atau cmd ketik `nodemon npm start`
2. buka browser dan ketikkan url `http://localhost:3000`

## endpoint 
1. `http://localhost:3000/api/posts` untuk menampilkan seluruh data
2. `http://localhost:3000/api/posts/:id` untuk menampilkan data berdasarkan id
3. `http://localhost:3000/api/posts/store` untuk menambah data (Postman: Method POST, lalu klik tab Body dan pilih x-www-form-urlencoded)