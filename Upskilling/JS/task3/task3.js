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
let result = "<h3>Upcoming Events</h3>";

// Display valid events using forEach()
events.forEach(event => {
    const eventDate = new Date(event.date);

    if (eventDate > today && event.seats > 0) {
        result += `
            Event: ${event.name}<br>
            Date: ${event.date}<br>
            Seats: ${event.seats}<br><br>
        `;
    } else {
        result += `${event.name} is hidden (Past event or No seats available)<br><br>`;
    }
});

// Registration Function with Error Handling
function registerUser(event) {
    try {
        if (event.seats <= 0) {
            throw new Error(`Registration failed for ${event.name}: No seats available.`);
        }

        event.seats--;
        result += `
            Registered successfully for ${event.name}<br>
            Remaining Seats: ${event.seats}<br><br>
        `;

    } catch (error) {
        result += `${error.message}<br><br>`;
    }
}

// Test Registrations
result += "<h3>Registration Status</h3>";

registerUser(events[0]); // Success
registerUser(events[2]); // Error

document.getElementById("output").innerHTML = result;