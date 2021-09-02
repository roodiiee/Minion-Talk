var textInput = document.querySelector("#text-input")
var btnTranslate = document.querySelector("#btn-translate")
var output = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    
    var inputText = textInput.value
    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText
    });
}

btnTranslate.addEventListener("click", clickHandler)