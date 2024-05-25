import React from "react";
import styles from "./AboutUs.module.css";
import imgAbout from "../../assets/img/AboutUs.jpeg";

const AboutUs = () => {
  return (
    <div className={styles.containerAboutUs}>
      <div className={styles.aboutUs}>
        <h1>Sobre Nosotros</h1>
        <p>
          Nuestra historia comienza hace más de 20 años, cuando un grupo de
          amigos apasionados por los autos decidieron unir sus conocimientos y
          habilidades para crear un taller de mecánica que se enfocara en
          brindar un servicio excepcional a los entusiastas del mundo
          automotriz.
        </p>
        <p>
          Con una visión de ofrecer reparaciones de calidad y un trato
          personalizado, Cars Racing abrió sus puertas en el corazón de la
          ciudad. Desde entonces, hemos crecido y evolucionado, convirtiéndonos
          en un referente en la comunidad de conductores que buscan mantener sus
          vehículos en óptimas condiciones.{" "}
        </p>

        <p>
          Nuestro equipo de mecánicos altamente capacitados y con años de
          experiencia, se enorgullece de utilizar las últimas tecnologías y
          técnicas para diagnosticar y reparar todo tipo de problemas, desde
          simples cambios de aceite hasta complejas reparaciones de motor. Nos
          esforzamos por brindar un servicio rápido, eficiente y confiable, para
          que nuestros clientes puedan volver a la carretera con total
          tranquilidad.{" "}
        </p>

        <p>
          Más allá de ser un simple taller, Cars Racing es un lugar donde los
          amantes de los autos pueden reunirse, compartir historias y disfrutar
          de su pasión. Nos enorgullece ser parte de esta comunidad y seguir
          escribiendo nuestra propia historia junto a nuestros clientes.
        </p>
      </div>

      <img
        src={imgAbout}
        alt="AboutUs"
        className={styles.imgAboutUs}
        width="500px"
      />
    </div>
  );
};

export default AboutUs;
