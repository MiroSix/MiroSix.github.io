

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let blue = document.getElementById("sldBlue").value;
    let green = document.getElementById("sldGreen").value;


    let rgb = {
        red: red,
        blue: blue,
        green: green
    };

    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("sliders", jsonText);
};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("sliders");
    if(jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldBlue").value = rgb.blue;
        document.getElementById("sldGreen").value = rgb.green;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue"),
        }
        rgbColors.push(rgb);
    }

    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("swatches", jsonText);
};

const restoreSwatches = () => {
    let jsonText = localStorage.getItem("swatches");

    if (jsonText !== null){
        let rgb = JSON.parse(jsonText);
        for (let i = 0; i < jsonText.length; i++) {
            addSwatchComponent(rgb[i].red, rgb[i].green, rgb[i].blue);
        }
    }
}