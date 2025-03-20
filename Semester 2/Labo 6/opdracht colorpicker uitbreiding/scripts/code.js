const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	document.getElementById("btnSave").addEventListener("click", () =>{
		let swatches = document.getElementById("savedSwatches");
		let swatch = document.createElement("div");
		let blok=document.getElementById("swatch");
		let kruis = document.createElement("div");
		let sliders = document.getElementsByClassName("slider");

		//swatch toevoegen en bewerken
		swatches.appendChild(swatch);
		swatch.appendChild(kruis);
		swatch.setAttribute("data-red", sliders[0].value);
		swatch.setAttribute("data-green", sliders[1].value);
		swatch.setAttribute("data-blue", sliders[2].value);
		swatch.setAttribute("class", "swatch");
		swatch.style.backgroundColor = `rgb(${sliders[0].getAttribute("data-red")}, ${sliders[1].getAttribute("data-green")}, ${sliders[2].getAttribute("data-blue")})`;

		//kruis bewerken
		kruis.innerText	= "X";
		kruis.className = "exitKnop";
		kruis.addEventListener("click", (e) => {
			swatch.remove();
			e.stopPropagation();
		})

		//kleur opvragen en terugzetten van een gekozen swatch
		swatch.addEventListener("click", () => {
			console.log("click");
			blok.style.backgroundColor = `rgb(${swatch.getAttribute("data-red")}, ${swatch.getAttribute("data-green")}, ${swatch.getAttribute("data-blue")})`;
		})
	})
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let labels = document.getElementsByClassName("label");
	let blok=document.getElementById("swatch");

	for (let i = 0; i < labels.length; i++) {
		labels[i].innerHTML = sliders[i].value;
	}

	sliders[0].setAttribute("data-red", sliders[0].value);
	sliders[1].setAttribute("data-green", sliders[1].value);
	sliders[2].setAttribute("data-blue", sliders[2].value);

	blok.style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
}

window.addEventListener("load", setup);
window.addEventListener("load", update);