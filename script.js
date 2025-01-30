// Typewriter Effect for the message
const messageText = "Not Giving Up makes you the best version of yourself. I love you to the moon and back! 🌕💖";
let index = 0;

function typeWriter() {
    if (index < messageText.length) {
        document.getElementById("message").innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

// Letter-by-Letter Animation for h1
const h1Text = "YOUR ALWAYS BE MY MOON🌕";
let h1Index = 0;

function animateH1() {
    if (h1Index < h1Text.length) {
        document.querySelector("h1").innerHTML += h1Text.charAt(h1Index);
        h1Index++;
        setTimeout(animateH1, 150); // Adjust typing speed here
    } else {
        // Start the typewriter effect for the message after h1 animation is complete
        setTimeout(typeWriter, 500); // Delay before starting the message animation
    }
}

// Start animations when the page loads
window.onload = () => {
    animateH1();
};

// Select all frames
const frames = document.querySelectorAll('.frame');

frames.forEach(frame => {
    const message = frame.querySelector('.message');
    const img = frame.querySelector('img');

    // Mouse down event
    frame.addEventListener('mousedown', () => {
        message.style.display = 'block'; // Show the message
        img.style.display = 'none'; // Hide the image
        message.style.opacity = 1; // Set opacity to 1 to show the message
        message.style.transform = 'translate(-50%, -50%) translateY(0)'; // Reset transform for animation
        frame.classList.add('flip'); // Add flip class to frame
    });

    // Mouse up event
    frame.addEventListener('mouseup', () => {
        message.style.display = 'none'; // Hide the message
        img.style.display = 'block'; // Show the image again
        frame.classList.remove('flip'); // Remove flip class from frame
    });

    // Optional: Handle mouse leave to ensure message hides if mouse leaves the frame
    frame.addEventListener('mouseleave', () => {
        message.style.display = 'none'; // Hide the message
        img.style.display = 'block'; // Show the image again
        frame.classList.remove('flip'); // Remove flip class from frame
    });
});

// Play Music and Trigger Heart Animation
const playButton = document.getElementById('playButton');
const bgMusic = document.getElementById('bgMusic');
const heart = document.getElementById('heart');

playButton.addEventListener('click', () => {
    // Check if the audio is paused and play it
    if (bgMusic.paused) {
        bgMusic.play();
        playButton.textContent = '🎵 Pause Music'; // Change button text to indicate music is playing
        heart.style.display = 'block'; // Show the heart
        heart.classList.add('animate'); // Trigger the heart explosion animation

        // Remove the animation class after it finishes to reset it
        heart.addEventListener('animationend', () => {
            heart.classList.remove('animate'); // Reset the animation
            heart.style.display = 'none'; // Hide the heart again
        });
    } else {
        bgMusic.pause(); // Pause the music if it's already playing
        playButton.textContent = '🎵 Play Music'; // Change button text back to play
    }
});