const compBox = document.querySelector(".comp_box").appendChild(document.createElement("div"));
compBox.id = "comp_num";

const result = document.querySelector(".container").appendChild(document.createElement("div"));

function calculate() {
    const selection = document.querySelector("#selection").value.toLowerCase();
    const userNum = parseInt(document.querySelector("#user_num").value);
    const compNum = getRndInteger(1, 5);
    compBox.innerHTML = `${compNum}`;
    const sum = userNum + compNum;

    if (selection != "") {
        if (selection === "pari" && isEven(sum) || selection === "dispari" && isOdd(sum)) {
            result.innerHTML = `Totale: ${sum} <br> Hai vinto!`
            result.className = "result green";
        } else {
            result.innerHTML = `Totale: ${sum} <br> Hai perso!`
            result.className = "result red";
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(sum) {
    if (sum % 2 === 0) {
        return true;
    }
    return false;
}

function isOdd(sum) {
    if (sum % 2 != 0) {
        return true;
    }
    return false;
}