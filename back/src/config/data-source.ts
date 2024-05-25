import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: Number(DB_PORT) || 5432,
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // dropSchema: true /* Elimina todos los registros de la base de datos */,
  synchronize: true,
  logging: false,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
