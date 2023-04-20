const result = document.querySelector(".container").appendChild(document.createElement("div"));
result.className = "result";

function identifier() {
    const newWord = document.querySelector("#new_word").value;
    if (newWord != "") {
        const pali = "La parola è palindroma.";
        const notPali = "La parola non è palindroma.";
        reverseString(newWord) === newWord ? result.innerHTML = `${pali}` : result.innerHTML = `${notPali}`;
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
