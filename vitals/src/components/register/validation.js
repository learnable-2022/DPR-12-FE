

const validation = (firstName, lastName, email, phoneNumber, password, confirm_password) => {

    let errors = {};
        if (!firstName){
            errors.firstName ="First Name is required.";
        }
        if (!lastName){
            errors.lastName ="Last Name is required.";
        }
        if (!phoneNumber){
            errors.phoneNumber ="Phone Number is required.";
        }
        if (!email){
            errors.email="Email is required."
        }else if (!/\S+@\S+\.\S+/.test(email)){
            errors.email = "Enter a valid email address."
        }

        if (!password){
            errors.password ="password is required";
        }else if(password.length < 8){
            errors.password = "password must be at least 8 characters."
        }

        if (!confirm_password){
            errors.confirm_password ="please confirm password.";
        }else if(confirm_password !== password){
            errors.confirm_password = "password doesn't match."
        }

  return errors;
};

export default validation;

