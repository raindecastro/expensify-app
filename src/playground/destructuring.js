//Object Destructuring
// console.log('destructuring');

// const person = {
//     name: 'Rain',
//     age: 22,
//     location: {
//         city: 'Sta. Rosa',
//         temp: 98
//     }
// };

// const {  name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Pengiun'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
//Array destructuring
//

// const address = ['119 Provence', , 'Laguna', '4026'];

// const [street, city, state = 'New York', zip] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [drink, , mPrice] = item;

console.log(`A medium ${drink} costs ${mPrice}`);