
// OPEN THE BIRTHDAY PAGE
function startSurprise() {
    document.getElementById("welcome").style.display = "none";

    document.getElementById("birthday").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// OPEN THE LETTER
function openLetter() {
    document.getElementById("letter").style.display = "block";
}

// SHOW THE GIFT SECTION
function showSurprise() {
    const giftSection = document.getElementById("final");

    giftSection.style.display = "block";

    setTimeout(() => {
        giftSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

// GIFT RUNS AWAY
let giftClicks = 0;


function openGift() {
    const gift = document.getElementById("giftBox");
    const hint = document.getElementById("giftHint");
    const emptyGift = document.getElementById("emptyGift");

    giftClicks++;

    if (giftClicks < 3) {

        // Move gift to a new visible position
        const x = (Math.random() - 0.5) * 220;
        const y = (Math.random() - 0.5) * 140;

        gift.style.transform = `translate(${x}px, ${y}px)`;

        hint.innerHTML = giftClicks === 1
            ? "HAHAHA TRY AGAIN 😭"
            : "ALMOST GOT IT DUFFER 😭";

    } else {

        // Third click: reveal empty gift
        gift.style.display = "none";
        hint.style.display = "none";
        emptyGift.style.display = "block";
    }
}



// FLOATING HEARTS
function createHeart() {
    const hearts = document.getElementById("hearts");

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["💗", "🎀", "💕", "✨", "🌸"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 600);
