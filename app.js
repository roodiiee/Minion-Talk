var textInput = document.querySelector("#text-input")
var btnTranslate = document.querySelector("#btn-translate")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function translate() {
    
    var inputText = textInput.value
    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = textInput.value
    });
}

btnTranslate.addEventListener("click", translate)