const searchContainer = document.querySelector("#search-container");
const inputBox = document.querySelector(".search-input");
const results = document.querySelector(".autocomplete-box");
const preOrdBtn = document.querySelector("#pre-order-button-top");
const SUBtn = document.querySelector("#popup-su__button-open");


let search_terms = [
    "Mechanical Keyboards",
    "Qwerty Keyboards",
    "Wired Keyboards",
    "Numeric Keypads",
    "Ergonomic Keyboards",
    "Wireless Keyboards",
    "USB Keyboards",
    "Bluetooth Keyboards",
    "Magic Keyboards",
    "Gaming Keyboards",
    "Flexible Keyboards",
    "Membrane Keyboards"
];


document.onkeyup = function(e){
    // fill autocomplete box with search results, if the search is active
    let searchResults = document.getElementById("search-results-list")
    if(!results.classList.contains("autocomplete-box--inactive")){
        // close autocomplete box if there are no matching results
        if (!searchResults.hasChildNodes()){
            results.classList.add("autocomplete-box--inactive");
        }
    }
}

document.onclick = function(e){
    // activate searchbar, if the search icon is clicked
    if(e.target === inputBox){
        toggleOn();
        // if there is content in the autocomplete box open that as well (if there is a still a search term inside
        // the search bar upon opening
        let searchResults = document.getElementById("search-results-list")
        if (searchResults.hasChildNodes()) {
            results.classList.remove("autocomplete-box--inactive");
        }

    }else if (!searchContainer.contains(e.target)) {
        toggleOff();
        results.classList.add("autocomplete-box--inactive");
    }
};

function autocompleteMatch(Input) {
    if((Input === "") || (Input === " ")) {
        return []
    }
    return search_terms.filter(e=>e.toLowerCase().indexOf(Input.toLowerCase()) !== -1);
}


function showResults(val) {
   results.innerHTML = '';
   let list = '';
   let terms = autocompleteMatch(val);
   for (let i=0; i<terms.length; i++) {
        list += '<li>' + terms[i] + '</li>';
   }
   results.innerHTML = '<ul id="search-results-list">' + list + '</ul>';
   results.classList.remove("autocomplete-box--inactive");
   replaceInput()
   }

// replace searchbar input with selected value from autocomplete
function replaceInput() {
    let searchResults = document.getElementById("search-results-list");
    searchResults.addEventListener('click', function(e) {
        inputBox.value = e.target.innerText;
        results.classList.add("autocomplete-box--inactive");
    });
}

function toggleOn() {
    inputBox.classList.add("search-input--active");
    preOrdBtn.classList.add("inactive");
    SUBtn.classList.add("inactive");
}

function toggleOff() {
    inputBox.classList.remove("search-input--active");
    preOrdBtn.classList.remove("inactive");
    SUBtn.classList.remove("inactive");
}



