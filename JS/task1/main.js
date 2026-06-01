
console.log("Welcome to the Community Portal");
window.onload = function () {
    alert("Page has been fully loaded!");
};
// Task 2
const eventName = "Community Clean-Up Drive";
const eventDate = "2026-06-15";
let availableSeats = 5;
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Task 3

const events = [
    {
        name: "Community Clean-Up Drive",
        date: "2026-06-15",
        seats: 5
    },
    {
        name: "Music Festival",
        date: "2025-01-10",
        seats: 20
    },
    {
        name: "Food Fair",
        date: "2026-07-20",
        seats: 0
    }
];
const today = new Date();
console.log("\nUpcoming Events:");
events.forEach(event => {
    const currentEventDate = new Date(event.date);
    if (currentEventDate > today && event.seats > 0) {
        console.log(
            `Event: ${event.name} | Date: ${event.date} | Seats: ${event.seats}`
        );
    } else {
        console.log(`"${event.name}" is hidden (Past event or No seats available)`);
    }
});

function registerForEvent(event) {
    try {
        if (event.seats <= 0) {
            throw new Error("No seats available for registration.");
        }

        event.seats--;
        console.log(
            `Registered successfully for ${event.name}. Remaining Seats: ${event.seats}`
        );

    } catch (error) {
        console.error(error.message);
    }
}

console.log("\nRegistration Status:");
registerForEvent(events[0]);
registerForEvent(events[2]);

//task4

// addEvent() Function
function addEvent(name, category, date, seats) {
    events.push({
        name: name,
        category: category,
        date: date,
        seats: seats
    });

    console.log(`${name} added successfully.`);
}

// registerUser() Function
function registerUser(eventName) {
    try {
        const event = events.find(e => e.name === eventName);

        if (!event) {
            throw new Error("Event not found.");
        }

        if (event.seats <= 0) {
            throw new Error("No seats available.");
        }

        event.seats--;
        console.log(`Registered for ${event.name}. Remaining Seats: ${event.seats}`);

    } catch (error) {
        console.error(error.message);
    }
}

// filterEventsByCategory() Function
function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

// Closure to track total registrations
function createRegistrationTracker(category) {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(
            `Total registrations for ${category}: ${totalRegistrations}`
        );
    };
}

// Higher-Order Function with Callback
function searchEvents(callback) {
    const filteredEvents = events.filter(callback);

    filteredEvents.forEach(event => {
        console.log(
            `${event.name} | ${event.category} | Seats: ${event.seats}`
        );
    });
}