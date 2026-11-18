
// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("full-name").value.trim();

        const email = document.getElementById("email").value.trim();

        const property = document.getElementById("interest").value;

        if (!name || !email || !property) {
            formMessage.textContent = "Please complete all required fields.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name + "! Your request has been prepared.";

        contactForm.reset();

    });

}

/* PROPERTY FILTERS */

const searchPropertiesButton = document.getElementById("search-properties");

if (searchPropertiesButton) {
    searchPropertiesButton.addEventListener("click", function () {

        const selectedLocation = document.getElementById("location-filter").value;
        const selectedType = document.getElementById("type-filter").value;
        const selectedPrice = document.getElementById("price-filter").value;

        const propertyCards = document.querySelectorAll(".property-card");

        propertyCards.forEach(function (card) {

            const location = card.dataset.location;
            const type = card.dataset.type;
            const price = Number(card.dataset.price);

            const matchesLocation =
                selectedLocation === "" || location === selectedLocation;

            const matchesType =
                selectedType === "" || type === selectedType;

            const matchesPrice =
                selectedPrice === "" || price <= Number(selectedPrice);

            if (matchesLocation && matchesType && matchesPrice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

/* RESET PROPERTY FILTERS */

const resetFiltersButton = document.getElementById("reset-filters");

if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", function () {

        document.getElementById("location-filter").value = "";
        document.getElementById("type-filter").value = "";
        document.getElementById("price-filter").value = "";

        const propertyCards = document.querySelectorAll(".property-card");

        propertyCards.forEach(function (card) {
            card.style.display = "block";
        });

    });
}
