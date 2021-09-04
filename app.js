var btnTranslate = document.querySelector("#btn");
var url = "../Minion Talk/index.html"
function translate(){
    console.log("clicked")
    window.open(url, '_blank')
    
}
btnTranslate.addEventListener("click", translate)