import React, { useEffect, useState } from "react";
import MyAppointment from "../../components/MyAppointment/MyAppointment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setUserAppointments } from "../../redux/reducer";
import styles from "./MyAppointments.module.css";
import ScheduleAppointment from "../../components/Schedule/ScheduleAppointment";

const MyAppointments = () => {
  const user = useSelector((state) => state.userActive);
  const Appoinments = useSelector((state) => state.userAppointments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [schedule, setSchedule] = useState(false);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.id}`
        );
        dispatch(setUserAppointments(response.data.appointments));
      } catch (error) {
        alert("Ha ocurrido un error");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    !user.name && navigate("/login");
  }, []);

  const handleClick = () => {
    setSchedule(true);
  };

  const handleClose = () => {
    setSchedule(false);
  };
  return (
    <>
      {!user.name ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className={styles.title}>Bienvenido {user.name}</h1>

          <hr />
          <div className={styles.Welcome}>
            <h2 className={styles.title}>Tus turnos</h2>
            <div className={styles.containerWelcome}>
              <p>¡Agenda tu turno, estaremos encantados de atenderte!</p>
              <button onClick={handleClick} className={styles.btnAgendar}>
                Agendar Turno
              </button>
            </div>
            {schedule && <ScheduleAppointment handleClose={handleClose} />}
          </div>
          <div className={styles.containerMyAppointments}>
            {!Appoinments.length ? (
              <h2>No tienes turnos</h2>
            ) : (
              Appoinments.map((appointment) => {
                return (
                  <MyAppointment
                    key={appointment.id}
                    date={appointment.date}
                    time={appointment.time}
                    description={appointment.description}
                    status={appointment.status}
                    id={appointment.id}
                  />
                );
              })
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MyAppointments;
