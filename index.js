let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
    if (team === "home") {
        homeScore += points;
        document.getElementById("home-score").textContent = homeScore;
    } else {
        guestScore += points;
        document.getElementById("guest-score").textContent = guestScore;
    }

    updateLeaderColor();
}

function updateLeaderColor() {
    const homeBox = document.getElementById("home-score-box");
    const guestBox = document.getElementById("guest-score-box");
    const homeTitle = document.getElementById("home-title");
    const guestTitle = document.getElementById("guest-title");

    homeBox.classList.remove("leading");
    guestBox.classList.remove("leading");
    homeTitle.classList.remove("leading-title");
    guestTitle.classList.remove("leading-title");

    if (homeScore > guestScore) {
        homeBox.classList.add("leading");
        homeTitle.classList.add("leading-title");
    } else if (guestScore > homeScore) {
        guestBox.classList.add("leading");
        guestTitle.classList.add("leading-title");
    }
}

updateLeaderColor();