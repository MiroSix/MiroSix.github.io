const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

}

// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

const withoutBullets = () => {

    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/
        listItems[i].className = "listItemsStyleNone colorRed"
    }
}

const withBullets = () => {

    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/
        listItems[i].className = "listItemsStyleDisc colorWhite"
    }
}



window.addEventListener("load", setup);