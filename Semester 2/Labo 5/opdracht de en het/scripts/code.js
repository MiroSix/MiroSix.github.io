const setup = () => {

    document.getElementById("btnSend").addEventListener("click", () => {
        let zin = document.getElementById("txtZin").value;
        let stop = false;

        while (!stop) {
            let index = zin.indexOf("de");
            if(index === -1){
                stop = true;
            }
            else{
                let voorDe = zin.substring(0, index);
                let naDe = zin.substring(index + 2, zin.length);
                zin = voorDe + "het" + naDe;
            }
        }
        console.log(zin);
    });
}
window.addEventListener("load", setup);