import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  description: string;

  @Column()
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
