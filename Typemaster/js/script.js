// Popup + Overlay Functionality

    const openPopupButton = document.getElementById('popup-su__button-open')
    const closePopupButton = document.getElementById('popup-su__button-close')
    const popupSu = document.getElementById('popup-su')
    const overlay = document.getElementById('overlay')

    openPopupButton.addEventListener("click", () => {
        openPopupSu()
    });

    overlay.addEventListener('click', () => {
        const popupsActive = document.querySelectorAll('.popup--active')
        popupsActive.forEach(popup => {
            closePopup()
        })
    })

    closePopupButton.addEventListener('click', () => {
            closePopup()
        })


    function openPopupSu() {
        if (openPopupButton == null) return
        popupSu.classList.add('popup--active')
        overlay.classList.add('overlay--active')
    }

    function closePopup() {
        if (openPopupButton == null) return
        popupSu.classList.remove('popup--active')
        overlay.classList.remove('overlay--active')
    }

// Sign Up Form with Fast Feedback

    // Date Selection

    // Setup

        const form = document.getElementById("sign-up-form");


        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const telNumber = document.getElementById("tel-number");
        const password = document.getElementById("password");
        // const day = formElement.find("#day");
        // const month = formElement.find("#month");
        // const year = formElement.find("#year");
        const checkbox = document.getElementById("checkbox");



         form.addEventListener('submit', formValidateFunction);
         enableFastFeedback(form);

        function formValidateFunction(event){

            validateFirstNameField(firstName.value, event)
            validateLastNameField(lastName.value, event)
            validateTelNumberField(telNumber.value, event)
            validatePasswordField(password.value, event)

            validateCheckboxField(checkbox.checked, event)

        }

    // fastFeedback

        function enableFastFeedback(){

            firstName.addEventListener("blur",function(event){
                const firstNameValue = this.value;
                validateFirstNameField(firstNameValue,event)

                if (!isValidName(firstNameValue)) {
                    this.setAttribute("style","box-shadow:0 0 4px #811; border: 1px solid #600;");
                } else{
                    this.setAttribute("style","box-shadow: 0 0 4px #188; border: 1px solid #060;");
                }
            });

          lastName.addEventListener("blur",function(event){
                const lastNameValue = this.value;
                validateLastNameField(lastNameValue,event)

                if (!isValidName(lastNameValue)) {
                    this.setAttribute("style","box-shadow:0 0 4px #811; border: 1px solid #600;");
                } else{
                    this.setAttribute("style","box-shadow: 0 0 4px #188; border: 1px solid #060;");
                }
            });

            telNumber.addEventListener("blur",function(event){
                const telNumberValue = this.value;
                validateTelNumberField(telNumberValue, event)

                if (!isValidNumber(telNumberValue)) {
                    this.setAttribute("style","box-shadow:0 0 4px #811; border: 1px solid #600;");
                } else{
                    this.setAttribute("style","box-shadow: 0 0 4px #188; border: 1px solid #060;");
                }
            });

            password.addEventListener("blur",function(event){
                const passwordValue = this.value;
                validatePasswordField(passwordValue, event)

                if (!isValidPassword(passwordValue)) {
                    this.setAttribute("style","box-shadow:0 0 4px #811; border: 1px solid #600;");
                } else{
                    this.setAttribute("style","box-shadow: 0 0 4px #188; border: 1px solid #060;");
                }
            });

            checkbox.addEventListener("change",function(event){
                const checkBoxValue = this.checked
                validateCheckboxField(checkBoxValue,event)

                if (checkBoxValue == false) {
                    this.setAttribute("style","box-shadow:0 0 4px #811; border: 1px solid #600;");
                } else{
                    this.setAttribute("style","box-shadow: 0 0 4px #188; border: 1px solid #060;");
                }
            });

        }

     // isValid Functions

        function isValidName(name){
            return name.length >= 2;
        }

        function isValidNumber(telNumberValue){
            telNumberValue.replace(/[^\d]/g, '');
            if(telNumberValue.length > 6 && telNumberValue.length < 11) {  return true;  }
        }

        function isValidPassword(passwordValue){
            return passwordValue.length >= 7 && /.*[0-9].*/.test(passwordValue);
            // test for pw length and if it contains a number
        }


     //validate functions

        function validateFirstNameField(firstNameValue, event){

            if(!isValidName(firstNameValue)){
                document.getElementById("name-feedback").innerText = "Please enter at least two characters"
                event.preventDefault();
            } else {
                document.getElementById("name-feedback").innerText= "";
            }
        }

        function validateLastNameField(lastNameValue, event){

            if(!isValidName(lastNameValue)){
                document.getElementById("name-feedback").innerText = "Please enter at least two characters"
                event.preventDefault();
            } else {
                document.getElementById("name-feedback").innerText= "";
            }
        }

        function validateTelNumberField(telNumberValue, event) {
            if (!isValidNumber(telNumberValue)) {
                document.getElementById("tel-number-feedback").innerText = "Please enter a valid Telephone Number."
                event.preventDefault()
            } else {
                document.getElementById("tel-number-feedback").innerText = "";
            }
        }


        function validatePasswordField(passwordValue, event){
            if(!isValidPassword(passwordValue)){
                document.getElementById("password-feedback").innerText = "Please enter a password with at least 8 characters.";
                event.preventDefault();
            } else {
                document.getElementById("password-feedback").innerText = "";
            }
        }

        function validateCheckboxField(checkBoxValue,event){
            if (checkBoxValue == false){
                document.getElementById("opt-in-feedback").innerText = "Please agree to this."
                event.preventDefault()
            } else {
                document.getElementById("opt-in-feedback").innerText = "";
            }
        }

