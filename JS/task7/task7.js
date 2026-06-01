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

const eventContainer = document.querySelector("#eventContainer");

function displayEvents() {

    eventContainer.innerHTML = "";

    events.forEach((event) => {
        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Available Seats: ${event.seats}</p>
        `;
        const registerBtn = document.createElement("button");
        registerBtn.textContent = "Register";

        registerBtn.addEventListener("click", () => {
            if (event.seats > 0) {
                event.seats--;
                displayEvents(); 
            } else {
                alert("No seats available!");
            }
        });
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";

        cancelBtn.addEventListener("click", () => {
            event.seats++;
            displayEvents(); 
        });

        card.appendChild(registerBtn);
        card.appendChild(cancelBtn);
        eventContainer.appendChild(card);
    });
}

displayEvents();