document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            window.close();
        }
    });

    name.addEventListener('input', () => {
        const trimmedName = name.value.trim();
        if (trimmedName.length > 50) {
            validateField(name, false, 'Name cannot exceed 50 characters');
        } else {
            const names = trimmedName.split(' ');
            let isValid = true;
            names.forEach(part => {
                if (!/^[a-zA-Z]+$/.test(part)) {
                    isValid = false;
                }
            });
            validateField(name, isValid, 'Name can only contain alphabets under 50 characters');
        }
    });

    email.addEventListener('input', () => {
        const trimmedEmail = email.value.trim();
        if (trimmedEmail.length > 30) {
            validateField(email, false, 'Email cannot exceed 30 characters');
        } else {
            validateField(email, isEmail(trimmedEmail), 'Not a valid email');
        }
    });

    phone.addEventListener('input', () => {
        const trimmedPhone = phone.value.trim();
        if (trimmedPhone.length > 10) {
            validateField(phone, false, 'Phone number cannot exceed 10 characters');
        } else {
            validateField(phone, isPhone(trimmedPhone), 'Not a valid phone number');
        }
    });

    password.addEventListener('input', () => {
        const trimmedPassword = password.value.trim();
        if (trimmedPassword.length > 15) {
            validateField(password, false, 'Password cannot exceed 15 characters');
        } else {
            validateField(password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[a-zA-Z0-9!@#$%]{8,15}$/.test(trimmedPassword), 'Password: 8-15 chars with 1 lower, 1 upper, 1 number, 1 of !@#$%');
        }
    });
    
    

    

    function checkInputs() {
        let isValid = true;
        validateField(name, name.value.trim() !== '', 'Name cannot be blank');
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(phone, isPhone(phone.value.trim()), 'Not a valid phone number');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?\d{10,}$/.test(phone);
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

         
    // setTimeout(function() {
    //     window.location.href = "index.html";
    // }, 3000); // 3000 milliseconds = 3 seconds
    }

});