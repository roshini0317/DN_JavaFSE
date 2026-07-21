const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    result.innerHTML = "";

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const selectedEvent = form.elements["event"].value;

    let isValid = true;
    if (name === "") {
        document.getElementById("nameError").textContent =
            " Name is required";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent =
            " Email is required";
        isValid = false;
    }
    if (selectedEvent === "") {
        document.getElementById("eventError").textContent =
            " Please select an event";
        isValid = false;
    }
    if (isValid) {
        result.innerHTML = `
            <p class="success">
                Registration Successful!<br>
                Name: ${name}<br>
                Email: ${email}<br>
                Event: ${selectedEvent}
            </p>
        `;
    }
});