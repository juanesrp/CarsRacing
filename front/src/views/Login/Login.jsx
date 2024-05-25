import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialData);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        userData
      );
      dispatch(loginUser(response.data.user));
      alert("Has iniciado Sesión");
      navigate("/appointments");
      setUserData(initialData);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className={styles.formContainerLogin}>
      <form onSubmit={handleOnSubmit} className={styles.formLogin}>
        <h2 className={styles.title}>Inicia Sesión</h2>
        <input
          className={styles.inputForm}
          type="text"
          name="username"
          value={userData.username}
          placeholder="Usuario"
          onChange={handleInputChange}
        />
        <input
          className={styles.inputForm}
          type="password"
          name="password"
          value={userData.password}
          placeholder="Contraseña"
          onChange={handleInputChange}
        />
        <a href="" className={styles.link}>
          Olvide mi contraseña
        </a>
        <div className={styles.btnContainer}>
          <button
            disabled={!userData.username || !userData.password}
            className={styles.btn}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
