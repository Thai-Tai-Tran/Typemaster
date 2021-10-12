// Edit Button Functionality
let error = false;

// add Click Event Listeners to all Edit Buttons
addEventListenerByClass('.edit-btn', 'click', toggleEditBtn);

// add Click Event Listeners to all Delete Buttons
addEventListenerByClass('.del-btn', 'click', deleteUserHandler);

function addEventListenerByClass(className, event, fn) {
    const list = document.querySelectorAll(className);
    for (let i = 0, length = list.length; i < length; i++) {
        list[i].addEventListener(event, fn, false);
    }
}
////////////////////////////
// Toogle + Edit + Save Functions

// toggle between Edit Btn functionality and Save Btn functionality
// Edit Btn - highlight and make row entries editable
// Save Btn - remove highlight and editable from row - send changes to classes file (which in turn makes changes
// to the db)
async function toggleEditBtn () {
    const button = this;
    const entryId = this.getAttribute("data-row-id");
    const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");

    // toggle between Edit Btn functionality and Save Btn functionality
    // Edit Btn is currently displayed - Edit Functionality
    if (this.innerHTML === "Edit") {
        // change button text to Save
        this.innerHTML = "Save";
        // toggle Editable on
        toggleRowEditable (this, targetSpans);
    }
    // Save Btn is currently displayed - Save Functionality
    else {
        if (confirm('Confirm Changes?')) {
            //confirmed
            // start waiting indicator
            this.classList.add("grayed-out");
            // start fetch Request
            await changeDbEntries(targetSpans,entryId)
            // end waiting indicator
            button.classList.remove("grayed-out");
            // if there is no error -> toggle
            if(!error){
                // change button text to Edit
                button.innerHTML = "Edit";
                // toggle Editable off
                toggleRowEditable (button, targetSpans);
            }
        }else {
            // if confirmation dialogue is denied do nothing
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
async function changeDbEntries(targetSpans, entryId) {
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

    try {
        // use fetch api to create a promise which sends a request to the updateUsers file with the content of body
        const response = await fetch("../entities/updateUsers.php", {
            method: "POST",
            body: JSON.stringify(fields), // create JSON stdClassObject from array
            // define content-type
            headers: {
                'Content-Type': 'application/text'
            },
        })
        //response status code is not in the range of 200-299
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message); // error causes execution of catch block
        } else{ // response status code is in the range of 200-299
            const message = await response.text();
            // there is text in the response -> validation or other error
            if(message !== "") {
                throw new Error(message);// error causes execution of catch block
            }else { //there is no text in the response -> no errors
                error=false;
            }
        }
    } catch(err) {
        error = true; // there was an error
        alert(err.message);
    }
}

////////////////////////////
// Delete Function

async function deleteUserHandler() {
    // get ID for the body of the request
    const entryId = this.getAttribute("data-row-id");

    if (confirm('Are you sure you want to delete the user?')) {
        // confirmed
        // start waiting indicator
        this.classList.add("grayed-out");
        // start fetch request
        await deleteUser(entryId);
        // end waiting indicator
        this.classList.remove("grayed-out");
        // if there is no error delete row on frontend
        if(!error) {
            const targetSpans = document.querySelectorAll("[data-row-id='" + entryId + "']");
            const targetBtnContainer = document.querySelector(".user-table__btn-container [data-row-id='" + entryId + "']").parentElement;
            targetBtnContainer.setAttribute("style", "display:none");
            for (let i = 0, length = targetSpans.length; i < length - 2; i++) {
                targetSpans[i].setAttribute("style", "display:none");
            }
        }
    } else {
        // if confirmation dialogue is denied do nothing
    }
}

// Delete User
async function deleteUser(id) {
    try {
        // use fetch api to create a promise which sends a request to the deleteUser.classes file with the content of body
        const response = await fetch("../entities/deleteUser.php", {
            method: "POST",
            body: JSON.stringify(id), // create JSON stdClassObject
            // define content-type
            headers: {
                'Content-Type': 'application/text'
            },
        })
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message); // error causes execution of catch block
        } else { // response status code is in the range of 200-299
            const message = await response.text();
            // there is text in the response -> validation or other error
            if (message !== "") {
                throw new Error(message);// error causes execution of catch block
            } else { //there is no text in the response -> no errors
                error = false;
            }
        }
    } catch (err) {
        error = true; // there was an error
        alert(err.message);
    }
}
