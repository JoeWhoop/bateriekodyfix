document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "https://web.miniextensions.com/jnXiLi9iClv53yJm94W8?prefill_Mechanic=" + selectedMechanic;

    var redirectionURLs = {
        "Mechanic": baseRedirectURL,
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Wybierz prawidlowe opcje.");
    }
});
