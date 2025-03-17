const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", (e) => {
        let img = document.getElementById("imgPhoto");
        let txt = document.getElementById("txtText");
        img.src = "images/bgsky1.jpg";
        txt.innerHTML = "background of sky";

    })
}
window.addEventListener("load", setup);