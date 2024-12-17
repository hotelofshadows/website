// Character Data
const characters = [
    { img: "images/character1.png", descriptionImg: "images/description1.png" },
    { img: "images/character2.png", descriptionImg: "images/description2.png" },
    { img: "images/character3.png", descriptionImg: "images/description3.png" }
];

let currentIndex = 0; // Keeps track of the current character

// DOM Elements
const characterImg = document.getElementById("characterImg");
const characterDescriptionImg = document.getElementById("characterDescriptionImg");
const characterOverlay = document.getElementById("characterOverlay");

// Function to Update Character with Fade Effect
function updateCharacter(index) {
    // Fade Out Effect for Character Image and Description Overlay
    characterImg.style.opacity = 0;
    characterOverlay.style.opacity = 0;

    setTimeout(() => {
        // Update the character image
        characterImg.src = characters[index].img;

        // Update the description image
        characterDescriptionImg.src = characters[index].descriptionImg;

        // Fade In Effect
        characterImg.style.opacity = 1;
        characterOverlay.style.opacity = 1;
    }, 500); // Match this duration to the CSS transition time
}

// Previous Character Button Logic
document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length; // Wraps around to the last character
    updateCharacter(currentIndex);
});

// Next Character Button Logic
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length; // Wraps around to the first character
    updateCharacter(currentIndex);
});

// Initialize with the first character
updateCharacter(currentIndex);
