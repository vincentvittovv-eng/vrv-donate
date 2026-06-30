function copyText(id) {
    const text = document.getElementById(id).innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const oldText = button.innerText;

        button.innerText = "Copied!";
        button.style.background = "linear-gradient(135deg, #008a2e, #00c853)";

        setTimeout(() => {
            button.innerText = oldText;
            button.style.background = "";
        }, 1500);
    });
}

function filterLoadouts(category) {
    const loadouts = document.querySelectorAll(".loadout");

    loadouts.forEach((loadout) => {
        if (category === "all") {
            loadout.style.display = "block";
            return;
        }

        if (loadout.classList.contains(category)) {
            loadout.style.display = "block";
        } else {
            loadout.style.display = "none";
        }
    });
}