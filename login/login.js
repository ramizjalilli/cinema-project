let logEmail = document.querySelector('.log_email');
let logPsw = document.querySelector('.log_psw');
let logErr = document.querySelector('.log_err');





function logSubmit(e) {
    e.preventDefault()

    let checkUser = users.find(a => a.email === logEmail.value);

    if (checkUser) {
        if (checkUser.password === logPsw.value) {
            window.location.href = '../index.html'
            localStorage.setItem('loggedInUser',JSON.stringify(checkUser))
        } else {
            logErr.innerHTML = 'Sifre yanlisdir'
        }
    } else {
        logErr.innerHTML = 'Bu istifadeci tapilmadi'
    }
}