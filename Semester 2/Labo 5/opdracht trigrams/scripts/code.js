const setup = () => {

    document.getElementById("btnSend").addEventListener("click", () => {

        let woord = document.getElementById("txtTrigram").value;
        let lijst = document.getElementById("lijstTrigram");
        let array = woord.split("");

        for (let i = 0; i < woord.length - 2; i++) {
            let trigram = array[i] + array[i + 1] + array[i + 2];
            lijst.innerHTML += `<li>${trigram}</li>`;
            console.log(trigram);
        }
    });
}
window.addEventListener("load", setup);