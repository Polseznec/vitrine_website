module.exports.signUpErrors = (err) => {
    let errors = {
        email: "",
        password: ""
    }
    if (err.message.includes('email')) {
        errors.email = "Email incorrect 😔"
    }
    if (err.message.includes('password')) {
        errors.password = "Mot de passe incorrect 😔"
    }

    return errors;
}

module.exports.logInErrors = (err) => {
    console.log(err.message, "set");
    let errors = {
        email: "",
        password: ""
    }
    if (err.message.includes('email')) {
        errors.email = "Email inconnu 😔";
    }
    if (err.message.includes('password')) {
        errors.password = "Mot de passe incorrect 😔"
    }

    return errors;
}