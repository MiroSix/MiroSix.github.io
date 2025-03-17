const setup = () => {
	let btnValideer=document.getElementById("btnToon");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	let roker = document.getElementById("chkIsRoker");
	let favorieteBuurland = document.getElementById("selFavorieteBuurland");
	let moedertaalNL = document.getElementById("rbtMoedertaalNL");
	let moedertaalFR = document.getElementById("rbtMoedertaalFR");
	let moedertaalEN = document.getElementById("rbtMoedertaalEN");

	if(roker.checked === true){
		console.log("is een roker");
	}
	else{
		console.log("is geen roker");
	}
	if(moedertaalNL.checked === true){
		console.log("moedertaal is nl");
	}
	else if(moedertaalFR.checked === true){
		console.log("moedertaal is fr");
	}
	else{
		console.log("moedertaal is en");
	}

	console.log("favoriete buurland is: " + favorieteBuurland.value);

	const bestellingen = document.getElementById('selBestelling');

	let selectedValues = [];

	for (const option of selectElement.options) {
		if (option.selected) {
			selectedValues.push(option.value);
		}
	}
	let lijstje = "bestelling bestaat uit:";
	for (let i = 0; i < selectedValues.length; i++) {
		lijstje += " " + selectedValues[i];
	}
	console.log(lijstje);
};

window.addEventListener("load", setup);