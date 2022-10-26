# Restful API menggunakan Express.js
Express.js adalah salah satu framework Node.js yang paling populer dan banyak digunakan oleh para developer, karena memiliki ukuran yang minimalis dan performa yang sangat cepat . Express bersifat open source dan mudah untuk di pelajari.

## Instalasi
1. clone repository ini dengan perintah `git clone` atau download zip nya dan ekstrak ke folder yang di inginkan
2. masuk ke folder express-api dengan terminal atau cmd ketik `cd express-api`
3. jalankan perintah `npm install`
4. jalankan perintah `npm start`
5. buka browser dan ketikkan url http://localhost:3000

## Cara Penggunaan
1. terminal atau cmd ketik `node index.js`
2. buka browser dan ketikkan url http://localhost:3000

## Cara Penggunaan dengan Nodemon
1. terminal atau cmd ketik `nodemon npm start`
2. buka browser dan ketikkan url http://localhost:3000

## Endpoint API
1. Menampilkan seluruh Data ( GET )
``` 
http://localhost:3000/api/posts
```
2. Menampilkan Data berdasarkan id ( GET )
```
http://localhost:3000/api/posts/:id
``` 
3. Menambah Data ( POST, lalu klik tab Body & pilih x-www-form-urlencoded ) 
```
http://localhost:3000/api/posts/store
```
4. Mengubah/Update Data ( PATCH, lalu klik tab Body & pilih x-www-form-urlencoded ) 
```
http://localhost:3000/api/posts/update/:id
```
5. Menghapus Data ( DELETE ) 
```
http://localhost:3000/api/posts/delete/:id
```


## Library yang digunakan
1. Body-parser : Body Parser merupakan library yang berisi middleware untuk membaca sebuah data yang dikirimkan oleh HTTP POST dan menyimpannya sebagai objek JavaScript yang dapat di akses melalui req.body. Silahkan jalankan perintah berikut ini di dalam terminal/CMD untuk melakukan installasi Body Parser di dalam project Express.js.
2. Express Validator : Express Validator adalah middleware untuk Express.js untuk memvalidasi data yang masuk ke dalam aplikasi. 
3. Nodemon : Nodemon adalah library yang berguna untuk melakukan restart otomatis pada server Node.js ketika terjadi perubahan pada file yang ada di dalam project. Silahkan jalankan perintah berikut ini di dalam terminal/CMD untuk melakukan installasi Nodemon di dalam project Express.js.
4. Mysql : MySQL adalah salah satu database yang paling populer dan banyak digunakan oleh para developer. Silahkan jalankan perintah berikut ini di dalam terminal/CMD untuk melakukan installasi MySQL di dalam project Express.js.
5. CORS : CORS adalah singkatan dari Cross-Origin Resource Sharing. CORS adalah mekanisme yang digunakan untuk mengizinkan atau menolak akses dari suatu domain ke resource yang ada di domain lain. Silahkan jalankan perintah berikut ini di dalam terminal/CMD untuk melakukan installasi CORS di dalam project Express.js.