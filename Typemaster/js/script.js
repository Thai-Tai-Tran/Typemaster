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


//     const form = document.getElementById("sign-up-form");
//     enableFastFeedback(form);
//
//     form.submit(function(event){
//         const firstName = getElementById("first-name").val();
//         const password = $("#password").val();
//         const message = $("#message").val();
//         const checked = $("#checkbox").is(":checked");
//
//         validateNameField(name, event)
//         validatePasswordField(password, event)
//         validateMessageField(message, event)
//         validateCheckboxField(checked, event)
//
//     });
//
//
// // fastFeedback
//
//     function enableFastFeedback(formElement){
//         const nameInput = formElement.find("#first-name");
//         const passwordInput = formElement.find("#password");
//         const messageInput = formElement.find("#message");
//         const checkboxInput = formElement.find("#checkbox");
//
//         nameInput.blur(function(event){
//             const name = $(this).val();
//             validateNameField(name,event)
//
//             if (!isValidName(name)) {
//                 $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//             } else{
//                 $(this).css({"box-shadow": "0 0 4px #188", "border": "1px solid #060"});
//             }
//         });
//
//         passwordInput.blur(function(event){
//             const password = $(this).val();
//             validatePasswordField(password, event)
//
//             if (!isValidPassword(password)) {
//                 $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//             } else{
//                 $(this).css({"box-shadow": "0 0 4px #188", "border": "1px solid #060"});
//             }
//         });
//
//         messageInput.blur(function(event){
//             const message = $(this).val();
//             validateMessageField(message, event)
//
//             if (!isValidMessage(message)) {
//                 $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//             } else{
//                 $(this).css({"box-shadow": "0 0 4px #188", "border": "1px solid #060"});
//             }
//         });
//
//         checkboxInput.change(function(event){
//             const isChecked = $(this).is(":checked");
//             validateCheckboxField(isChecked, event)
//
//             if (!isChecked) {
//                 $(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
//             } else{
//                 $(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #188", "border": "1px solid #060"});
//             }
//         });
//
//     }
//
//  // isValid Functions
//
//     function isValidName(name){
//         return name.length >= 2;
//     }
//
//     function isValidPassword(password){
//         return password.length >= 7 && /.*[0-9].*/.test(password);
//         // test for pw length and if it contains a number
//     }
//
//     function isValidMessage(message){
//         return message.trim() != "";
//     }
//
//  //validate functions
//
//     function validateNameField(name, event){
//
//         if(!isValidName(name)){
//             $("#name-feedback").text("Please enter at least two characters")
//             event.preventDefault();
//         } else {
//             $("#name-feedback").text("");
//         }
//     }
//
//
//     function validatePasswordField(password, event){
//         if(!isValidPassword(password)){
//             $("#password-feedback").text("Please enter a password with at least 8 characters.")
//             event.preventDefault();
//         } else {
//             $("#password-feedback").text("");
//         }
//     }
//
//     function validateMessageField(message, event) {
//         if (!isValidMessage(message)) {
//             $("#message-feedback").text("Please enter a message.")
//             event.preventDefault()
//         } else {
//             $("#message-feedback").text("");
//         }
//     }
//
//     function validateCheckboxField(checked, event){
//         if (!checked){
//             $("#checkbox-feedback").text("Please agree to this.")
//             event.preventDefault()
//         } else {
//             $("#checkbox-feedback").text("");
//         }
//     }

