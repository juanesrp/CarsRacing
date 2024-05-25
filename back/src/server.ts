import express from "express";
import router from "./routes";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

export default server;
