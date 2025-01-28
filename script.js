// Character Data
const characters = [
    { 
        img: "images/character1.png", 
        descriptionImg: "images/description1.png", 
        splashArt: "images/splashArts/1.png" 
    },
    { 
        img: "images/character3.png", 
        descriptionImg: "images/description3.png", 
        splashArt: "images/splashArts/3.png" 
    },
    { 
        img: "images/character4.png", 
        descriptionImg: "images/description4.png", 
        splashArt: "images/splashArts/4.png" 
    },
    { 
        img: "images/character5.png", 
        descriptionImg: "images/description5.png", 
        splashArt: "images/splashArts/5.png" 
    },
    { 
        img: "images/character6.png", 
        descriptionImg: "images/description6.png", 
        splashArt: "images/splashArts/6.png" 
    },
    { 
        img: "images/character7.png", 
        descriptionImg: "images/description7.png", 
        splashArt: "images/splashArts/7.png" 
    },
        { 
        img: "images/character8.png", 
        descriptionImg: "images/description8.png", 
        splashArt: "images/splashArts/8.png" 
    },
    { 
        img: "images/character9.png", 
        descriptionImg: "images/description9.png", 
        splashArt: "images/splashArts/9.png" 
    },
    { 
        img: "images/character10.png", 
        descriptionImg: "images/description10.png", 
        splashArt: "images/splashArts/10.png" 
    },
    { 
        img: "images/character11.png", 
        descriptionImg: "images/description11.png", 
        splashArt: "images/splashArts/11.png" 
    },
    { 
        img: "images/character_placeholder.png", 
        descriptionImg: "images/description_placeholder.png", 
        splashArt: "images/splashArts/placeholder_splash.png" 
    }
];

let currentIndex = 0; 

// DOM Elements
const characterImg = document.getElementById("characterImg");
const characterDescriptionImg = document.getElementById("characterDescriptionImg");
const characterOverlay = document.getElementById("characterOverlay");
const viewSplashArtBtn = document.getElementById('viewSplashArtBtn');
const splashArtOverlay = document.getElementById('splashArtOverlay');
const closeSplashArtBtn = document.getElementById('closeSplashArtBtn');
const splashArtImg = document.getElementById('splashArtImg');

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

// Show Splash Art Overlay
viewSplashArtBtn.addEventListener('click', () => {
    // Use the splash art of the currently visible character
    splashArtImg.src = characters[currentIndex].splashArt;
    splashArtOverlay.style.display = 'flex';
});

// Close Splash Art Overlay
closeSplashArtBtn.addEventListener('click', () => {
    splashArtOverlay.style.display = 'none';
});

// Initialize with the first character
updateCharacter(currentIndex);

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});
