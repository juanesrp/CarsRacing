import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por contactarnos, estamos en contacto");
  };
  return (
    <div className={styles.containerContact}>
      <h2>Contactanos</h2>
      <p>Si tienes alguna pregunta, no dudes en comunicarte con nosotros.</p>
      <form onSubmit={handleSubmit} className={styles.formContact}>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              placeholder="Ingresa tu nombre"
              type="text"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Correo electrónico</label>
            <input
              name="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              type="email"
            />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="phone">Teléfono</label>
          <input
            name="phone"
            id="phone"
            placeholder="Ingresa tu número de teléfono"
            type="tel"
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            className="min-h-[100px]"
            id="message"
            placeholder="Escribe tu mensaje"
            rows="5"
          />
        </div>
        <button className={styles.btn}>Enviar</button>
      </form>
      <div className={styles.containerInfo}>
        <div>
          <h2>Dirección</h2>
          <p>123 Calle Mecanica, Bogota, Colombia</p>
        </div>
        <div>
          <h2>Horario de atención</h2>
          <p>
            Lunes a Viernes: 8:00 AM - 5:00 PM
            <br />
            Sábados y Domigos: No laboramos
          </p>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>
            Teléfono: +57 (123) 456-7890
            <br />
            Correo electrónico: info@carsracing.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
