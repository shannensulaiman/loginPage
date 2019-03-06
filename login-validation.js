const isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null || str === undefined || str === '';
}


const validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePassword = password => {
    return !isEmptyOrSpaces(password);

}

const validateForm = () => {
    const email = document.querySelector('#emailInput');
    const password = document.querySelector('#passwordInput');

    const isEmailValid = validateEmail(email.value),
        isPasswordValid = validatePassword(password.value);


    if (!isEmailValid) {
        alert('Email is not valid');
        return; 
    }

    if (!isPasswordValid) {
        alert('Password is not valid');
        return;
    }

    window.location.href = "file:///Users/shannensulaiman/Desktop/login/login-success.html";
    return false;

}
