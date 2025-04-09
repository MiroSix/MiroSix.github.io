let personen = [];
let aanHetBewerken = false;

const bewaarPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");

    valideer();
    if(!hasErrors()){
        let Persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        }

        //als ze aan het bewerken zijn verander je de waardes van de geselecteerde persoon inplaats van toe te voegen
        if(aanHetBewerken){
            personen[lstPersonen.selectedIndex] = Persoon;
            aanHetBewerken = false;
        }
        else{
            personen.push(Persoon);
        }
        updateSelectie();
    }
};

const bewerkNieuwePersoon = () => {
    //gekopieerd van leerkracht in de les
    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.selectedIndex = -1;
    let inputElem = document.querySelectorAll('input[type=text]');
    inputElem.forEach((el) => {
        el.value = "";
    })
};

const bewerkGeselecteerdePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    aanHetBewerken = true;
    document.getElementById("txtVoornaam").value = personen[lstPersonen.selectedIndex].voornaam;
    document.getElementById("txtFamilienaam").value = personen[lstPersonen.selectedIndex].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[lstPersonen.selectedIndex].geboortedatum;
    document.getElementById("txtEmail").value = personen[lstPersonen.selectedIndex].email;
    document.getElementById("txtAantalKinderen").value = personen[lstPersonen.selectedIndex].aantalKinderen;
}

const updateSelectie = () => {
    let selectie = document.getElementById("lstPersonen");
    selectie.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        selectie.innerHTML += "<option>" + personen[i].voornaam + " " + personen[i].familienaam + "</option>";
    }
}

const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarPersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);
    document.getElementById("lstPersonen").addEventListener("change", bewerkGeselecteerdePersoon);
};

window.addEventListener("load", setup);