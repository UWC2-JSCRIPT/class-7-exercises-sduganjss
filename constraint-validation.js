// TODO
// TODO
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form")
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")

       

    function checkValidation(e) {

       
        
        let allValid = [];
        const regExEmail = /\w+@\w+\.\w+/

        //console.log(lastName.value.length);
        if (firstName.value.length < 3) {
            firstName.validity.valid = false;
            firstName.classList.add("invalid");
            firstName.setCustomValidity("Your First Name is too short");
            firstName.reportValidity();
            allValid[0] = false;
        }else {
            firstName.validity.valid = true;
            firstName.classList.remove("invalid");
            firstName.setCustomValidity('');
            allValid[0] = true;
        }
        if (lastName.value.length < 3) {
            console.log(lastName.value.length);
            lastName.validity.valid = false;
            lastName.classList.add("invalid");
            lastName.setCustomValidity("Your Last Name is too short");
            lastName.reportValidity();
            allValid[1] = false;
        }else {
            //console.log(lastName.value.length);
            lastName.validity.valid = true;
            lastName.classList.remove("invalid");
            lastName.setCustomValidity('');
            allValid[1] = true;
        }
        
        if (!regExEmail.test(email.value)) {
            email.validity.valid = false;
            email.classList.add("invalid");
            email.setCustomValidity("This email is invalid");
            email.reportValidity();
            allValid[2] = false;
        }else {
            email.validity.valid = true;
            email.classList.remove("invalid");
            email.setCustomValidity('');
            allValid[2] = true;
        }
        if (allValid.includes(false)) {
            e.preventDefault();
    }
    }


    form.addEventListener('submit', (e) => {
        checkValidation(e)
        })
   
    firstName.addEventListener("change", (e) => {
        checkValidation(e);
    })
    lastName.addEventListener("change", (e) => {
        checkValidation(e);
    })
    email.addEventListener("change", (e) => {
        checkValidation(e);
    })


});

