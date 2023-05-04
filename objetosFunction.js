function makeAuto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

let auto1 = new makeAuto("TOyota", "Corola", 2020);
let auto2 = new makeAuto("Tesla", "T", 2022);
let auto3 = new makeAuto("Chevrelet", "vitara", 2009);

console.log(auto1);
console.log(auto2);
console.log(auto3);
