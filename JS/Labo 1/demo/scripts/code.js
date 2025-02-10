const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    addEventListener("click", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value !== ""){
        alert("Jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value); //simpele manier
        console.log(`jouw naam is ${txtName.value}`); //modernere manier
    }
    else{
        alert("Gelieve jouw naam in te vullen");
    }
}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

window.addEventListener("load", setup);