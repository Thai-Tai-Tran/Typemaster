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

        const Days = [31,28,31,30,31,30,31,31,30,31,30,31]; // days in the month - index => month [0-11]
        const day = document.getElementById('day');
        const month = document.getElementById('month');
        const year = document.getElementById('year');

        document.addEventListener('DOMContentLoaded', function () {
            // add days
            for (let i = 1; i <= Days[0]; i++) { //add option days
                let option = document.createElement("option");
                option.innerHTML = '<option value="' + i + '">' + i + '</option>';
                day.append(option);
            }

            // add months

            for (let i=1;i <= 12;i++){
                let option = document.createElement("option");
                option.innerHTML = '<option value="'+ i + '">' + i + '</option>';
                month.append(option);
            }


            // add years

            let d = new Date();
            for (let i=1930;i <= d.getFullYear();i++){// years start i
                let option = document.createElement("option");
                option.innerHTML = '<option value="'+ i + '">' + i + '</option>';
                year.append(option);
            }

        })

    // Leap year Function

        function removeOptions(selectElement) {
            let i, L = selectElement.options.length -1;
            for(i = L; i >= 0; i--) {
                selectElement.remove(i);
            }
        }

        function isLeapYear(year) {
            year = parseInt(year);
            if (year % 4 != 0) {
                return false;
            } else if (year % 400 == 0) {
                return true;
            } else if (year % 100 == 0) {
                return false;
            } else {
                return true;
            }
        }

        function change_year()
        {
            if(isLeapYear(year.value))
            {
                Days[1] = 29;

            }
            else {
                Days[1] = 28;
            }

            if(month.value == 2)
            {
                let dayVal = day.value;

                removeOptions(day);
                let option0 = document.createElement("option");
                day.append(option0)
                for (let i = 1; i <= Days[1]; i++) { //add option days
                    let option = document.createElement("option");
                    option.innerHTML = '<option value="' + i + '">' + i + '</option>';
                    day.append(option);
                }

                if( dayVal > Days[ month ] )
                {
                    dayVal = 1;
                }
                day.value="dayVal";
            }
        }

        function change_month() {

            let dayVal = day.value;
            removeOptions(day);
            let cmonth = parseInt(month.value) - 1;
            for (let i=1;i <= Days[ cmonth ];i++){ //add option days
                let option = document.createElement("option");
                option.innerHTML = '<option value="' + i + '">' + i + '</option>';
                day.append(option);
            }
            if( dayVal > Days[ cmonth ] )
            {
                dayVal = 1;
            }
            day.value="dayVal";
        }
    // Setup

        const form = document.getElementById("sign-up-form");


        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const telNumber = document.getElementById("tel-number");
        const password = document.getElementById("password");
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

