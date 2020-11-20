// Passthrough data.
let pdata = [];

// Start the game...
function startGame() {
    let playerCount = document.getElementById("playercount").value;

    if (playerCount > 8) { 
        playerCount = 8; 
    } else if (playerCount < 2) { 
        playerCount = 2; 
    }

    pdata = [];
    for (let i = 1; i <= playerCount; i++) {
        pdata.push(document.getElementById(`player${i}`).value);
    }
    
    sessionStorage.setItem('playercount', playerCount);
    sessionStorage.removeItem('pdata');
    sessionStorage.setItem('pdata', pdata);
    
    window.location.href='game.html';
}

// Update the list of player options.
function updateListings() {
    let playerCount = document.getElementById("playercount").value;
    let playerSetup = document.getElementById("playersetup");

    // Clear it.
    playerSetup.innerHTML = "";

    // Add components
    for (let i = 1; i <= playerCount; i++) {
        playerSetup.innerHTML += `
        <p>Player ${i}'s Piece: <select name="picker" id="player${i}">
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="white">White</option>
            <option value="black">Black</option>
        </select></p>
        `;
    }
}

updateListings();