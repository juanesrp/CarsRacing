"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server = express();
server.listen(3000, () => {
    console.log("El servidor esta escuchando en el puerto 3000");
});
