import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../../assets/img/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { cleanUser } from "../../redux/reducer";

const NavBar = () => {
  const user = useSelector((state) => state.userActive);

  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div>
        <img src={Logo} alt="Logo" width="100rem" />
      </div>

      <div>
        <Link to="/" className={styles.btn}>
          Home
        </Link>
        {user.name && (
          <Link to="/appointments" className={styles.btn}>
            My Appointmnets
          </Link>
        )}

        <Link to="/about" className={styles.btn}>
          About Us
        </Link>
        <Link to={"/contact"} className={styles.btn}>
          Contact Us
        </Link>
      </div>
      {user.name ? (
        <button
          onClick={() => dispatch(cleanUser())}
          className={styles.btnLogin}
        >
          <Link to={"/"}>Cerrar Sesión</Link>
        </button>
      ) : (
        <div className={styles.btnGroup}>
          <button className={styles.btnLogin}>
            <Link to={"/login"}>Iniciar Sesión</Link>
          </button>
          <button className={styles.btnRegister}>
            <Link to={"/register"}>Registrate</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
