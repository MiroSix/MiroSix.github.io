const setup = () => {
    let familie = ["fam 1", "fam 2", "fam 3", "fam 4", "fam 5"];

    console.log(familie.length);
    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);
    voegNaamToe(familie)
    console.log(familie.join(" - "));
}

voegNaamToe = (arr) => {
    arr.push(prompt("Voeg een naam in: "));
}

window.addEventListener("load", setup);