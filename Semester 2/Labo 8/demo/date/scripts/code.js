const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start);
    console.log(start.getDay());
    console.log(start.getMonth() + 1);
    console.log(start.getFullYear());

    console.log(start.getDate());
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025,0,1);
    console.log(datum);

    let event = new Date();
    console.log(event);
    console.log(event.toISOString());

    let geboortedatum = new Date(2006, 2,7);
    console.log(geboortedatum);
    console.log((event - geboortedatum) / 1000 / 60 / 60 / 24);
    console.log((event - geboortedatum) / 1000 / 60 / 60 / 24 / 365);

}
window.addEventListener("load", setup);