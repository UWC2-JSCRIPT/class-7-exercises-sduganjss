// TODO
document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitbtn")    
    const jobEl = document.querySelector('.jobtitle')
    const companyEl = document.querySelector('.companysite')
    const codeEl = document.querySelector('.talkcode')
    const userName = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    const selectReason = document.getElementById('reason') 
    const reasonSel = document.querySelector('.reasonSel')

   function checkValidation(e) {

              
        let allValid = [];
        const regExEmail = /\w+@\w+\.\w+/
        
        if (userName.value.length < 3) {
            userName.validity.valid = false;
            userName.classList.add("invalid");
            userName.setCustomValidity("Your Name is too short");
            userName.reportValidity();
            allValid[0] = false;
        }else {
            userName.validity.valid = true;
            userName.classList.remove("invalid");
            userName.setCustomValidity('');
            allValid[0] = true;
        }           
        if (!regExEmail.test(email.value)) {
            email.validity.valid = false;
            email.classList.add("invalid");
            email.setCustomValidity("This email is invalid");
            email.reportValidity();
            allValid[1] = false;
        }else {
            email.validity.valid = true;
            email.classList.remove("invalid");
            email.classList.add("valid");
            email.setCustomValidity('');
            allValid[1] = true;
        }
        if (message.value.length < 10) {
            message.validity.valid = false;
            message.classList.add("invalid");
            message.setCustomValidity("This message is too short");
            message.reportValidity();
            allValid[2] = false;
        }else {
            message.validity.valid = true;
            message.classList.remove("invalid");
            message.classList.add("valid");
            message.setCustomValidity('');
            allValid[2] = true;
        }
        if (allValid.includes(false)) {
            e.preventDefault();
    }
    }
    const setReasonValidity = function() {
        
        if (selectReason.value === 'choose') {
            selectReason.setCustomValidity('Must select an option');
            return;
        }
    }
   
    const toggleVisibility = function() {
        
        
        if (selectReason.value === 'job-opportunity') {
            jobEl.classList.remove('hide');
            companyEl.classList.remove('hide');
            jobEl.querySelector('input').required = true;
            companyEl.querySelector('input').required = true;
            selectReason.setCustomValidity('');
        } 
        if (selectReason.value === 'talk-code') {
            jobEl.classList.add('hide');
            companyEl.classList.add('hide');
            codeEl.classList.remove('hide');
            jobEl.querySelector('input').required = false;
            companyEl.querySelector('input').required = false;
            codeEl.querySelector('input').required = true;
            selectReason.setCustomValidity('');
        }  
}    

submitBtn.addEventListener('click', (e) => {
    
        checkValidation(e);
        setReasonValidity();
        
        })

reasonSel.addEventListener('change', (e) => {
    toggleVisibility();
            
            })


    
      


});



