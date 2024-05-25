import { Router } from "express";
import {
  addTurn,
  cancelTurn,
  getAppointment,
  getAppointments,
} from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAppointments);
appointmentsRouter.post("/schedule", addTurn);
appointmentsRouter.put("/cancel/:id", cancelTurn);
appointmentsRouter.get("/:id", getAppointment);

export default appointmentsRouter;
