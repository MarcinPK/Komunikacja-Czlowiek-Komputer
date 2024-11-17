const tablica = [
    { id: 1, nazwa: "obiekt1", wartosc: 100 },
    { id: 2, nazwa: "obiekt2", wartosc: 200 },
    { id: 3, nazwa: "obiekt3", wartosc: 300 },
    { id: 4, nazwa: "obiekt4", wartosc: 400 }
];

console.log(tablica);

function displayProperties() {
    tablica.forEach((obj, index) => {
        console.log(`Element ${index + 1}:`);
     Object.entries(obj).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
        });
    });
}

document.getElementById("properties").addEventListener("click", displayProperties);