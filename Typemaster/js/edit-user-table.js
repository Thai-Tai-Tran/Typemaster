// Edit Button Functionality

    // add Click Event Listeners to all Edit Buttons
        addEventListenerByClass('.edit-btn', 'click', toggleRowEditable);

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
        function toggleRowEditable () {
            const rowId = this.getAttribute("data-row-id");
            const targetSpans = document.querySelectorAll("[data-row-id='" + rowId +"']");
            for (let i = 0, length = targetSpans.length; i < length -2; i++) {
                targetSpans[i].toggleAttribute("contenteditable");
                if(targetSpans[i].hasAttribute("onblur") === false) {
                    targetSpans[i].setAttribute("onblur","changeDbEntry(this)");
                }else {
                    targetSpans[i].removeAttribute("onblur");
                }
            }
        }

     // change DB entry on blur

        function changeDbEntry(e) {
            const entryID = e.getAttribute("data-row-id");
            const fieldName = e.getAttribute("data-field-name");
            const fieldValue = e.textContent;



            // send data to php file
            (async () => {
                const response = await fetch('php/updateUsers.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:
                        [
                          JSON.stringify({'fieldName':fieldName}),
                          JSON.stringify({'fieldValue':fieldValue}),
                          JSON.stringify({'id':entryID})
                        ]

                });

                // if (!response.ok) {
                //     const message = `An error has occured: ${response.status}`;
                //     throw new Error(message);
                // }
                // console.log(error.message);

                const content = await response.json();

                console.log(content);
            })();
        }

    // Delete User

        function deleteUser () {
            const entryId = this.getAttribute("data-row-id");
            const targetSpans = document.querySelectorAll("[data-row-id='" + entryId +"']");
            const targetbtnContainer = document.querySelector(".user-table__btn-container [data-row-id='" + rowId +"']").parentElement;


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

                    const content = await rawResponse.json();

                    console.log(content);
                })();

            // delete row on frontend
                targetbtnContainer.setAttribute("style","display:none");
                for (let i = 0, length = targetSpans.length; i < length -2; i++) {
                    targetSpans[i].setAttribute("style","display:none");
                }


        }

