export const validateInfo = (values: any) => {
  const {
    identification,
    identificationType,
    companyName,
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    email,
  } = values || {};

  let errors: any = {};

  if (!identificationType) {
    errors.identificationType = 'Tipo de identificación requerida';
  }

  if (!identification) {
    errors.identification = 'Número identificación requerida';
  }

  if (identificationType === 'NIT' || identificationType === 'CE') {
    if (!companyName) {
      errors.companyName = 'Nombre compañia requerido';
    } else if (!/^[a-zA-Z \u00C0-\u00FF]*$/.test(companyName)) {
      errors.companyName = 'Nombre compañia solo permite letras';
    }
  } else {
    if (!firstName) {
      errors.firstName = 'Primer nombre requerido';
    } else if (!/^[a-zA-Z \u00C0-\u00FF]*$/.test(firstName)) {
      errors.firstName = 'Primer nombre solo permite letras';
    }

    if (secondName) {
      if (!/^[a-zA-Z \u00C0-\u00FF]*$/.test(secondName)) {
        errors.secondName = 'Segundo nombre solo permite letras';
      }
    }

    if (!firstLastName) {
      errors.firstLastName = 'Primer apellido requerido';
    } else if (!/^[a-zA-Z \u00C0-\u00FF]*$/.test(firstLastName)) {
      errors.firstLastName = 'Primer apellido solo permite letras';
    }

    if (secondLastName) {
      if (!/^[a-zA-Z \u00C0-\u00FF]*$/.test(secondLastName)) {
        errors.secondLastName = 'Segundo apellido solo permite letras';
      }
    }
  }

  if (!email) {
    errors.email = 'Correo electrónico requirido';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Correo electrónico no válido';
  }

  return errors;
};
