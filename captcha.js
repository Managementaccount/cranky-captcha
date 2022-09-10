var source;
var answer;
function window(img) {
var box = getElementByTagName("captcha-frame")
box.innerHTML = "<img id='imga'><br /><button id='captfirm' onclick='captcha()'>captcha</button>"
var imgzu = getElementById("imga")
imgzu.src = img 
}
function captcha() {
var arg = prompt("what does the image say or show?")
if (answer == arg) {
location.assign(source)
}
}
