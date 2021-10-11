// Popup + Overlay Functionality
const openPopupButton = document.getElementById('popup-su__button-open')
const closePopupButton = document.getElementById('popup-su__button-close')
const popupSu = document.getElementById('popup-su')
const overlay = document.getElementById('overlay')

// set open functionality on button
openPopupButton.addEventListener("click", () => {
    openPopupSu()
});

// close popup when clicking outside out the popup
overlay.addEventListener('click', () => {
    const popupsActive = document.querySelectorAll('.popup--active')
    popupsActive.forEach(popup => {
        closePopup()
    })
})

// close popup when clicking on the "X"
closePopupButton.addEventListener('click', () => {
        closePopup()
    })

// open Popup and activate overlay over the rest of the content
function openPopupSu() {
    if (openPopupButton == null) return
    popupSu.classList.add('popup--active')
    overlay.classList.add('overlay--active')
}
// reverse
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
        // add days to every month according to actual of its days as options
        for (let i = 1; i <= Days[0]; i++) {
            let option = document.createElement("option");
            option.innerHTML = '<option value="' + i + '">' + i + '</option>';
            day.append(option);
        }

        // add months as options
        for (let i=1;i <= 12;i++){
            let option = document.createElement("option");
            option.innerHTML = '<option value="'+ i + '">' + i + '</option>';
            month.append(option);
        }

        // add years as options starting from 1930 till current year
        let d = new Date();
        for (let i=1930;i <= d.getFullYear();i++){// years start i
            let option = document.createElement("option");
            option.innerHTML = '<option value="'+ i + '">' + i + '</option>';
            year.append(option);
        }

    })

    // check for leap years
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
    // when the year is changed - change the number of days for the second month -> feburary
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
            for (let i = 1; i <= Days[1]; i++) { //add option days
                let option = document.createElement("option");
                option.innerHTML = '<option value="' + i + '">' + i + '</option>';
                day.append(option);
            }

            if( dayVal > Days[ month ] )
            {
                dayVal = 1;
            }
            day.value= dayVal;
        }
    }

    // when the month is changed change the number of days accordingly
    function change_month() {

        let dayVal = day.value;
        removeOptions(day);
        let cmonth = parseInt(month.value) - 1;
        let initialOption = document.createElement("option");
        initialOption.setAttribute('value','');
        initialOption.setAttribute('disabled','');
        initialOption.setAttribute('selected','');
        initialOption.setAttribute('hidden','');
        initialOption.innerHTML = "Day";
        day.append(initialOption);
        for (let i=1;i <= Days[ cmonth ];i++){ //add option days
            let option = document.createElement("option");
            option.innerHTML = '<option value="' + i + '">' + i + '</option>';
            day.append(option);
        }
        if( dayVal > Days[ cmonth ] )
        {
            dayVal = 1;
        }
        day.value= dayVal;
    }

// Form Validation

    const form = document.getElementById("sign-up-form");
    const userName = document.getElementById("username");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailAddress = document.getElementById("email");
    const telNumber = document.getElementById("tel-number");
    const password = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const btnSubmit = document.getElementById("btnSubmit");
    const submitFeedback = document.querySelector(".submit-feedback");

    let valid = false;
    let error = false;

     form.addEventListener('submit', formValidateFunction);

     enableFastFeedback(form);

     function formValidateFunction(event){

         // Form status: Processing
             btnSubmit.value = "Processing...";
             btnSubmit.classList.add("grayed-out");

         // variables to check number of users in db
             let userNumber1;
             let userNumber2;

         // validate input
         validateUserNameField(userName.value, event)
         validateFirstNameField(firstName.value, event)
         validateLastNameField(lastName.value, event)
         validateEmailAddressField(emailAddress.value, event)
         validateTelNumberField(telNumber.value, event)
         validatePasswordField(password.value, event)
         validateCheckboxField(checkbox.checked, event)

         // if validation fails reset in process indicator and stop the rest of the function
         if(!valid) {
             btnSubmit.value = "Register";
             btnSubmit.classList.remove("grayed-out");
             return;
         }


         ( async() => { //IIFE (Immediately Invoked Function Expression)
                 //check number of users before submission
                 userNumber1 = await checkUserNumber();
                //check number of users after submission
                 userNumber2 = await checkUserNumber();

                 // reset form when user was added
                 if(userNumber1<userNumber2) {
                     resetForm();
                     successNote();
                 // no user was added + username was already taken, because there is no error or the error was thrown just before
                 }else if(error === false || submitFeedback.innerText === "The username has already been taken") {
                     submitFeedback.innerText = "The username has already been taken"
                     errorNote();
                 }

             })()

         // userNumber1 = checkUserNumber().then();
         //
         // checkUserNumber().catch(error => {
         //     error.message;
         // });

        // // check number of users after submission
        //  checkUserNumber().then(number => {
        //      userNumber2 = number[0]["COUNT(*)"];
        //
        //      // reset form when user was added
        //      if(userNumber1<userNumber2) {
        //          resetForm();
        //          successNote();
        //      // username was already taken because there is no error, but no user was added
        //      }else if(error === false) {
        //          submitFeedback.innerText = "The username has already been taken"
        //          errorNote();
        //      }
        //  });
        //  // error handling
        //  checkUserNumber().catch(error => {
        //      error.message;
        //      if (error.message != null) {
        //          if (error.message === "Unexpected token < in JSON at position 0" ) {
        //              submitFeedback.innerText = "An error has occured";
        //          } else{
        //              submitFeedback.innerText = error.message;
        //          }
        //          errorNote();
        //      }
        //  });

    }

// Fast Feedback
// toggle highlight based on validity on blur
    function enableFastFeedback(){

        userName.addEventListener("blur",function(event){
            const userNameValue = this.value;
            validateUserNameField(userNameValue,event)

            if (!isValidUserName(userNameValue)) {
                this.setAttribute("style","box-shadow:var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

        firstName.addEventListener("blur",function(event){
            const firstNameValue = this.value;
            validateFirstNameField(firstNameValue,event)

            if (!isValidName(firstNameValue)) {
                this.setAttribute("style","box-shadow:var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

      lastName.addEventListener("blur",function(event){
            const lastNameValue = this.value;
            validateLastNameField(lastNameValue,event)

            if (!isValidName(lastNameValue)) {
                this.setAttribute("style","box-shadow: var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

      emailAddress.addEventListener("blur",function(event){
            const emailValue = this.value;
            validateEmailAddressField(emailValue,event)

            if (!isValidEmail(emailValue)) {
                this.setAttribute("style","box-shadow: var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

        telNumber.addEventListener("blur",function(event){
            const telNumberValue = this.value;
            validateTelNumberField(telNumberValue, event)

            if (!isValidNumber(telNumberValue)) {
                this.setAttribute("style","box-shadow:var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

        password.addEventListener("blur",function(event){
            const passwordValue = this.value;
            validatePasswordField(passwordValue, event)

            if (!isValidPassword(passwordValue)) {
                this.setAttribute("style","box-shadow:var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

        checkbox.addEventListener("change",function(event){
            const checkBoxValue = this.checked
            validateCheckboxField(checkBoxValue,event)

            if (checkBoxValue == false) {
                this.setAttribute("style","box-shadow:var(--box-shadow-red); border: 1px solid var(--color-red);");
            } else{
                this.setAttribute("style","box-shadow: var(--box-shadow-green); border: 1px solid var(--color-green);");
            }
        });

    }

 // isValid Functions

    function isValidUserName(name){
        return name.length >= 2;
    }

    function isValidName(name){
        return name.length >= 2;
    }

    function isValidEmail(emailValue) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)

    }

    function isValidNumber(telNumberValue){
        let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(telNumberValue.match(phoneno))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function isValidPassword(passwordValue){
        // test for pw length and if it contains a number
        return passwordValue.length >= 7 && /.*[0-9].*/.test(passwordValue);

    }

    // validate functions
    // fill feedback text and prevent submit, on invalid input
    function validateUserNameField(userNameValue, event){

        if(!isValidUserName(userNameValue)){
            document.getElementById("username-feedback").innerText = "Please enter at least two characters"
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("username-feedback").innerText= "";
            valid = true;
        }
    }

    function validateFirstNameField(firstNameValue, event){

        if(!isValidName(firstNameValue)){
            document.getElementById("name-feedback").innerText = "Please enter at least two characters"
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("name-feedback").innerText= "";
            valid = true;
        }
    }

    function validateLastNameField(lastNameValue, event){

        if(!isValidName(lastNameValue)){
            document.getElementById("name-feedback").innerText = "Please enter at least two characters"
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("name-feedback").innerText= "";
            valid = true;
        }
    }

    function validateEmailAddressField(emailValue, event) {
        if (!isValidEmail(emailValue)) {
            document.getElementById("email-feedback").innerText = "Please enter a valid Email Address."
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("email-feedback").innerText = "";
            valid = true;
        }
    }

    function validateTelNumberField(telNumberValue, event) {
        if (!isValidNumber(telNumberValue)) {
            document.getElementById("tel-number-feedback").innerText = "Please enter a valid Telephone Number."
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("tel-number-feedback").innerText = "";
            valid = true;
        }
    }

    function validatePasswordField(passwordValue, event){
        if(!isValidPassword(passwordValue)){
            document.getElementById("password-feedback").innerText = "Please enter a password with at least 8 characters.";
            valid = false;
            event.preventDefault();
        } else {
            document.getElementById("password-feedback").innerText = "";
            valid = true;
        }
    }

    function validateCheckboxField(checkBoxValue,event){
        if (checkBoxValue === false){
            document.getElementById("opt-in-feedback").innerText = "Please agree to this."
            valid = false;
            event.preventDefault()
        } else {
            document.getElementById("opt-in-feedback").innerText = "";
            valid = true;
        }
    }

// fetch api request to check for current number of users
async function checkUserNumber() {
    try{
    const response = await fetch('../entities/checkUserNumber.php');
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message); // error causes execution of catch block
    }

    const data = await response.json()
    const finalData = await processData(data)
    return finalData;

    }catch(err) {
        // there was an entities error instead of the expected js object
        if (err.message === "Unexpected token < in JSON at position 0" ) {
            submitFeedback.innerText = "An error has occured";
            submitFeedback.innerText = error.message;
        } else{ // a different error occured
            submitFeedback.innerText = error.message;
        }
        errorNote();
    }

}
// get user number value out of the JS Object
async function processData(response) {
    return response[0]["COUNT(*)"];
}

function successNote() {
        submitFeedback.setAttribute("style","color: var(--color-grey-light-1); opacity: 0;");
        submitFeedback.innerText = "Thank you for your registration!";
        submitFeedback.classList.add("fadeInOut");
        btnSubmit.value = "Register";
        btnSubmit.classList.remove("grayed-out");
        error = false;

        setTimeout(function(){
            submitFeedback.classList.remove("fadeInOut");
        }, 5000);
}

function errorNote() {
    submitFeedback.setAttribute("style","color: var(--color-red); opacity: 1;");
    btnSubmit.value = "Register";
    btnSubmit.classList.remove("grayed-out");
    error = true;
}

function resetForm() {
    // reset inputs
        form.reset();

    // reset box shadow
        const inputs = document.querySelectorAll("#sign-up-form input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("style","box-shadow:");
        }
}






