//task1

let textarea = document.getElementById('textarea');
let clearBtn = document.getElementById('clear-btn');

textarea.addEventListener('input', function() {
	localStorage.setItem('userText', textarea.value);
})

window.addEventListener('load', setTextarea());

clearBtn.addEventListener('click', function() {
	localStorage.setItem('userText', '');
	setTextarea();
})

function setTextarea() {
	if (localStorage.hasOwnProperty('userText')) {
		textarea.value = localStorage.userText;
	}
}