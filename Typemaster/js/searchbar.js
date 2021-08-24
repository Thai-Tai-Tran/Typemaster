// suggestion array

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

function autocompleteMatch(input) {
    if (input == '') {
        return [];
    }

    let reg = new RegExp(input)
    return search_terms.filter(function (term) {
        if (term.match(reg)) {
            return term;
        }
    });
}

    function showResults(val) {
        let results = document.getElementById("autocomplete-box");
        results.innerHTML = '';
        let list = '';
        let terms = autocompleteMatch(val);
        for (let i=0; i<terms.length; i++) {
            list += '<li>' + terms[i] + '</li>';
        }
        results.innerHTML = '<ul>' + list + '</ul>';
        results.classList.remove("inactive");
    }
