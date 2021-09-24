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



    // toggle editable on all data in a row
    // add onblur function to save changes to the db
    // "length -2" to exclude the 2 buttons at the end of the row with the same attribute
    //
        function toggleEditBtn () {
            const entryId = this.getAttribute("data-row-id");
            const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");

            // toggle Edit button

            if (this.innerHTML === "Edit") {
                this.innerHTML = "Save";
                toggleRowEditable (this, targetSpans);
            } else {
                if (confirm('Confirm Changes?')) {
                    this.innerHTML = "Edit";
                    toggleRowEditable (this, targetSpans);
                    changeDbEntries(targetSpans, entryId);

                }else {
                }
            }
        }
        function toggleRowEditable (e, targetSpans) {

            //toggle Btn Color
            e.classList.toggle("btn--blue");
            e.classList.toggle("btn--green");
            // toggle row
            for (let i = 1, length = targetSpans.length; i < length - 2; i++) {
                targetSpans[i].toggleAttribute("contenteditable");
                targetSpans[i].classList.toggle("edit-highlight");
            }
        }

     // change DB entries on save

        function changeDbEntries(targetSpans, entryId) {
            let fields = [];
            // let fieldsTest = {}


            for (let i = 1, length = targetSpans.length; i < length - 2; i++) {

                fields +=

                            [
                                JSON.stringify({'fieldName': targetSpans[i].getAttribute("data-field-name")}),
                                JSON.stringify({'fieldValue': targetSpans[i].textContent})

                            ]

                // fieldsTest += {
                //     fieldName: targetSpans[i].getAttribute("data-field-name"),
                //     fieldValue: targetSpans[i].textContent
                // }


                }


            fields += {'id':entryId};
            console.log(fields);


            // send data to php file
            (async () => {
                const response = await fetch('php/updateUsers.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: fields

                }).then(res =>{
                    console.log(res);
                });
            //
            //     // if (!response.ok) {
            //     //     const message = `An error has occured: ${response.status}`;
            //     //     throw new Error(message);
            //     // }
                // console.log(error.message);
            //
            //     const content = await response.json();
            //
            //     console.log(content);
            })();

}

    // Delete User

        function deleteUser () {
            const entryId = this.getAttribute("data-row-id");
            const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");
            const targetbtnContainer = document.querySelector(".user-table__btn-container [data-row-id='" + entryId +"']").parentElement;

            if (confirm('Are you sure you want to delete the user?')) {
                // Delete
                //send data to php file
                (async () => {
                    const response = await fetch('php/deleteUser.php', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({'id':entryId})

                    });

                    const content = await response.json();

                    console.log(content);
                })();

                // delete row on frontend
                targetbtnContainer.setAttribute("style","display:none");
                for (let i = 0, length = targetSpans.length; i < length -2; i++) {
                    targetSpans[i].setAttribute("style","display:none");
                }
            } else {
                // Do nothing!
            }



        }

