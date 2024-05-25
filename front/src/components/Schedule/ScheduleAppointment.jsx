import { useEffect, useState } from "react";
import styles from "./ScheduleAppointment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { validateForm } from "../../helpers/validate";
import axios from "axios";
import { addUserAppointments } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
const ScheduleAppointment = ({ handleClose }) => {
  const initialSate = {
    date: "",
    time: "",
    description: "",
  };
  const user = useSelector((state) => state.userActive);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialSate);

  const [errors, setErrors] = useState(initialSate);

  // Obtener la fecha actual en formato ISO
  const currentDate = new Date().toISOString().split("T")[0];

  // Calcular la fecha máxima (30 días a partir de hoy)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split("T")[0];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const isFormEmpty = Object.values(formData).every((value) => value === "");
    if (!isFormEmpty) {
      setErrors(validateForm(formData));
    }
  }, [formData]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        { ...formData, userId: user.id }
      );

      alert("Formulario enviado");
      dispatch(addUserAppointments(response.data));
      handleClose();
      setFormData(initialSate);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Agendar Turno</h1>
      <p className={styles.description}>
        Completa el formulario para reservar tu turno
      </p>
      <form onSubmit={handleOnSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="date">Fecha</label>
            <input
              type="date"
              name="date"
              id="date"
              min={currentDate}
              max={maxDateString}
              value={formData.date}
              onChange={handleInputChange}
            />
            <small>{errors.date}</small>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="time">Hora</label>
            <input
              type="time"
              name="time"
              id="time"
              min="08:00"
              max="17:00"
              step="3600"
              value={formData.time}
              onChange={handleInputChange}
            />
            <small>{errors.time}</small>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description">Descripción</label>
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            cols="30"
            rows="7"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <small>{errors.description}</small>
        </div>
        <div className={styles.btnContainer}>
          <button
            disabled={Object.values(formData).every((value) => value === "")}
            className={styles.btn}
          >
            Agendar
          </button>
          <button
            type="button"
            onClick={handleClose}
            className={styles.btnCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleAppointment;
