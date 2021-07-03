// const person = {
//     name: 'thiago',
//     age: 31,
//     location: {
//         city: 'Rio de Janeiro',
//         temp: 19
//     }
// };

// const { name: firstName = 'Desconhecido', age } = person;
// console.log(`${firstName} tem ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature)
//     console.log(`está ${temperature} graus em ${city}`);

// const book = {
//     title: 'a Roda do tempo',
//     author: 'alguem',
//     publisher: {
//         name: 'arqueiro'
//     }
// }

// const {name: publisherName = 'publicacao propria'} = book.publisher;
// console.log(publisherName)

///array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// //const [street, city, state, zip] = address;
// const [, city, state = 'minnesota'] = address;
// console.log(`Você esta em ${city} ${state}`);


const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,price] = item;

console.log(`Um ${itemName} custa ${price}`);

