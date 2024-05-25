import { AppDataSource } from "../config/data-source";
import CredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];

let id: number = 1;

export const createCredentialService = async (
  userCredential: CredentialDto
): Promise<Credential> => {
  const newCredential: Credential = await AppDataSource.getRepository(
    Credential
  ).create(userCredential);
  await AppDataSource.getRepository(Credential).save(newCredential);

  const user = await AppDataSource.getRepository(User).findOneBy({
    id: userCredential.userId,
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  user.credentials = newCredential;
  await AppDataSource.getRepository(User).save(user);

  return newCredential;
};

export const checkCrendentialService = async (userCredential: {
  username: string;
  password: string;
}) => {
  const credential = await AppDataSource.getRepository(Credential).findOne({
    where: { username: userCredential.username },
  });

  if (!credential) {
    throw new Error("Usuario no se encuentra registrado");
  }

  if (credential.password === userCredential.password) {
    return credential;
  } else {
    throw new Error("Contraseña incorrecta");
  }
};
