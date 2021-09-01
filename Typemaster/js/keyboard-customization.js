const figures = document.querySelectorAll('figure');
const custLayout = document.querySelector("#custom-layout");
const custSwitch = document.querySelector("#custom-switch");
const custExtraM = document.querySelector("#custom-extra-mouse");
const custExtraO = document.querySelector("#custom-extra-other");
const confSelBtn = document.querySelector("#confirm-select-btn");


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

    if ((isDescendant(e.target, parentId)) && (e.target.parentNode.classList.contains("img-box"))) {

        for (let i = 0; i < container.children.length; i++) {
            container.children[i].classList.remove('img-highlight')
        }
        e.target.parentNode.classList.toggle("img-highlight");
        if (selectionComplete()) {
            confSelBtn.classList.remove("grayed-out");
        }else {
            confSelBtn.classList.add("grayed-out");
        }

    }

}

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



function summarizeOrder () {
    const custContainer = document.querySelector(".section-custom");
    let unSelectedOptions = custContainer.querySelectorAll("figure:not(.img-highlight)");
    let allOptionsLay = custLayout.querySelectorAll("figure");
    let allOptionsSw = custSwitch.querySelectorAll("figure");
    let allOptionsEM = custExtraM.querySelectorAll("figure");
    let allOptionsEO = custExtraO.querySelectorAll("figure");
    const custHeading = document.querySelector(".heading-custom");

    for (let element of unSelectedOptions) {
        element.classList.add("inactive");
    }
    summaryMoveLeft(allOptionsLay);
    summaryMoveLeft(allOptionsSw);
    summaryMoveLeft(allOptionsEM);
    summaryMoveLeftEO();
    confSelBtn.classList.add("grayed-out");
    custHeading.innerText = "Your Selection";


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

    function summaryMoveLeftEO () {
        let optionsArray = Array.from(allOptionsEO)
        if ((optionsArray[0].classList.contains("img-highlight")) && (optionsArray[1].classList.contains("img-highlight"))) {
            for (let element of allOptionsEO) {
                element.style.transform = "translateX(-100%) translateX(-2rem)";
            }
            // let i = Array.from(allOptionsEO).indexOf(element)
        }else if ((optionsArray[0].classList.contains("img-highlight")) && !(optionsArray[1].classList.contains("img-highlight")))  {
            optionsArray[0].style.transform = "translateX(-100%) translateX(-2rem)";

        }else if (!(optionsArray[0].classList.contains("img-highlight")) && (optionsArray[1].classList.contains("img-highlight")))  {
            optionsArray[1].style.transform = "translateX(-200%) translateX(-4rem)";
        }
    }
}










