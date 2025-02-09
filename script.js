let noButtonMoved = false;

document.getElementsByClassName('yesbutton')[0].onclick = handleClick;
document.getElementsByClassName('nobutton')[0].onclick = handleClick;

function handleClick(event) {
    event.preventDefault(); // Prevent the default action (navigation)

    if (event.target.className === 'yesbutton') {
        window.location.href = 'yes.html'; // Redirect to yes.html
    } else if (event.target.className === 'nobutton') {
        moveNoButton(); // Move the noButton to a random position
        noButtonMoved = true; // Set the flag to true
    }

    if (!noButtonMoved) {
        swapButtons(); // Swap the buttons only if noButton is not moved
    }

    showHeart(event.clientX, event.clientY); // Show heart animation at the click position
}

function swapButtons() {
    let yesButton = document.getElementsByClassName('yesbutton')[0];
    let noButton = document.getElementsByClassName('nobutton')[0];

    // Swap the text
    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;

    // Swap the links
    let tempHref = yesButton.href;
    yesButton.href = noButton.href;
    noButton.href = tempHref;
}

function moveNoButton() {
    let noButton = document.getElementsByClassName('nobutton')[0];
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    let x = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - buttonHeight));
    
    // Ensure the button stays within the viewport
    x = Math.max(0, Math.min(x, window.innerWidth - buttonWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - buttonHeight));
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function showHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.position = 'absolute'; // Ensure the heart is positioned absolutely
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}