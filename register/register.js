let nameEl = document.querySelector('.reg_full_name');
let emailEl = document.querySelector('.reg_email');
let pswEl = document.querySelector('.reg_psw');
let regPswEl = document.querySelector('.reg_re_psw');
let regErr = document.querySelector('.reg_err');


function regSubmit(e) {
    e.preventDefault()

    let checkNewUser = users.find(a => a.email === emailEl.value);

    if (!checkNewUser) {
        if (regPswEl.value === pswEl.value) {
            let newUser = {
                id: users.length + 1,
                name: nameEl.value,
                email: emailEl.value,
                password: pswEl.value
            }
            users.push(newUser)
            localStorage.setItem('istifadeciler', JSON.stringify(users))
            regErr.innerHTML = 'Qeydiyyat ugurla bitdi'
        } else {
            regErr.innerHTML = 'Sifreler eyni deyil'
        }
    } else {
        regErr.innerHTML = 'Bu istifadeci artiq movcuddur'
    }
}