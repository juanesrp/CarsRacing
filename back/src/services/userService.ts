import { DeleteResult } from "typeorm";
import { AppDataSource } from "../config/data-source";
import UserDto from "../dto/UserDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { Credential } from "../entities/Credential";

let users: IUser[] = [];

export const createUserService = async (userData: UserDto): Promise<User> => {
  const newUser: User = await AppDataSource.getRepository(User).create(
    userData
  );
  const saveUser = await AppDataSource.getRepository(User).save(newUser);
  return saveUser;
};

export const getUsersService = async (): Promise<User[]> => {
  const users = await AppDataSource.getRepository(User).find();

  return users;
};

export const getUserService = async (id: number): Promise<User | undefined> => {
  const user: User | null = await AppDataSource.getRepository(User).findOne({
    where: { id },
    relations: { appointments: true },
  });
  if (user) {
    return user;
  }
  throw new Error("No se encuentra usuario");
};

export const deleteUserService = async (id: number): Promise<DeleteResult> => {
  const results = await AppDataSource.getRepository(User).delete(id);
  return results;
};
