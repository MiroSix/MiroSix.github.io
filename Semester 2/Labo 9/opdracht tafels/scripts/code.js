const setup = () => {
    document.getElementById("btnClick").addEventListener("click", () => {
        let datum = new Date();
        let number = document.getElementById("txtGetal").value;
        voegTafelToe(number, datum);
        saveTafel(number, datum);
    })
    restoreTafels();
}

const voegTafelToe = (number, date) => {
    let template = `
    <div class="tafel">
        <header>
            <p>Tafel van ${number} aangemaakt op: ${date.toTimeString().substring(0, 8)}</p>
        </header>`

    for (let i = 1; i < 11; i++) {
        template += `<div class="row"> 
                        ${number} x ${i} = ${i * number}
                     </div>`;
    }
    template += `</div>`;

    document.getElementById("containerTafels").innerHTML += template;
}

const saveTafel = (number, date) => {
    let tafels = localStorage.getItem("tafels");
    if(tafels === null){
        tafels = [];
    }

    tafels.push({number, date});

    localStorage.setItem("tafels", JSON.stringify(tafels));
}

const restoreTafels = () => {
    let tafels = JSON.parse(localStorage.getItem("tafels"));
    if(tafels === null){
        tafels = [];
    }

    for (let i = 0; i < tafels.length; i++) {
        voegTafelToe(tafels[i].number, new Date(tafels[i].date));
    }
}

window.addEventListener("load", setup);