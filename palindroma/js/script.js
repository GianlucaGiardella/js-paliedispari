// variables
const result = document.querySelector(".container").appendChild(document.createElement("div"));
result.className = "result";
const pali = "La parola è palindroma.";
const notPali = "La parola non è palindroma.";

// functions
function identifier() {
    const newWord = document.querySelector("#new_word").value.toLowerCase().trim();
    if (newWord != "") {
        reverseString(newWord) === newWord ? result.innerHTML = `${pali}` : result.innerHTML = `${notPali}`;
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
