import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <div className={styles.containerTitle}>
        <h1>Mecanica de confianza</h1>
        <p>
          Buenos servicios de calidad para su automóvil, desde mantenimiento
          hasta reparaciones, estaremos aqui para cuidar su vehículo
        </p>
      </div>
      <div className={styles.containerImg}>
        <img
          src="https://www.elcarrocolombiano.com/wp-content/uploads/2023/05/20230510tallermeca%CC%81nicoAA-1.jpg"
          alt="Taller"
          width="500px"
        />
        <hr />
        <div className={styles.containerRegister}>
          <h2>Registrate para agendar tu turno</h2>
          <p>
            Descubre la comodidad y la confianza de nuestro servicio automotriz.
            En nuestro centro, nos dedicamos a ofrecerte la mejor atención para
            tu vehículo. Desde mantenimiento básico hasta reparaciones
            especializadas, nuestro equipo experto está aquí para cuidar de tu
            automóvil y asegurarse de que esté en las mejores condiciones para
            tus viajes.
          </p>
          <p>
            Regístrate ahora y reserva tu turno para una experiencia excepcional
            en el cuidado de tu vehículo.
          </p>
        </div>
      </div>

      <div className={styles.servicesTitle}>
        <h1>Nuestros Servicios</h1>
        <h3>
          Ofrecemos una amplia gama de servicios para mantener su vehículo en
          las mejores condiciones.
        </h3>
        <div className={styles.containerServices}>
          <div className={styles.card}>
            <h4>
              <span class="material-symbols-outlined">local_gas_station</span>
              Cambio de aceite
            </h4>
            <p>
              Mantenga el motor de su automóvil en buen estado con nuestro
              servicio de cambio de aceite.
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              <span class="material-symbols-outlined">cached</span>Rotación de
              Llantas
            </h4>
            <p>
              Asegúrese de que sus neumáticos se desgasten uniformemente para
              una mejor vida útil.
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              <span class="material-symbols-outlined">upgrade</span>Reemplazo de
              Pastillas de Freno
            </h4>
            <p>
              Mejore el rendimiento de frenado de su automóvil con nuestro
              servicio de reemplazo de pastillas de freno.
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              <span class="material-symbols-outlined">battery_alert</span>
              Reemplazo de Batería de Coche
            </h4>
            <p>
              No se quede atascado. Obtenga nuestro servicio de reemplazo de
              batería de automóvil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
