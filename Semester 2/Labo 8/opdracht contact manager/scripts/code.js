let personen = [];

const bewaarBewerktePersoon = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    let Persoon = {
        voornaam: txtVoornaam.value,
        familienaam: txtFamilienaam.value,
        geboortedatum: txtGeboortedatum.value,
        email: txtEmail.value,
        aantalKinderen: txtAantalKinderen.value
    }

    personen.push(Persoon);
    valideer();
    updateSelectie();
};

const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("txtPersonen");
    lstPersonen.selectedIndex = -1;
    let inputElem = document.querySelectorAll('input[type=text]');
    inputElem.forEach((el) => {
        el.value = "";
    })

};

const bewerkGeselecteerdePersoon = () => {
    console.log("bewerk geselecteerde");
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);

    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
};

const updateSelectie = () => {
    let selectie = document.getElementById("lstPersonen");
    selectie.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        selectie.innerHTML += "<option>" + personen[i] + "</option>";
    }
}

window.addEventListener("load", setup);