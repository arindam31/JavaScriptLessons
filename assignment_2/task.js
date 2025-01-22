let textSearch = document.getElementById("searchText");
let result = document.getElementById("result");
let searchButton = document.getElementById("searchButton");

function getText() {
    result.innerHTML = textSearch.value + "123";
}

function clearTextArea() {
    textSearch.value = "";
    textSearch.removeEventListener("focus", clearTextArea);
}

function restoreText() {
    if (textSearch.value.trim() === "") {
        textSearch.value = "Enter city";
    }
}

searchButton.addEventListener("click", getText)
textSearch.addEventListener("focus", clearTextArea);
textSearch.addEventListener("blur", restoreText);


