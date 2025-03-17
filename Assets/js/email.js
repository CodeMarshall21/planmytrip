document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("nT2LwUy7Jqv_h6pz_"); // Replace with your EmailJS User ID

    document.getElementById("booking-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Get form values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const tour = document.getElementById("tour").value;
        const hotel = document.getElementById("hotel").value;

        // Send email
        emailjs.send("service_36lma2s", "template_6ex47x6", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            date: date,
            tour: tour,
            hotel: hotel
        }).then(
            function (response) {
                alert("Booking successful! Confirmation email sent.");
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                alert("Failed to send email. Please try again.");
                console.log("FAILED...", error);
            }
        );
    });
});
