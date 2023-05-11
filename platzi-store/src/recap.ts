const myName = 'Leonardo Moreno';

myName.toLocaleUpperCase();

const miEdad = 10;

for (let i = 0; i < miEdad; i++) {
  console.log(`Valor de i = ${i}`);
}

console.log(miEdad);

class Person {

  constructor(private name: string, private age: number) {}
  getSummary() {
    return `My name is ${this.name} my age is ${this.age}`;
  }
}

const leo = new Person('Leonardo Moreno', 41);

console.log(leo.getSummary());
