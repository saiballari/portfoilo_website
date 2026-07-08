// Contact Form Backend Integration

document.getElementById("contactForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://127.0.0.1:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        document.getElementById("contactForm").reset();

    } catch (error) {
        alert("Error connecting to backend!");
        console.log(error);
    }

});