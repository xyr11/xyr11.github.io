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

function scrollEnterKey() {
	document.addEventListener("keyup", function(event) {
		if (event.keyCode === 13)  scrollToTop();
	});
}

// copy link
function copyjs(id = window.location.href) {
	var input_temp = document.createElement("input");
	input_temp.value = id;
	document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
};