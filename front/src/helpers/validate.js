export const validate = (userData) => {
  console.log("Lo que me llega: ", userData);
  let errors = {};

  // Validación del nombre
  if (!userData.name) {
    errors = { ...errors, name: "El nombre es requerido" };
  } else if (!/^[a-zA-Z\s]+$/.test(userData.name)) {
    errors = { ...errors, name: "El nombre debe contener solo letras" };
  }

  // Validación del número de documento de identidad
  if (!userData.nDni) {
    errors = { ...errors, nDni: "El número de documento es requerido" };
  } else if (!/^[1-9]\d{5,10}$/.test(userData.nDni)) {
    errors = {
      ...errors,
      nDni: "El número de documento debe contener solo números",
    };
  }

  // Validación de la fecha de nacimiento
  if (!userData.birthdate.trim()) {
    errors = { ...errors, birthdate: "La fecha de nacimiento es requerida" };
  }
  // Validación del correo electrónico
  if (!userData.email.trim()) {
    errors = { ...errors, email: "El correo electrónico es requerido" };
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors = { ...errors, email: "El correo electrónico debe ser valido" };
  }

  // Validación del nombre de usuario
  if (!userData.username.trim()) {
    errors = { ...errors, username: "El nombre de usuario es requerido" };
  } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(userData.username)) {
    errors = {
      ...errors,
      username: "El nombre de usuario debe contener solo letras y números",
    };
  }

  // Validación de la contraseña
  if (!userData.password.trim()) {
    errors = { ...errors, password: "La contraseña es requerida" };
  } else if (userData.password.length < 6) {
    errors = {
      ...errors,
      password: "La contraseña debe tener al menos 6 caracteres",
    };
  }
  //Confirmacion de la contraseña
  if (!userData.confirmPassword) {
    errors = { ...errors, confirmPassword: "Confirme la contraseña" };
  } else if (userData.password.trim() !== userData.confirmPassword.trim()) {
    errors = { ...errors, confirmPassword: "Las contraseña no coinciden" };
  }
  // console.log("Errores en validate", errors);
  return errors;
};

export const validateForm = (formData) => {
  let errors = {};
  const fechaActual = new Date();
  const diaSemana = fechaActual.getDay(); // Obtener el día de la semana (0 para Domingo, 1 para Lunes, ..., 6 para Sábado)

  const regexFecha =
    /^(?!0[13578]|10|12)(0[1-9]|[12]\d|3[01])\/(?!02|04|06|08|09|11)\d{2}\/\d{4}$/;
  const regexHora = /^(0[89]|1[0-6]):00\s(?:AM|PM)$/;

  if (!formData.date) {
    errors.date = "La fecha es requerida";
  } else if (
    diaSemana === 0 &&
    diaSemana === 6 &&
    !regexFecha.test(formData.date)
  ) {
    errors.date = "No selecciones una fecha del fin de semana";
  }

  if (!formData.time) {
    errors.time = "La hora es requerida";
  } else if (
    formData.time < "08:00" ||
    (formData.time > "17:00" && !regexHora.test(formData.time))
  ) {
    errors.time = "Debe de ser una hora en punto entre las 8 am y 5 pm";
  }

  if (formData.description.length > 100) {
    errors.description = "La descripción no puede superar los 100 caracteres";
  }
  return errors;
};
