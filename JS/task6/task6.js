let result = "";
const events = [
    {
        name: "Music Festival",
        category: "Music"
    },
    {
        name: "Food Fair",
        category: "Food"
    },
    {
        name: "Dance Competition",
        category: "Music"
    }
];
events.push(
    {
        name: "Workshop on Baking",
        category: "Workshop"
    }
);

events.push(
    {
        name: "Rock Concert",
        category: "Music"
    }
);

result += "<h3>All Events</h3>";

events.forEach(event => {
    result += `${event.name} (${event.category})<br>`;
});
const musicEvents = events.filter(
    event => event.category === "Music"
);

result += "<br><h3>Music Events</h3>";

musicEvents.forEach(event => {
    result += `${event.name}<br>`;
});
const eventCards = events.map(
    event => `Event Card: ${event.name}`
);

result += "<br><h3>Formatted Event Cards</h3>";

eventCards.forEach(card => {
    result += `${card}<br>`;
});

document.getElementById("output").innerHTML = result;