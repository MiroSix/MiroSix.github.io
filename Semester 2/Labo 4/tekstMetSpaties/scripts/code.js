const setup = () => {
    document.getElementById("send").addEventListener("click", () => {
        let inputText = document.getElementById("txt").value;
        let spacedText = inputText.split('').join(' ');
        console.log(spacedText);
    });

    document.getElementById("sendAn").addEventListener("click", () => {
        let tekst = document.getElementById("txtAn").value;
        let zoekSequentie = "an";
        let teller = 0;
        let index = tekst.indexOf(zoekSequentie);
        while (index !== -1) {
            teller++;
            index = tekst.indexOf(zoekSequentie, index + 1);
        }
        console.log(`De sequentie "${zoekSequentie}" komt ${teller} keer voor.`);
    });

}
window.addEventListener("load", setup);