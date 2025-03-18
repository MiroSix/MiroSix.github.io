const setup = () => {
    document.getElementById("btn").addEventListener("click", () => {
        let div = document.getElementById("myDIV");
        let p = document.createElement("p");
        let text = document.createTextNode("oiabznroiuazbroiabtioab")
        p.appendChild(text);
        div.appendChild(p);
    })
}
window.addEventListener("load", setup);