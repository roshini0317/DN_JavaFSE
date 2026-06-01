const output = document.getElementById("output");
const loader = document.getElementById("loader");

const API_URL =    "https://jsonplaceholder.typicode.com/users";
function displayEvents(data) {

    output.innerHTML = "";

    data.slice(0, 5).forEach(event => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Email: ${event.email}</p>
            <p>City: ${event.address.city}</p>
        `;

        output.appendChild(card);
    });
}


fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log("Fetched using .then()");
        displayEvents(data);
    })
    .catch(error => {
        output.innerHTML =
            `<p>Error: ${error.message}</p>`;
    });


async function fetchEvents() {

    try {

        loader.style.display = "block";

        const response = await fetch(API_URL);

        const data = await response.json();

        displayEvents(data);

    } catch (error) {

        output.innerHTML =
            `<p>Error: ${error.message}</p>`;

    } finally {

        loader.style.display = "none";
    }
}

fetchEvents();