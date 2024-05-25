import { Request, Response } from "express";
import {
  addTurnService,
  cancelTurnService,
  getAppointmentService,
  getAppointmentsService,
} from "../services/appointmentsService";
import IAppointment from "../interfaces/IAppointment";
import { Appointment } from "../entities/Appointment";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments: Appointment[] = await getAppointmentsService();
    res.status(200).json(appointments);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentService(Number(id));
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const addTurn = async (req: Request, res: Response) => {
  try {
    const { date, time, description, userId } = req.body;

    const newTurn: Appointment = await addTurnService({
      date,
      time,
      description,
      userId,
    });

    res.status(200).json(newTurn);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const cancelTurn = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await cancelTurnService(Number(id));
    res.status(200).json({ message: "Su turno ha sido cancelado" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
