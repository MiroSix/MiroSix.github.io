const setup = () => {



    let btnWijzig = document.getElementById("btnWijzig");
    window.addEventListener("click", wijzig);

}

wijzig = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);