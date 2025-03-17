const setup = () => {
    document.getElementById("btnToon").addEventListener("click", () => {
        let allValid = true;

        // Voornaam validatie
        let naam = document.getElementById("txtNaam");
        let errorNaam = document.getElementById("errorNaam");
        if (naam.value.trim().length > 30) {
            naam.classList.add("error");
            errorNaam.textContent = "max. 30 karakters";
            errorNaam.classList.remove("hidden");
            allValid = false;
        } else {
            naam.classList.remove("error");
            errorNaam.classList.add("hidden");
        }

        // Familienaam validatie
        let familienaam = document.getElementById("txtFamNaam");
        let errorFamNaam = document.getElementById("errorFamNaam");
        if (familienaam.value.trim().length > 50) {
            familienaam.classList.add("error");
            errorFamNaam.textContent = "max 50 karakters";
            errorFamNaam.classList.remove("hidden");
            allValid = false;
        } else if (familienaam.value.trim() === "") {
            familienaam.classList.add("error");
            errorFamNaam.textContent = "verplicht veld";
            errorFamNaam.classList.remove("hidden");
            allValid = false;
        } else {
            familienaam.classList.remove("error");
            errorFamNaam.classList.add("hidden");
        }

        // Geboortedatum validatie
        let datum = document.getElementById("datGeboorte");
        let errorDatum = document.getElementById("errorDatum");
        if (datum.value === "") {
            datum.classList.add("error");
            errorDatum.textContent = "verplicht veld";
            errorDatum.classList.remove("hidden");
            allValid = false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(datum.value)) {
            datum.classList.add("error");
            errorDatum.textContent = "formaat is niet jjjj-mm-dd";
            errorDatum.classList.remove("hidden");
            allValid = false;
        } else {
            datum.classList.remove("error");
            errorDatum.classList.add("hidden");
        }

        // E-mail validatie
        let email = document.getElementById("txtEmail");
        let errorEmail = document.getElementById("errorEmail");
        const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (email.value.trim() === "") {
            email.classList.add("error");
            errorEmail.textContent = "verplicht veld";
            errorEmail.classList.remove("hidden");
            allValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            email.classList.add("error");
            errorEmail.textContent = "geen geldig email adres";
            errorEmail.classList.remove("hidden");
            allValid = false;
        } else {
            email.classList.remove("error");
            errorEmail.classList.add("hidden");
        }

        // Aantal kinderen validatie
        let kinderen = document.getElementById("numAantalKinderen");
        let errorKinderen = document.getElementById("errorKinderen");
        if (kinderen.value < 0) {
            kinderen.classList.add("error");
            errorKinderen.textContent = "is geen positief getal";
            errorKinderen.classList.remove("hidden");
            allValid = false;
        } else if (kinderen.value >= 99) {
            kinderen.classList.add("error");
            errorKinderen.textContent = "is te vruchtbaar";
            errorKinderen.classList.remove("hidden");
            allValid = false;
        } else {
            kinderen.classList.remove("error");
            errorKinderen.classList.add("hidden");
        }

        // Toon popup als alles geldig is
        if (allValid) {
            alert("proficiat!");
        }
    });
}

window.addEventListener("load", setup);