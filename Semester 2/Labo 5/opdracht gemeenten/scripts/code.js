const setup = () => {
    let stop = false;
    let gemeenten = [];
    let select = document.getElementById("select");

    while(!stop) {
        let gemeente = prompt("Geef een gemeente in.");

        if(gemeente === "stop"){
            stop = true;
        }
        else{
            gemeenten.push(gemeente);
        }
    }

    gemeenten.sort();

    for (let j = 0; j < gemeenten.length; j++) {
        select.innerHTML += `<option value="">${gemeenten[j]}</option>`;
    }
}
window.addEventListener("load", setup);