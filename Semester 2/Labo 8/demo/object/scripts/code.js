const setup = () => {
    // Create an object
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date (2000,1,1);
    student.eyeColor = "blue";

    console.log (student.firstName);

    let student1 = {
        firstName: "John",
        lastName: "Doe",
        age: new Date (2000,1,1),
        eyeColor: "blue"
    }

    console.log(student1.firstName);
    console.log(student1.age);

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
    tekst = JSON.stringify(students);
    console.log(tekst);

    tekstJS = JSON.parse(tekst);

    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }
    toonEvenementInfo(evenement);

}
const toonEvenementInfo = (e) => {
    console.log(e.naam);
    console.log(e.datum);
    console.log(e.locatie);
    console.log(e.deelnemers.join(", "));
}

const dagenTotEvenement = (e) => {
    return Math.ceil((e.datum - new Date())/ (1000*3600*24));
}
window.addEventListener("load", setup);