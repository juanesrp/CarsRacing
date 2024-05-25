import { useState, useEffect } from "react";
import styles from "./Register.module.css";
import { validate } from "../../helpers/validate";
import axios from "axios";

const Register = () => {
  const initialData = {
    name: "",
    nDni: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialData);

  const [errors, setErrors] = useState(initialData);

  //Actualiza cada que cambia algun input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    // Verifica si algún campo del formulario ya ha sido modificado
    const isFormEmpty = Object.values(userData).every((value) => value === "");

    if (!isFormEmpty) {
      setErrors(validate(userData));
    }
  }, [userData]);

  //Evita que la pagina se actualice cada que se presione el boton de enviar
  //Envia formulario al backend
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        userData
      );
      alert("Formulario enviado");
      res.status(200).json(response.data);
      setUserData(initialData);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formRegister} onSubmit={handleOnSubmit}>
        <h2 className={styles.title}>Registrate</h2>
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          value={userData.name}
          placeholder="Nombre Completo"
          onChange={handleInputChange}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        <div className={styles.inputGroup}>
          <div className={styles.inputRow}>
            <input
              className={styles.inputContainer}
              type="number"
              name="nDni"
              value={userData.nDni}
              placeholder="Cédula"
              onChange={handleInputChange}
            />
            {errors.nDni && (
              <p className={styles.errorMessage}>{errors.nDni}</p>
            )}
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputContainer}>
              <input
                type="date"
                name="birthdate"
                value={userData.birthdate}
                onChange={handleInputChange}
              />
              <span className={styles.tooltip}>Fecha de nacimiento</span>
            </div>
            {errors.birthdate && (
              <p className={styles.errorMessage}>{errors.birthdate}</p>
            )}
          </div>
        </div>
        <input
          className={styles.inputForm}
          type="email"
          name="email"
          value={userData.email}
          placeholder="Correo electronico"
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        <input
          className={styles.inputForm}
          type="text"
          name="username"
          value={userData.username}
          placeholder="Usuario"
          onChange={handleInputChange}
        />
        {errors.username && (
          <p className={styles.errorMessage}>{errors.username}</p>
        )}
        <input
          className={styles.inputForm}
          type="password"
          name="password"
          value={userData.password}
          placeholder="Contraseña"
          onChange={handleInputChange}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}
        <input
          className={styles.inputForm}
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          placeholder="Confirma tu contraseña"
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <p className={styles.errorMessage}>{errors.confirmPassword}</p>
        )}
        <div className={styles.formCheckbox}>
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms" className={styles.checkboxLabel}>
            Acepto los <a href="#">terminos y condiciones</a> de tu sitio
          </label>
        </div>
        <div className={styles.btnContainer}>
          <button
            disabled={Object.values(userData).every((value) => value === "")}
            className={styles.btn}
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
