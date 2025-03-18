const setup = () => {
    document.getElementById("selSelectie").addEventListener("click", () => {
        let selectie = document.getElementById("selSelectie");
        let img = document.getElementById("img");
        let note = document.getElementById("note");
        if(selectie.value === "Zonder een ei") {
            img.className = "img";
            note.innerHTML = "Hierboven, een kip zonder ei"
        }
        else if(selectie.value === "Met een ei"){
            img.className = "with-egg";
            note.innerHTML = "Hierboven, een kip met een ei"
        }
    });

    document.getElementById("txtLetter").addEventListener("keyup", () => {
        let letter = document.getElementById("txtLetter").value;
        let note = document.getElementById("note").innerHTML;
        let letters = note.split("");
        let i = 0;

        for (let j = 0; j < letters.length; j++) {
            if(letters[j] === letter){
                i++
            }
        }

        let output = document.getElementById("output");
        output.innerHTML = `de letter "${letter}" komt ${i} keer voor in bovenstaande zin`;
    });
};

window.addEventListener("load", setup);