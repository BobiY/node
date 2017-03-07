const express = require('express');
const server = express();
const fs = require('fs');
const router = require("./controller/router");

server.set('view engine', 'ejs');
server.use(express.static("public"));
server.use(express.static("uploade"));
server.get("/",router.showIndex);
server.get("/form",router.showForm);
server.post("/form",router.showForm);
server.get("/:albumName",router.showAlbum);

server.listen(8080);
