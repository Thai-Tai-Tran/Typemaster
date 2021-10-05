// global values
const figures = document.querySelectorAll('figure');
const custLayout = document.querySelector("#custom-layout");
const custSwitch = document.querySelector("#custom-switch");
const custExtraM = document.querySelector("#custom-extra-mouse");
const custExtraO = document.querySelector("#custom-extra-other");
const confSelBtn = document.querySelector("#confirm-select-btn");

// toggle highlight
    for (let figure of figures) {
        figure.addEventListener("click", function (e) {

            const layoutId = 'custom-layout'
            const switchId = 'custom-switch'
            const extraMId = 'custom-extra-mouse'
            const extraOId = "custom-extra-other"


            selectionSingle(e, custLayout, layoutId);
            selectionSingle(e, custSwitch, switchId);
            selectionSingle(e, custExtraM, extraMId);

            if ((isDescendant(e.target, extraOId) && (e.target.parentNode.classList.contains("img-box")))) {
                e.target.parentNode.classList.toggle("img-highlight");
            }

        })
    }

    // Sub-Functions

    // function to determine whether the clicked element is a descendant of a parent
    const isDescendant = (el, parentId) => {
        let isChild = false

        if (el.id === parentId) { //is this the element itself?
            isChild = false
        }

        while (el = el.parentNode) {
            if (el.id == parentId) {
                isChild = true
            }
        }

        return isChild
    }


    function selectionSingle (e, container, parentId) {

        // highlight clicked img box
        if ((isDescendant(e.target, parentId)) && (e.target.parentNode.classList.contains("img-box"))) {

            // remove highlight from other options in the same category
            for (let i = 0; i < container.children.length; i++) {
                container.children[i].classList.remove('img-highlight')
            }
            e.target.parentNode.classList.toggle("img-highlight");

            // remove grayed out effect on submit button, if the selection is complete
            if (selectionComplete()) {
                confSelBtn.classList.remove("grayed-out");
            }else {
                confSelBtn.classList.add("grayed-out");
            }

        }

    }
    // check for highlights on essential selection items
    function selectionComplete () {

        let checkLayout = false;
        let checkSwitch = false;
        let checkExtraM = false;

            for (let element of custLayout.children) {
                if (element.classList.contains("img-highlight")) {
                    checkLayout = true;
                }
            }

            for (let element of custSwitch.children) {
                if (element.classList.contains("img-highlight")) {
                    checkSwitch = true;
                }
            }

            for (let element of custExtraM.children) {
                if(element.classList.contains("img-highlight")) {
                    checkExtraM = true;
                }

            }

            if((checkLayout) && (checkSwitch) &&(checkExtraM)) {
                return true;
            }
    }

//Summary

    function summarizeOrder () {
        //local Variables
        const custContainer = document.querySelector(".section-custom");
        const summaryContainer = document.querySelector(".summary-row");
        let unSelectedOptions = custContainer.querySelectorAll("figure:not(.img-highlight)");

        let allOptionsLay = custLayout.querySelectorAll("figure");
        let allOptionsSw = custSwitch.querySelectorAll("figure");
        let allOptionsEM = custExtraM.querySelectorAll("figure");
        let allOptionsEO = custExtraO.querySelectorAll("figure");

        const custHeading = document.querySelector(".heading-custom");

        // main function block
        for (let element of unSelectedOptions) {
            element.classList.add("inactive");
        }
        // move selected options ot the left after other options are removed
        summaryMoveLeft(allOptionsLay);
        summaryMoveLeft(allOptionsSw);
        summaryMoveLeft(allOptionsEM);
        summaryMoveLeftEO();
        // gray out submit btn
        confSelBtn.classList.add("grayed-out--final");
        // change section header text
        custHeading.innerText = "Your Selection";

        // add Summary Texts
        let node1 = document.createElement("DIV");
        node1.classList.add("summary-text")
        let textnode1 = document.createTextNode("Your total is: " + calcPrice() +"€");
        node1.appendChild(textnode1);
        summaryContainer.appendChild(node1);

        let node2 = document.createElement("SPAN");
        node2.classList.add("summary-sub-text")
        let textnode2 = document.createTextNode("*Base Price 200€ + Extras");
        node2.appendChild(textnode2);
        summaryContainer.appendChild(node2);


        // Sub-Functions
        // move selected options ot the left after other options are removed
        function summaryMoveLeft (allOptions) {
            for (let element of allOptions) {
                let i = Array.from(allOptions).indexOf(element)
                let x = (i * -100);
                let y = (i * -2)
                if (element.classList.contains("img-highlight")) {
                    element.style.transform = "translateX(" + x + "%) translateX(" + y + "rem)";
                }

            }
        }
        // move selected options ot the left after other options are removed
        function summaryMoveLeftEO () {
            let optionsArray = Array.from(allOptionsEO)
            if ((optionsArray[0].classList.contains("img-highlight")) && (optionsArray[1].classList.contains("img-highlight"))) {
                for (let element of allOptionsEO) {
                    element.style.transform = "translateX(-100%) translateX(-2rem)";
                }

            }else if ((optionsArray[0].classList.contains("img-highlight")) && !(optionsArray[1].classList.contains("img-highlight")))  {
                optionsArray[0].style.transform = "translateX(-100%) translateX(-2rem)";

            }else if (!(optionsArray[0].classList.contains("img-highlight")) && (optionsArray[1].classList.contains("img-highlight")))  {
                optionsArray[1].style.transform = "translateX(-200%) translateX(-4rem)";
            }
        }

        function calcPrice () {

            let selectedOptions = custContainer.querySelectorAll("figure.img-highlight");

            let WirelessMousePrice = 0;
            let WiredMousePrice = 0;
            let MousepadPrice = 0;
            let LightingPrice = 0;

            WirelessMousePrice = priceOfSelected(allOptionsEM[0]);
            WiredMousePrice = priceOfSelected(allOptionsEM[1]);
            MousepadPrice = priceOfSelected(allOptionsEO[0]);
            LightingPrice = priceOfSelected(allOptionsEO[1]);

            function priceOfSelected(target) {
                if(Array.from(selectedOptions).includes(target)) {
                    return parseFloat(target.dataset.price);
                } else {
                    return parseFloat("0");
                }
            }

            return 200 + WirelessMousePrice + WiredMousePrice + MousepadPrice +LightingPrice;
        }
    }









