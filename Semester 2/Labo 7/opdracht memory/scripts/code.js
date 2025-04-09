const setup = () => {
    let global = {
        IMAGE_PATH_PREFIX: "images/image",
        IMAGE_PATH_SUFFIX: ".jpg",
        AANTAL_HORIZONTAAL: 4,
        AANTAL_VERTICAAL: 3,
        AANTAL_KAARTEN: 6,
        KAART1NUMBER: 0,
        KAART2NUMBER: 0,
        KAART1SRC: "",
        KAART2SRC: "",
        KAARTEN: ""
    };

    let container = document.getElementById("kaartContainer");
    let button = document.getElementById("startGame");

    button.addEventListener("click", () => {
        button.style.display = "none";
        generateImages();
    });

    const generateImages = () => {
        let images = [];
        for (let i = 0; i <= global.AANTAL_KAARTEN - 1; i++) {
            images.push(i, i);
        }

        for (let i = 0; i < images.length; i++) {
            let random = Math.floor(Math.random() * images.length);
            let temp = images[i];
            images[i] = images[random];
            images[random] = temp;
        }

        container.innerHTML = '';
        let teller = 0;
        for (let nummer of images) {
            let img = document.createElement("img");
            img.src = "";
            img.setAttribute("data-src", `${global.IMAGE_PATH_PREFIX}${nummer}${global.IMAGE_PATH_SUFFIX}`)
            img.setAttribute("data-num", "" + teller)
            img.alt = "kaart";
            img.className = "kaart";
            container.appendChild(img);
            teller++;
        }

        //event listeners voor de kaarten
        global.KAARTEN = document.getElementsByClassName("kaart");

        for (let i = 0; i < global.KAARTEN.length; i++) {
            global.KAARTEN[i].addEventListener("click", (e) => {
                e.target.src = e.target.getAttribute("data-src");

                if(global.KAART1SRC === "") {
                    global.KAART1SRC = e.target.getAttribute("data-src");
                    global.KAART1NUMBER = e.target.getAttribute("data-num");
                }
                else if(global.KAART1SRC !== "") {
                    global.KAART2SRC = e.target.getAttribute("data-src");
                    global.KAART2NUMBER = e.target.getAttribute("data-num");

                }

                if ((global.KAART1SRC !== "") && (global.KAART2SRC !== "")) {

                    setTimeout(() => {
                        if (global.KAART1SRC === global.KAART2SRC) {
                            global.KAARTEN[global.KAART1NUMBER].src = "";
                            global.KAARTEN[global.KAART2NUMBER].src = "";
                            global.KAARTEN[global.KAART1NUMBER].className = "hidden";
                            global.KAARTEN[global.KAART2NUMBER].className = "hidden";
                            global.KAART1SRC = "";
                            global.KAART1NUMBER = 0;
                            global.KAART2SRC = "";
                            global.KAART2NUMBER = 0;
                        }
                        else {
                            global.KAARTEN[global.KAART1NUMBER].src = "";
                            global.KAARTEN[global.KAART2NUMBER].src = "";
                            global.KAART1SRC = "";
                            global.KAART1NUMBER = 0;
                            global.KAART2SRC = "";
                            global.KAART2NUMBER = 0;
                        }
                    }, 1000);
                }
            });
        }
    };
}

window.addEventListener("load", setup);