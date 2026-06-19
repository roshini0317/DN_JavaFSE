const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Step 1: Form Submitted");

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    console.log("Step 2: User Data Collected");
    console.log(userData);

    debugger;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {

        console.log("Step 3: Response Received");
        console.log(response);

        return response.json();
    })
    .then(data => {

        console.log("Step 4: Response Data");
        console.log(data);

        message.innerHTML =
            `Registration Successful! ID: ${data.id}`;
    })
    .catch(error => {

        console.error("Step 5: Error Occurred");
        console.error(error);

        message.innerHTML =
            "Registration Failed";
    });
});