module.exports.signUpErrors = (err) => {
  let errors = {
    email: "",
    password: "",
  };

  if (err.message.includes("email")) {
    errors.email = "Email incorrect 😔";
  }
  if (err.message.includes("password")) {
    errors.password = "Mot de passe incorrect 😔";
  }
  return errors;
};

// BUG Strings are not Include in errors
module.exports.logInErrors = (err) => {
  let errors = {
    email: "",
    password: "",
  };

  if (err.message.includes("email")) errors.email = "Email inconnu";
  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas";
  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = {
    format: "",
    maxSize: "",
  };

  if (err.message.includes("INVALID_FILE")) {
    errors.format = "Mauvais format de fichier.";
  }
  if (err.message.includes("MAX_SIZE")) {
    errors.maxSize = "Image trop grande (max : 600ko)";
  }
  return errors;
};
