const setup = () => {

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () => {
    let txtUrl = document.getElementById("txtUrl");

    let image = document.getElementById("image");

    image.src = txtUrl.value;
    image.style.display = "block";

}
window.addEventListener("load", setup);