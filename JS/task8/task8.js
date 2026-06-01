const events = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 5
    },
    {
        name: "Workshop on Baking",
        category: "Workshop",
        seats: 3
    },
    {
        name: "Food Fair",
        category: "Food",
        seats: 4
    }
];

const eventContainer = document.getElementById("eventContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");

function displayEvents(eventList) {

    eventContainer.innerHTML = "";

    eventList.forEach(event => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Available Seats: ${event.seats}</p>
        `;
        const registerButton = document.createElement("button");
        registerButton.innerText = "Register";

        registerButton.onclick = function () {
            if (event.seats > 0) {
                event.seats--;
                displayEvents(events);
            } else {
                alert("No seats available!");
            }
        };

        card.appendChild(registerButton);
        eventContainer.appendChild(card);
    });
}
categoryFilter.onchange = function () {

    const selectedCategory = categoryFilter.value;

    if (selectedCategory === "All") {
        displayEvents(events);
    } else {
        const filteredEvents = events.filter(
            event => event.category === selectedCategory
        );

        displayEvents(filteredEvents);
    }
};
searchBox.addEventListener("keydown", function () {

    const searchText = searchBox.value.toLowerCase();

    const searchedEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchText)
    );

    displayEvents(searchedEvents);
});
displayEvents(events);