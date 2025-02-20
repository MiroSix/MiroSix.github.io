const setup = () => {
    document.getElementById("btnBerekenen").addEventListener("click", bereken);
}

const bereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let aantallen = document.getElementsByClassName("aantal");
    let totaal  = document.getElementById("totaal");

    for (let i = 0; i < 3; i++) {
        let prijs = parseInt(prijzen[i].innerHTML, 10);
        let btw = parseInt(btws[i].innerHTML, 10) / 100;
        let aantal= parseInt(aantallen[i].value);

        subtotalen[i].innerHTML = ((prijs + (prijs * btw)) * aantal).toString() + " Eur";
        totaal.innerHTML = (parseFloat(totaal.innerHTML) + parseFloat(subtotalen[i].innerHTML)).toFixed(2) + " Eur";
    }
}
window.addEventListener("load", setup);