# HacktivPresso
HacktivPresso merupakan aplikasi blogging sistem sederhana yang bisa digunakan untuk memposting artikel. HacktivPresso bisa dipakai lebih dari user.

## Fitur
  - Register user
  - Login user
  - Create, Read, Update, Delete artikel

## Instalasi

Server side:
```sh
$ cd hacktivpress/server
$ npm install
$ npm start
```
Client side:
```sh
$ cd hacktivpress/client
$ npm install
$ npm run dev
```
## End point list
| Method  | End point | Deskripsi |
| ------- | --------- | --------- |
| POST | /register | Membuat user baru |
| POST | /login | Autentikasi login |
| GET | /articles | Mendapatkan data seluruh artikel  |
| POST | /articles | Membuat artikel baru |
| DELETE | /articles/:id | Menghapus artikel berdasarkan ID |
| PUT | /articles/:id
