const setup = () => {
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", veranderAchtergrond);

    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", veranderAchtergrond);

    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", veranderAchtergrond);
}

const veranderAchtergrond = function () {
    if (this.style.backgroundColor === "lightblue") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = "lightblue";
    }
}
window.addEventListener("load", setup);