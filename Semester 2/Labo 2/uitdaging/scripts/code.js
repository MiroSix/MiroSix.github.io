const setup = () => {
    let btnZonder=document.getElementById("btnZonder");
    let btnMet=document.getElementById("btnMet");

    btnZonder.addEventListener("click", zonder);
    btnMet.addEventListener("click", met);
}

zonder = () => {
    let ul=document.getElementById("ul");
    ul.className = "zonder";
}

met = () => {
    let ul=document.getElementById("ul");
    ul.className = "met";
}


window.addEventListener('load',setup); 
