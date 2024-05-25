import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Link to={"/"} className={styles.link}>
          <label>Home</label>
        </Link>
        <Link to={"/about"} className={styles.link}>
          <label>Sobre Nosotros</label>
        </Link>
        <Link to={"/contact"} className={styles.link}>
          <label>Contactanos</label>
        </Link>
      </div>
      <h6>© 2024 - Todos los derechos reservados</h6>
    </div>
  );
};

export default Footer;
