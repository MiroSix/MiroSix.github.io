const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let labels = document.getElementsByClassName("label");
	let blok=document.getElementById("swatch");
	let body=document.getElementById("body");

	for (let i = 0; i < labels.length; i++) {
		labels[i].innerHTML = sliders[i].value;
	}

	blok.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
	body.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);
window.addEventListener("load", update);