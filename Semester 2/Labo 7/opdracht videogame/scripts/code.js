const setup = () => {
    let global = {
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    };

    let image = document.getElementById("image");
    let button = document.getElementById("startGame");
    document.getElementById("startGame").addEventListener("click",  () => {

        image.style.display = "block";
        button.style.display = "none";
        updateScore();
    })

    const veranderImage = () =>{
        if (image.src.endsWith("images/0.png")) {
            gameOver();
        }
        else{
            let xPos = Math.random() * 801;
            let yPos = Math.random() * 601;
            image.style.position = "absolute";
            image.style.left = xPos + "px";
            image.style.top = yPos + "px";
            image.src = `${global.IMAGE_PATH_PREFIX}${Math.floor(Math.random() * global.IMAGE_COUNT)}${global.IMAGE_PATH_SUFFIX}`;
            if (image.src.endsWith("images/0.png")) {
                setTimeout(() => {
                    image.src = `${global.IMAGE_PATH_PREFIX}${Math.floor(Math.random() * (global.IMAGE_COUNT - 1)) + 1}${global.IMAGE_PATH_SUFFIX}`
                }, 1000);
            }
            global.score++;
            updateScore();
        }
    }

    let scoreElement = document.getElementById("score");
    const updateScore = () => {
        scoreElement.innerHTML = `Aantal Hits: ${global.score}`;
    }

    const gameOver = () => {
        window.alert("ts pmo gng u done clicked the bom u dead asf twin.");
        global.score = 0;
        updateScore();
    }

    document.getElementById("image").addEventListener("click", veranderImage);
};

window.addEventListener("load", setup);