import React from "react";
import style from "./MyAppointment.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelUserAppointments } from "../../redux/reducer";
const MyAppointment = ({ date, time, description, status, id }) => {
  const dispathch = useDispatch();
  const cancelAppointment = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/appointments/cancel/${id}`
      );
      dispathch(cancelUserAppointments(id));
    } catch (error) {}
  };

  const handleClick = () => {
    const currentDate = new Date().toISOString().slice(0, 10);

    let cancelationDeadline = new Date(date);
    cancelationDeadline.setDate(cancelationDeadline.getDate() - 1);
    cancelationDeadline = cancelationDeadline.toISOString().slice(0, 10);

    // Verificar si la fecha actual es anterior a la fecha límite de cancelación
    if (currentDate <= cancelationDeadline) {
      cancelAppointment();
    } else {
      alert("No se puede cancelar el turno");
    }
  };

  return (
    <div className={style.myAppointment}>
      <h4 className={style.data}>Fecha: {date}</h4>
      <h4 className={style.data}>Hora: {time}</h4>
      <h4 className={style.description}>
        Descripción: <p>{description}</p>
      </h4>
      <h4 className={style.data}>
        Estado: <p>{status}</p>
      </h4>
      <button
        disabled={status === "cancelled"}
        onClick={handleClick}
        className={style.btn}
      >
        Cancelar
      </button>
    </div>
  );
};

export default MyAppointment;
