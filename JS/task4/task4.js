let result = "";
const events = [
    {
        name: "Community Clean-Up Drive",
        category: "Social",
        date: "2026-06-15",
        seats: 5
    },
    {
        name: "Music Festival",
        category: "Entertainment",
        date: "2026-07-10",
        seats: 10
    },
    {
        name: "Food Fair",
        category: "Food",
        date: "2026-07-20",
        seats: 8
    }
];
function addEvent(name, category, date, seats) {
    events.push({
        name,
        category,
        date,
        seats
    });

    result += `Event Added: ${name}<br><br>`;
}
function registerUser(eventName) {
    const event = events.find(event => event.name === eventName);

    if (event && event.seats > 0) {
        event.seats--;
        result += `Registered for ${event.name}. Remaining Seats: ${event.seats}<br><br>`;
    } else {
        result += `Registration failed for ${eventName}<br><br>`;
    }
}
function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}
function createRegistrationTracker(category) {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        result += `Total registrations for ${category}: ${totalRegistrations}<br>`;
    };
}

function searchEvents(callback) {
    const filteredEvents = events.filter(callback);

    result += "<h3>Search Results</h3>";

    filteredEvents.forEach(event => {
        result += `
            ${event.name} -
            ${event.category} -
            Seats: ${event.seats}<br>
        `;
    });

    result += "<br>";
}

addEvent(
    "Tree Plantation Drive",
    "Social",
    "2026-08-05",
    20
);

registerUser("Community Clean-Up Drive");

const socialTracker = createRegistrationTracker("Social");

result += "<h3>Registration Tracker</h3>";

socialTracker();
socialTracker();

result += "<br><h3>Social Events</h3>";

const socialEvents = filterEventsByCategory("Social");

socialEvents.forEach(event => {
    result += `
        ${event.name} -
        ${event.category} -
        Seats: ${event.seats}<br>
    `;
});

result += "<br>";
searchEvents(event => event.seats > 5);

document.getElementById("output").innerHTML = result;