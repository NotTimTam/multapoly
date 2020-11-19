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
    
    sessionStorage.setItem('playercount', playerCount);
    sessionStorage.removeItem('pdata')
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
        <p>Player ${i}'s Piece: <select name="picker" id="player${i}" onchange="updateAvailables();" value="None Picked">
            <option value="scottie">Scottie</option>
            <option value="tophat">Top Hat</option>
            <option value="thimble">Thimble</option>
            <option value="boot">Boot</option>
            <option value="wheelbarrow">Wheelbarrow</option>
            <option value="cat">Cat</option>
            <option value="racingcar">Racing Car</option>
            <option value="battleship">Battleship</option>
        </select></p>
        `;
    }

    updateAvailables();
}

// Change what picks are available.
function updateAvailables() {
    let players = document.getElementById("playersetup").children;

    let options = ['scottie', 'tophat', 'thimble', 'boot', 'wheelbarrow', 'cat', 'racingcar', 'battleship'];

    for (let activeplayer = 0; activeplayer < players.length; activeplayer++) {
        for (let otherplayer = 0; otherplayer < players.length; otherplayer++) {
            if (activeplayer != otherplayer) {
                let activeModule = players[activeplayer].children[0];
                let otherModule = players[otherplayer].children[0];
                while(activeModule.value == otherModule.value) {
                    otherModule.value = options[Math.floor(Math.random() * options.length)]
                }
            } else {
                continue;
            }
        }
    }

    for (let activeplayer = 0; activeplayer < players.length; activeplayer++) {
        let activeModule = players[activeplayer].children[0];
        pdata.push(activeModule.value.toString());
    }
}

updateAvailables();
updateListings();