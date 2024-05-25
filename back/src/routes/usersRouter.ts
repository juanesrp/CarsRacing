import { Router } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  loginUser,
} from "../controllers/usersController";
import auth from "../middlewares/autentication";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.post("/register", createUser);
usersRouter.post("/login", loginUser);
usersRouter.get("/:id", getUser);
usersRouter.get("/credential/:id", getUser);

export default usersRouter;
