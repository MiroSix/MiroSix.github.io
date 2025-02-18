const setup = () => {
    let txtBelangrijk = document.getElementsByClassName("belangrijk");

    for (let i = 0; i < txtBelangrijk.length; i++) {
        //txtBelangrijk[i].className = "belangrijk opvallend";
        txtBelangrijk[i].className += " opvallend";
    }
}
window.addEventListener("load", setup);