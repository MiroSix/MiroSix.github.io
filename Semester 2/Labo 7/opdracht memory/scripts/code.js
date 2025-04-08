const setup = () => {
    let global = {
        IMAGE_PATH_PREFIX: "images/image",
        IMAGE_PATH_SUFFIX: ".jpg",
        AANTAL_HORIZONTAAL: 4,
        AANTAL_VERTICAAL: 3,
        AANTAL_KAARTEN: 6
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
        for (let nummer of images) {
            let img = document.createElement("img");
            img.src = "";
            img.setAttribute("data-src", `${global.IMAGE_PATH_PREFIX}${nummer}${global.IMAGE_PATH_SUFFIX}`)
            img.alt = "kaart";
            img.className = "kaart";
            container.appendChild(img);
        }

        //event listeners voor de kaarten
        let kaarten = document.getElementsByClassName("kaart");

        let eersteKaart = "";
        let kaart1number = 0;
        let tweedeKaart = "";
        let kaart2number = 0;

        for (let i = 0; i < kaarten.length; i++) {
            kaarten[i].addEventListener("click", () => {
                kaarten[i].src = kaarten[i].getAttribute("data-src");

                if(eersteKaart === "") {
                    eersteKaart = kaarten[i].getAttribute("data-src");
                    kaart1number = i;
                }
                else{
                    tweedeKaart = kaarten[i].getAttribute("data-src");
                    kaart2number = i;
                }

                if ((eersteKaart !== "") && (tweedeKaart !== "")) {
                    // Add 2-second delay before checking the cards
                    setTimeout(() => {
                        if (eersteKaart === tweedeKaart) {
                            kaarten[kaart1number].style.display = "none";
                            kaarten[kaart1number].src = "";
                            kaarten[kaart2number].style.display = "none";
                            kaarten[kaart2number].src = "";
                            eersteKaart = "";
                            kaart1number = 0;
                            tweedeKaart = "";
                            kaart2number = 0;
                        }
                        else {
                            kaarten[kaart1number].src = "";
                            kaarten[kaart2number].src = "";
                            eersteKaart = "";
                            kaart1number = 0;
                            tweedeKaart = "";
                            kaart2number = 0;
                        }
                    }, 1000); // 2000 milliseconds = 2 seconds
                }
            })
        }
    };
}

window.addEventListener("load", setup);