const setup = () => {
    let lstParDiv = document.querySelectorAll("#myDIV > .color");

    for (let i = 0; i < lstParDiv.length; i++) {
        lstParDiv[i].addEventListener("click", (e) => {
            e.target.className = "colorParDiv";
        });
    }
}
window.addEventListener("load", setup);