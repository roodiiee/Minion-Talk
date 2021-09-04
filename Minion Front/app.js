var btnTranslate = document.querySelector("#btn");
var url = "../next/index.html"
function translate(){
    console.log("clicked")
    window.open(url, '_blank')
    
}
btnTranslate.addEventListener("click", translate)