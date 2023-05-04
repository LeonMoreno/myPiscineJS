const numbers = [42, 3, 5];


console.log(numbers.join(' - '));

console.log(numbers.toString());

const user = {
    id: 1,
    firstName: "Leonardo",
    lastName: "Moreno",
    age:20
};

console.log(user.firstName);

user.firstName = "Andres";

console.log(user.firstName);

user['firstName'] = "Leonardo";

console.log(user.firstName);

console.log(user);
