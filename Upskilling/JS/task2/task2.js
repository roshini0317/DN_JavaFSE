const eventName = "Community Clean-Up Drive";
const eventDate = "15 June 2026";
let availableSeats = 50;

let result = "";

result += `Event Name: ${eventName}<br>`;
result += `Event Date: ${eventDate}<br>`;
result += `Available Seats: ${availableSeats}<br><br>`;

availableSeats--;
result += `Seats after registration: ${availableSeats}<br>`;
availableSeats++;
result += `Seats after cancellation: ${availableSeats}`;

document.getElementById("output").innerHTML = result;