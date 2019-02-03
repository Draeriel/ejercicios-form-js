let form;
let values = [];

window.onload = function() {
 form = document.getElementById("myForm");
}

function validateForm() {
	values = [];
	retornaValor();
	document.getElementById("paragraf").innerHTML = "Continguts dels diferents camps: " + values.join(", ") + '.';
	return false;
}

function retornaValor() {
		for (let i = 0; i < form.elements.length -1; i++) {
		let element = form.elements[i];
		if(element.type === "text" || element.type === "textarea" || element.type === "select-one") {
			values.push(element.value);
		}
		if((element.type === "radio" || element.type ==="checkbox") && element.checked) {
			values.push(element.value);
		}
	}
}
