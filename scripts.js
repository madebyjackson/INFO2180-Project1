document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "" || !emailInput.checkValidity()) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you! Your email address " +
            email +
            " has been added to our mailing list!";
    });
});