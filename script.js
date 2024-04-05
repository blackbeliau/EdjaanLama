document.getElementById("transformButton").addEventListener("click", transformText);

function transformText() {
    var inputText = document.getElementById("inputText").value;
    var outputText = transformCharacters(inputText);
    document.getElementById("outputText").value = outputText;
}

function transformCharacters(inputText) {
    return inputText.replace(/ny/g, "nj")
                    .replace(/sy/g, "sj")
                    .replace(/kh/g, "ch")
                    .replace(/j/g, "dj")
                    .replace(/y/g, "j")
                    .replace(/c/g, "tj")
                    .replace(/u/g, "oe");
}
