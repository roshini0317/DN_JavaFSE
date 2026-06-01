let result = "";
class Event {
    constructor(name, category, date, seats) {
        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0
        ? "Seats Available"
        : "No Seats Available";
};

const event1 = new Event(
    "Community Clean-Up Drive",
    "Social",
    "2026-06-15",
    5
);

const event2 = new Event(
    "Food Fair",
    "Food",
    "2026-07-20",
    0
);
result += "<h3>Event Details</h3>";

result += `
<b>${event1.name}</b><br>
Availability: ${event1.checkAvailability()}<br><br>
`;

result += `
<b>${event2.name}</b><br>
Availability: ${event2.checkAvailability()}<br><br>
`;
result += "<h3>Object Keys and Values (Event 1)</h3>";

Object.entries(event1).forEach(([key, value]) => {
    result += `${key}: ${value}<br>`;
});

document.getElementById("output").innerHTML = result;