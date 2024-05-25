import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  deleteUserService,
  getUserService,
} from "../services/userService";
import IUser from "../interfaces/IUser";
import {
  checkCrendentialService,
  createCredentialService,
} from "../services/credentialService";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;

    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
    });

    await createCredentialService({
      username,
      password,
      userId: newUser.id,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "No ha sido posible crear el usuario" });
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await deleteUserService(id);
    res.status(200).json({ message: "Eliminado correctamente" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserService(Number(id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const credential = await checkCrendentialService({ username, password });
    const user = await AppDataSource.getRepository(User).findOneBy({
      credentials: credential,
    });

    res.status(200).json({ login: true, user });
  } catch (error: any) {
    console.log(error.message);

    res.status(400).json({ login: false, error: error.message });
  }
};
1;
