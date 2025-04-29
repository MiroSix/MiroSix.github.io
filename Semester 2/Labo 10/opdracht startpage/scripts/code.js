let global= {
    G: "www.google.com/search?q=",
    Y: "www.youtube.com/results?search_query=",
    X: "x.com/hashtag/",
    I: "www.instagram.com/explore/tags/",
    HTTPS_PREFIX: "https://",
    VALID_LETTERS: ["g","y","x","i"]
}

const setup = () => {
    document.getElementById("btnGo").addEventListener("click", executeCommand);
    document.getElementById("btnClearHistory").addEventListener("click", clearHistory);
    restoreCards();
}

const executeCommand = () => {
    let command = document.getElementById("txtCommand").value;
    let commandLetter = command.substring(1,2)
    let url = global.HTTPS_PREFIX;

    if (command.substring(0,1) === "/") {
        if(global.VALID_LETTERS.includes(commandLetter)){
            url += global[commandLetter.toUpperCase()];
        }
        else{
            window.alert("Dit is geen toegestane command letter.")
        }

        url += command.substring(3,command.length).replaceAll(" ", "+")
        createCardAndAppend(commandLetter, command.substring(2), url);
        saveCard(commandLetter, command.substring(2), url);
        window.open(url);
    }
    else{
        window.alert("Fout command.");
    }
}

const createElementWithClassName = (element, classname) =>{
    let object = document.createElement(element);
    object.className = classname;
    return object;
}

const createElementWithClassNameAndText = (element, classname, text) => {
    let object = document.createElement(element);
    object.className = classname;
    object.innerHTML = text;
    return object;
}

const createCardAndAppend = (platform, zoekopdracht, url) => {
    let container = document.getElementById("historyContainer");
    let card = createElementWithClassName("div", "kaart card");
    let cardBody;
    let cardTitle;
    if(platform === "g"){
        cardBody = createElementWithClassName("div", "google card-body");
        cardTitle = createElementWithClassNameAndText("h5", "card-title", "Google");
    }
    else if(platform === "y"){
        cardBody = createElementWithClassName("div", "youtube card-body");
        cardTitle = createElementWithClassNameAndText("h5", "card-title", "Youtube");
    }
    else if(platform === "x"){
        cardBody = createElementWithClassName("div", "twitter card-body");
        cardTitle = createElementWithClassNameAndText("h5", "card-title", "Twitter / X");
    }
    else if(platform === "i"){
        cardBody = createElementWithClassName("div", "instagram card-body");
        cardTitle = createElementWithClassNameAndText("h5", "card-title", "Instagram");
    }

    let cardText = createElementWithClassNameAndText("p", "card-text", zoekopdracht);
    let link = createElementWithClassNameAndText("a", "btn btn-primary", "Go somewhere");
    link.href = url;
    container.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);
}

const saveCard = (platform, zoekopdracht, url) => {
    let cards = localStorage.getItem("cards");
    if(cards === null){
        cards = [];
    }
    else {
        cards = JSON.parse(cards);
    }

    let card = {
        platform: platform,
        zoekopdracht: zoekopdracht,
        url: url
    }

    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));
}

const restoreCards = () => {
    let cards = localStorage.getItem("cards");
    if (cards === null) return;

    cards = JSON.parse(cards);

    for (let i = 0; i < cards.length; i++) {
        createCardAndAppend(cards[i].platform, cards[i].zoekopdracht, cards[i].url);
    }
}

const clearHistory = () => {
    let empty = [];
    localStorage.setItem("cards", JSON.stringify(empty));

    document.getElementById("historyContainer").innerHTML = "";
}

window.addEventListener("load", setup);