const output = document.getElementById("output");

let result = "";

// Event List
const events = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 50
    },
    {
        name: "Workshop on Baking",
        category: "Workshop",
        seats: 25
    },
    {
        name: "Food Fair",
        category: "Food",
        seats: 30
    }
];

// Function with Default Parameters
function addEvent(
    name = "New Event",
    category = "General",
    seats = 10
) {
    return {
        name,
        category,
        seats
    };
}

// Add New Event
const newEvent = addEvent(
    "Dance Competition",
    "Music",
    40
);

events.push(newEvent);

// Destructuring
result += "<h3>Event Details using Destructuring</h3>";

const { name, category, seats } = events[0];

result += `
    Name: ${name}<br>
    Category: ${category}<br>
    Seats: ${seats}<br><br>
`;

// Spread Operator to Clone Array
const clonedEvents = [...events];

// Filter Music Events
const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);

result += "<h3>Music Events</h3>";

musicEvents.forEach(event => {
    result += `
        ${event.name} -
        ${event.category} -
        Seats: ${event.seats}<br>
    `;
});

document.getElementById("output").innerHTML = result;