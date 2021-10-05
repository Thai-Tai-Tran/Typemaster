// Edit Button Functionality

    // add Click Event Listeners to all Edit Buttons
        addEventListenerByClass('.edit-btn', 'click', toggleEditBtn);

    // add Click Event Listeners to all Delete Buttons
        addEventListenerByClass('.del-btn', 'click', deleteUser);

        function addEventListenerByClass(className, event, fn) {
            const list = document.querySelectorAll(className);
            for (let i = 0, length = list.length; i < length; i++) {
                list[i].addEventListener(event, fn, false);
            }
        }

        // toggle between Edit Btn functionality and Save Btn functionality
        // Edit Btn - highlight and make row entries editable
        // Save Btn - remove hightlight and editable from row - send changes to php file (which in turn mmakes changes
        // to the db
        function toggleEditBtn () {
            const entryId = this.getAttribute("data-row-id");
            const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");

            // toggle between Edit Btn functionality and Save Btn functionality
            //Edit Btn is displayed
            if (this.innerHTML === "Edit") {
                this.innerHTML = "Save";
                toggleRowEditable (this, targetSpans);
            } else {
                // Save Btn is displayed
                if (confirm('Confirm Changes?')) {
                    this.innerHTML = "Edit";
                    toggleRowEditable (this, targetSpans);
                    changeDbEntries(targetSpans, entryId);

                }else {
                }
            }
        }

        // toggle editable on all data in a row
        function toggleRowEditable (e, targetSpans) {

            //toggle Btn Color
            e.classList.toggle("btn--blue");
            e.classList.toggle("btn--green");
            // toggle editable and highlight on row
            // loop through every eligible row entry
            // "length -2" to exclude the 2 buttons at the end of the row with the same attribute
            for (let i = 1, length = targetSpans.length; i < length - 2; i++) {
                targetSpans[i].toggleAttribute("contenteditable");
                targetSpans[i].classList.toggle("edit-highlight");
            }
        }

        // change DB entries on save
        function changeDbEntries(targetSpans, entryId) {
            // start array for the body of the request
            let fields = {};

            // loop through every eligible row entry
            // "length -2" to exclude the 2 buttons at the end of the row with the same attribute
            for (let i = 1, length = targetSpans.length; i < length - 2; i++) {
                let fieldName = targetSpans[i].getAttribute("data-field-name");
                let fieldValue = targetSpans[i].textContent;
                // add new key->[fieldname]/value->fieldValue pair to array
                // angle brackets on {fieldname] needed, because we use a variable (otherwise the key would just be
                // named fieldname -> that would result in a single key value pair fieldname/lastValue
                fields[fieldName] = fieldValue;

                }
            // add ID as last key/value pair
            fields.id = entryId;


            // use fetch api to create a promise which sends a request to the updateUser.php file with the content of body
            fetch("php/updateUsers.php",{
                method : "POST",
                body : JSON.stringify(fields), // create JSON stdClassObject from array
                // define content-type
                headers: {
                    'Content-Type': 'application/text'
                },
            // handle Promise return
            }).then(function(response){
                return response.text();
            }).then(function(text){
                console.log(text);
            // handle error
            }).catch(function(error){
                console.log(error);
            })

}

        // Delete User
        function deleteUser () {
            //get ID for the body of the request
            const entryId = this.getAttribute("data-row-id");

            if (confirm('Are you sure you want to delete the user?')) {
                // confirmed
                // use fetch api to create a promise which sends a request to the deleteUser.php file with the content of body
                fetch("php/deleteUser.php",{
                    method : "POST",
                    body : JSON.stringify(entryId), // create JSON stdClassObject
                    // define content-type
                    headers: {
                        'Content-Type': 'application/text'
                    },
                    // handle Promise return
                }).then(function(response){
                    return response.text();
                }).then(function(text){
                    console.log(text);
                    // handle error
                }).catch(function(error){
                    console.log(error);
                })


                // delete row on frontend
                const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");
                const targetBtnContainer = document.querySelector(".user-table__btn-container [data-row-id='" + entryId +"']").parentElement;
                targetBtnContainer.setAttribute("style","display:none");
                for (let i = 0, length = targetSpans.length; i < length -2; i++) {
                    targetSpans[i].setAttribute("style","display:none");
                }
            } else {
                // if confirmation dialogue is denied do nothing
            }

        }

