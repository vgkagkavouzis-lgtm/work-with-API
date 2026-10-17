// ==========================
//             1
// ==========================

// output should be:
// [
//     {
//         city: "Athens",
//         temperature: 28,
//         country: "Greece"
//     },

const weatherData = [
    {
        cityName: "Athens",
        temperature: 28,
        humidity: 45,
        windSpeed: 14,
        country: "Greece"
    },
    {
        cityName: "Berlin",
        temperature: 18,
        humidity: 61,
        windSpeed: 9,
        country: "Germany"
    },
    {
        cityName: "Madrid",
        temperature: 31,
        humidity: 32,
        windSpeed: 11,
        country: "Spain"
    }
];



function extractWeather(data) {
    const result = data.map(item => {
        return {
            city: item.cityName,
            temperature: item.temperature,
            country: item.country
        };
    });

    return result;
}
//or
function extractWeather(data) {
    return data.map(item => ({
        city: item.cityName,
        temperature: item.temperature,
        country: item.country
    }));
}


// ==========================
//             2
// ==========================

// output should be:
// [
//     {
//         id: 101,
//         name: "Mechanical Keyboard",
//         price: 89.99,
//         stock: 14
//     },
//     {
//         id: 102,
//         name: "Wireless Mouse",
//         price: 49.50,
//         stock: 0
//     },
//     {
//         id: 103,
//         name: "27-inch Monitor",
//         price: 279.99,
//         stock: 8
//     }
// ]

const productsData = [
    {
        product_id: 101,
        product_name: "Mechanical Keyboard",
        price_eur: 89.99,
        stock_quantity: 14,
        manufacturer: "KeyForge"
    },
    {
        product_id: 102,
        product_name: "Wireless Mouse",
        price_eur: 49.50,
        stock_quantity: 0,
        manufacturer: "NovaGear"
    },
    {
        product_id: 103,
        product_name: "27-inch Monitor",
        price_eur: 279.99,
        stock_quantity: 8,
        manufacturer: "PixelCore"
    }
];

function mapProcucts (prod) {
    const result = prod.map((item) => {
        //because its => {} i have to write 'return' inside
        return {
            id: item.product_id, 
            name: item.product_name,
            price: item.price_eur, 
            stock: item.stock_quantity 
        }
         return result;
    })
}

function extractProducts(data) {
            //because its => ({}) i don't have to write 'return' inside
    return data.map(item => ({
        id: item.product_id,
        name: item.product_name,
        price: item.price_eur,
        stock: item.stock_quantity
    }));
}

// ==========================
//             3
// ==========================
goal:
// [
//     {
//         movie: "Interstellar",
//         year: 2014,
//         rating: 8.7,
//         director: "Christopher Nolan"
//     },
//     {
//         movie: "Arrival",
//         year: 2016,
//         rating: 7.9,
//         director: "Denis Villeneuve"
//     }
// ]
const moviesData = [
    {
        id: 501,
        title: "Interstellar",
        releaseYear: 2014,
        rating: {
            score: 8.7,
            votes: 2100000
        },
        director: {
            firstName: "Christopher",
            lastName: "Nolan"
        }
    },
    {
        id: 502,
        title: "Arrival",
        releaseYear: 2016,
        rating: {
            score: 7.9,
            votes: 780000
        },
        director: {
            firstName: "Denis",
            lastName: "Villeneuve"
        }
    }
];

function extractMovies(data) {
    return data.map(item => ({
        movie: item.title,
        year: item.releaseYear,
        rating: item.rating.score,
        director: `${item.director.firstName} ${item.director.lastName}`
    }));
}

// ==========================
//             4
// ==========================
goal:
// [
//     {
//         id: 701,
//         name: "Maria Papadopoulou",
//         email: "maria@example.com",
//         status: "Active",
//         purchaseCount: 3
//     },
//     {
//         id: 702,
//         name: "John Smith",
//         email: "john@example.com",
//         status: "Inactive",
//         purchaseCount: 2
//     },
//     {
//         id: 703,
//         name: "Elena Rossi",
//         email: "elena@example.com",
//         status: "Active",
//         purchaseCount: 4
//     }
// ]

const usersData = [
    {
        userId: 701,
        personal: {
            firstName: "Maria",
            lastName: "Papadopoulou"
        },
        account: {
            email: "maria@example.com",
            active: true
        },
        purchases: [120, 45, 80]
    },
    {
        userId: 702,
        personal: {
            firstName: "John",
            lastName: "Smith"
        },
        account: {
            email: "john@example.com",
            active: false
        },
        purchases: [30, 25]
    },
    {
        userId: 703,
        personal: {
            firstName: "Elena",
            lastName: "Rossi"
        },
        account: {
            email: "elena@example.com",
            active: true
        },
        purchases: [200, 150, 75, 100]
    }
];

function extractUsers(data) {
    return data.map(item => ({
        id: item.userId,

        name:
            `${item.personal.firstName} ${item.personal.lastName}`,

        email:
            item.account.email,

        status:
            item.account.active ? "Active" : "Inactive",

        purchaseCount:
            item.purchases.length
    }));
}



// ==========================
//             5
// ==========================
// goal:
// [
//     {
//         flight: "AE101",
//         airline: "Aegean Express",
//         route: "Athens (ATH) → London (LHR)",
//         durationHours: 4,
//         status: "On time",
//         passengers: ["Alex", "Maria"]
//     },
//     {
//         flight: "SK220",
//         airline: "SkyJet",
//         route: "Paris (CDG) → Rome (FCO)",
//         durationHours: 2.08,
//         status: "Delayed",
//         passengers: ["John", "Anna", "Leo"]
//     }
// ]

const flightsData = [
    {
        flightNumber: "AE101",
        airline: {
            name: "Aegean Express",
            code: "AE"
        },
        route: {
            departure: {
                city: "Athens",
                airport: "ATH"
            },
            arrival: {
                city: "London",
                airport: "LHR"
            }
        },
        durationMinutes: 240,
        passengers: [
            {
                name: "Alex",
                seat: "12A"
            },
            {
                name: "Maria",
                seat: "12B"
            }
        ],
        delayed: false
    },
    {
        flightNumber: "SK220",
        airline: {
            name: "SkyJet",
            code: "SK"
        },
        route: {
            departure: {
                city: "Paris",
                airport: "CDG"
            },
            arrival: {
                city: "Rome",
                airport: "FCO"
            }
        },
        durationMinutes: 125,
        passengers: [
            {
                name: "John",
                seat: "8C"
            },
            {
                name: "Anna",
                seat: "8D"
            },
            {
                name: "Leo",
                seat: "9A"
            }
        ],
        delayed: true
    }
];

function extractFlights(data) {
    return data.map(item => {
        return {
            flight: item.flightNumber,
            airline: item.airline.name,

            route:
                `${item.route.departure.city} (${item.route.departure.airport}) → ${item.route.arrival.city} (${item.route.arrival.airport})`,

            durationHours:
                Number((item.durationMinutes / 60).toFixed(2)),

            status:
                item.delayed ? "Delayed" : "On time",

            passengers:
                item.passengers.map(passenger => passenger.name)
        };
    });
}







// So the rule is:
// item => {
//     return something;
// }

// and the shorter version:
// item => something

// For an object specifically:
// item => ({
//     property: item.value
// })