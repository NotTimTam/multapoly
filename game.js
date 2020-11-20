// ₩
// Initial variables.
let currentTurn = 0;

// Adjust player count.
let playercount = sessionStorage.getItem('playercount');
if (playercount == null) {
    playercount = 2;
}

// Grab player data.
let pdata = sessionStorage.getItem('pdata').split(",");
console.log(sessionStorage.getItem('pdata'))

// Pick random player to go first.
let whoseTurn = Math.ceil(Math.random() * playercount);

// Create player data string.
let playerdata = {};

// Actually run the game setup.
setupGame();

// Take first turn.
takeTurn(whoseTurn);


// GAME FUNCTIONS BELOW;
// Setup game.
function setupGame() {
    // For each player, give them money and basic variables.
    for (let i = 1; i <= playercount; i++) {
        let playerName = i.toString();
        playerdata[playerName] = {
            money: {
                "500": 2,
                "100": 2,
                "50": 2,
                "20": 6,
                "10": 5,
                "5": 5,
                "1": 5
            },
            properties: {},
            pos: 0,
            token: pdata[i-1]
        }
    }

    // Create tokens.
    for (let i = 1; i <= playercount; i++) {
        let board = document.getElementById("board");
        board.innerHTML += `<div alt="P${i}" class="token ${playerdata[i].token}" id="player${i}token">P${i}</div>`;
    }
}

// Bill html generation.
function gimmeMoney(denom=1, activeBill) {
    let style = (activeBill * (window.innerWidth - 350));
    let styleY = Math.ceil(Math.random() * -20);
    if (denom == 1) {
        return `<img src="images/bills/1.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  5) {
        return `<img src="images/bills/5.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  10) {
        return `<img src="images/bills/10.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  20) {
        return `<img src="images/bills/20.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  50) {
        return `<img src="images/bills/50.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  100) {
        return `<img src="images/bills/100.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else if (denom ==  500) {
        return `<img src="images/bills/500.svg" alt="" class="bill" style="left: ${style}px; top: ${styleY}px" tabindex="0">`;
    } else {
        return "ER:WRONGDENOM";
    }
}

// Display bills.
function displayBills(player=1) {
    // Get the display.
    let moneyDisp = document.getElementById("moneydisplay");
    // Clear the display.
    moneyDisp.innerHTML = "";

    // Get the bills.
    let bills = playerdata[player].money;

    // Store what bill we are on for positioning.
    let currentBill = 0;

    // Grab individual bill data.
    let s1 = bills[1];
    let s5 = bills[5];
    let s10 = bills[10];
    let s20 = bills[20];
    let s50 = bills[50];
    let s100 = bills[100];
    let s500 = bills[500];

    let billcount = s1 + s5 + s10 + s20 + s50 + s100 + s500;
    
    // Create the bills and append them to the display.
    // Ones.
    for (i = 0; i < s1; i++) {
        moneyDisp.innerHTML += gimmeMoney(1, currentBill / billcount);
        currentBill ++;
    }

    // Fives.
    for (i = 0; i < s5; i++) {
        moneyDisp.innerHTML += gimmeMoney(5, currentBill / billcount);
        currentBill ++;
    }

    // Tens.
    for (i = 0; i < s10; i++) {
        moneyDisp.innerHTML += gimmeMoney(10, currentBill / billcount);
        currentBill ++;
    }

    // Twenties.
    for (i = 0; i < s20; i++) {
        moneyDisp.innerHTML += gimmeMoney(20, currentBill / billcount);
        currentBill ++;
    }

    // Fifties.
    for (i = 0; i < s50; i++) {
        moneyDisp.innerHTML += gimmeMoney(50, currentBill / billcount);
        currentBill ++;
    }

    // One-hundreds.
    for (i = 0; i < s100; i++) {
        moneyDisp.innerHTML += gimmeMoney(100, currentBill / billcount);
        currentBill ++;
    }

    // Five-hundreds.
    for (i = 0; i < s500; i++) {
        moneyDisp.innerHTML += gimmeMoney(500, currentBill / billcount);
        currentBill ++;
    }
}

// Roll dice.
function rollDice() {
    // Generate a random number from 1 to 6.
    let roll = Math.ceil(Math.random() * 6);
    return roll;
}

// Calculate player position.
function calcPos(player=1) {
    // Grab the token and data.
    let position = playerdata[player].pos;
    let token = document.getElementById(`player${player}token`);

    // Check the data.
    playerPosCheck(player);

    // Set position.
    // SIMPLIFY:
    switch (position) {
        case 0: 
            token.style = "top: 93%; left: 93%;";
            break;
        case 1:
            token.style = "top: 93%; left: 81.4%;";
            break;
        case 2: 
            token.style = "top: 93%; left: 73%;";
            break;
        case 3: 
            token.style = "top: 93%; left: 64.7%;";
            break; 
        case 4: 
            token.style = "top: 93%; left: 56.4%;";
            break; 
        case 5:
            token.style = "top: 93%; left: 48%;";
            break; 
        case 6: 
            token.style = "top: 93%; left: 39.9%;";
            break; 
        case 7:
            token.style = "top: 93%; left: 30.9%;";
            break; 
        case 8: 
            token.style = "top: 93%; left: 23%;";
            break; 
        case 9: 
            token.style = "top: 93%; left: 14.5%;";
            break; 
        case 10:
            token.style = "top: 100%; left: 0%;";
            break; 
        case 11:
            token.style = "top: 81%; left: 3%;";
            break; 
        case 12:
            token.style = "top: 73%; left: 3%;";
            break; 
        case 13:
            token.style = "top: 64.7%; left: 3%;";
            break; 
        case 14: 
            token.style = "top: 56.4%; left: 3%;";
            break; 
        case 15: 
            token.style = "top: 48%; left: 3%;";
            break; 
        case 16: 
            token.style = "top: 39.9%; left: 3%;";
            break; 
        case 17: 
            token.style = "top: 30.9%; left: 3%;";
            break; 
        case 18:
            token.style = "top: 23%; left: 3%;";
            break; 
        case 19: 
            token.style = "top: 14.5%; left: 3%;";
            break;
        case 20: 
            token.style = "top: 4%; left: 4%;";
            break; 
        case 21: 
            token.style = "top: 3%; left: 14.5%;";
            break; 
        case 22: 
            token.style = "top: 3%; left: 23%;";
            break; 
        case 23:
            token.style = "top: 3%; left: 30.9%;";
            break; 
        case 24: 
            token.style = "top: 3%; left: 39.9%;";
            break; 
        case 25:
            token.style = "top: 3%; left: 48%;";
            break; 
        case 26: 
            token.style = "top: 3%; left: 56.4%;";
            break; 
        case 27: 
            token.style = "top: 3%; left: 64.7%;";
            break; 
        case 28: 
            token.style = "top: 3%; left: 73%;";
            break;
        case 29:
            token.style = "top: 3%; left: 81.4%;";
            break;
        case 30: 
            token.style = "top: 4%; left: 91.5%;";
            break; 
        case 31: 
            token.style = "top: 14.5%; left: 93%;";
            break; 
        case 32:
            token.style = "top: 23%; left: 93%;";
            break; 
        case 33: 
            token.style = "top: 30.9%; left: 93%;";
            break; 
        case 34: 
            token.style = "top: 39.9%; left: 93%;";
            break; 
        case 35: 
            token.style = "top: 48%; left: 93%;";
            break; 
        case 36: 
            token.style = "top: 56.4%; left: 93%;";
            break;
        case 37:
            token.style = "top: 64.7%; left: 93%;";
            break;
        case 37:
            token.style = "top: 64.7%; left: 93%;";
            break;
        case 38:
            token.style = "top: 73%; left: 93%;";
            break;    
        case 39:
            token.style = "top: 81%; left: 93%;";
            break;  
        case "jail":
            token.style = "top: 90%; left: 6.2%;";
            break;
    }

    playerPosCheck(player);
}

// Reset players position.
function playerPosCheck(who=1) {
    // Check if the player is not in jail and is higher than 39, if so go back to 0.
    if(playerdata[who].pos == 40) {
        console.log(`PLAYER ${who} NOW: ${playerdata[who].pos}`);
        playerdata[who].pos = 0;
        console.log(`PLAYER ${who} NOW: ${playerdata[who].pos}`);
    }
}

playerdata[1].pos = 0;
playerdata[2].pos = 1;
playerdata[3].pos = 2;
playerdata[4].pos = 3;
playerdata[5].pos = 4;
playerdata[6].pos = 5;
playerdata[7].pos = 6;
playerdata[8].pos = 7;

function breakPlayer() {
    calcPos(1);
    playerdata[1].pos ++;
    
    calcPos(2);
    playerdata[2].pos ++;
    
    calcPos(3);
    playerdata[3].pos ++;
    
    calcPos(4);
    playerdata[4].pos ++;

    calcPos(5);
    playerdata[5].pos ++;

    calcPos(6);
    playerdata[6].pos ++;

    calcPos(7);
    playerdata[7].pos ++;

    calcPos(8);
    playerdata[8].pos ++;
}

window.setInterval(breakPlayer, 300)

async function takeTurn(who=1) {
    // Move the player on the board.
    calcPos(who);

    // Display the player's money.
    displayBills(who);

    // Change player heading.
    document.getElementById('playerturn').innerText = "Player " + who + "'s Turn"

    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(displayBills(who)), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)
}