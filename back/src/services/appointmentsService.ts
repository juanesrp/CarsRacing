import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

import IAppointment from "../interfaces/IAppointment";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppDataSource.getRepository(Appointment).find();
  return appointments;
};
export const getAppointmentService = async (
  id: number
): Promise<Appointment> => {
  const appointment: Appointment | null = await AppDataSource.getRepository(
    Appointment
  ).findOneBy({ id });

  if (!appointment) {
    throw new Error("El turno no ha sido encontrado");
  }

  return appointment;
};

export const addTurnService = async (
  appointmentData: AppointmentDto
): Promise<Appointment> => {
  const newAppointment = await AppDataSource.getRepository(Appointment).create({
    ...appointmentData,
    status: "active",
  });
  let user = await AppDataSource.getRepository(User).findOneBy({
    id: appointmentData.userId,
  });

  if (!user) {
    throw new Error(
      `No se encontró ningún usuario con el ID ${appointmentData.userId}`
    );
  }

  newAppointment.user = user;

  await AppDataSource.getRepository(Appointment).save(newAppointment);
  return newAppointment;
};

export const cancelTurnService = async (id: number): Promise<void> => {
  const appointment: Appointment | null = await AppDataSource.getRepository(
    Appointment
  ).findOneBy({ id });
  if (!appointment) {
    throw new Error("El turno no ha sido encontrado");
  }
  appointment.status = "cancelled";

  await AppDataSource.getRepository(Appointment).save(appointment);
};
