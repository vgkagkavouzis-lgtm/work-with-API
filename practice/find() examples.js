// ===============
//        1
// ===============
const products = [
    { id: 101, name: "Keyboard", price: 80 },
    { id: 102, name: "Mouse", price: 40 },
    { id: 103, name: "Monitor", price: 250 }
];

// Your task: use find() to return:
// { id: 102, name: "Mouse", price: 40 }

const product = products.find( pr => pr.id === 102);
//or
function findProduct(data, id) {
    return data.find(item => item.id === id);
}


// ===============
//        2
// ===============

const users = [
    {
        id: 1,
        name: "Alex",
        email: "alex@example.com"
    },
    {
        id: 2,
        name: "Maria",
        email: "maria@example.com"
    },
    {
        id: 3,
        name: "John",
        email: "john@example.com"
    }
];

// User input:
const userInput = "MARIA@EXAMPLE.COM";

// Your task: find Maria's object even though the capitalization is different.
// Expected result:
// {
//     id: 2,
//     name: "Maria",
//     email: "maria@example.com"
// }



function findUser(data, input) {
    const search = input.toLowerCase();

    return data.find(user =>
        user.email.toLowerCase() === search
    );
}

// ===============
//        3
// ===============
const movies = [
    {
        title: "Interstellar",
director: {
            firstName: "Christopher",
            lastName: "Nolan"
        }
    },
    {
        title: "Arrival",
        director: {
            firstName: "Denis",
            lastName: "Villeneuve"
        }
    },
    {
        title: "Dune",
        director: {
            firstName: "Denis",
            lastName: "Villeneuve"
        }
    }
];

// User input:
const directorName = "Christopher";

// Your task: find the first movie whose director's first name matches the input.
// Expected result:
// {
//     title: "Interstellar",
//     director: {
//         firstName: "Christopher",
//         lastName: "Nolan"
//     }
// }

function findMovie(data, name) {
    return data.find(movie =>
        movie.director.firstName === name
    );
}

// ===============
//        4
// ===============

const orders = [
    {
        orderId: 5001,
        customer: "Anna",
        products: ["Keyboard", "Mouse"]
    },
    {
        orderId: 5002,
        customer: "Nick",
        products: ["Monitor", "Webcam"]
    },
    {
        orderId: 5003,
        customer: "Maria",
        products: ["Laptop", "Headphones"]
    }
];
// User input:
const searchProduct = "Webcam";

// Your task: find the order that contains "Webcam".
// Expected result:
// {
//     orderId: 5002,
//     customer: "Nick",
//     products: ["Monitor", "Webcam"]
// }

function findOrder(data, productName) {
    return data.find(order =>
        order.products.some(product =>
            product === productName
        )
    );
}

// ===============
//        5
// ===============

const flights = [
    {
        flightNumber: "AE101",
        airline: "Aegean",
        route: {
            departure: "Athens",
            arrival: "London"
        },
        passengers: [
            { name: "Alex", seat: "12A" },
            { name: "Maria", seat: "12B" }
        ]
    },
    {
        flightNumber: "SK220",
        airline: "SkyJet",
        route: {
            departure: "Paris",
            arrival: "Rome"
        },
        passengers: [
            { name: "John", seat: "8C" },
            { name: "Anna", seat: "8D" }
        ]
    }
];

// User input may be any of these:
// "AE101"
// "Aegean"
// "London"
// "Maria"

// Your task: use one find() to search each flight and return the correct flight if the input matches:
// - flight number
// - airline
// - departure city
// - arrival city
// - passenger name
// Make the search case-insensitive.