const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const API_URL = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    message.innerHTML = "Submitting registration...";
    setTimeout(() => {

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Registration Failed");
            }

            return response.json();
        })
        .then(data => {

            message.innerHTML = `
                Registration Successful!<br>
                Registration ID: ${data.id}
            `;
        })
        .catch(error => {

            message.innerHTML = ` Error: ${error.message}            `;
        });

    }, 2000); 

});