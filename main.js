// back to top button
const scrollBtn = document.getElementById('backtotop');
const scrollFunc = () => {
	let y = window.scrollY;
	if (y > screen.height * 0.8 && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight - 400) {
		scrollBtn.className = "show";
	} else {
		scrollBtn.className = "";
	}
};
window.addEventListener("scroll", scrollFunc);
const scrollToTop = () => {
	scrollBtn.className = "";
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 50);
	}
};
scrollBtn.onclick = function(e) {
	e.preventDefault();
	scrollToTop();
}
            
/* 
// header background
function getTotalHeight(elementName) {
// check if 'elementName' is string, if not return 0
if(typeof elementName !== 'string') return 0;

// get the height of the header element
    var box = document.querySelector(elementName);
    var offsetHeight = box.offsetHeight;
    var marginTop = parseInt(getComputedStyle(box).marginTop);
    var marginBottom = parseInt(getComputedStyle(box).marginBottom);
    return offsetHeight + marginTop + marginBottom;
    console.log(height);
}
var prevHeight = 0;
function resizeBackground() {
    // get the height of the header element
    var height = getTotalHeight('header') + getTotalHeight('nav');
    if(prevHeight !== height) {document.getElementById("bg").style.height = height-31;}
    prevHeight = height;
}
window.addEventListener('load', (event) => { resizeBackground() });
*/

// copy link
function copyjs(id = window.location.href) {
	var input_temp = document.createElement("input");
	input_temp.value = id;
	document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
};