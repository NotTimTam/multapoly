// ₩
// Initial variables.
let currentTurn = 0;

let playercount = sessionStorage.getItem('playercount');
if (playercount == null) {
    playercount = 2;
}

let pdata = sessionStorage.getItem('pdata').split(",");

let whoseTurn = Math.ceil(Math.random() * playercount);

let playerdata = {};

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
        board.innerHTML += `<img src="images/tokens/${playerdata[i].token}.svg" alt="P${i}" class="token" id="player${i}token">`;
    }
}

// Actually run the game setup.
setupGame();

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

displayBills(1);

// Draw players.
function movePlayer(player=1, position=0) {

}

async function takeTurn(who=1) {

    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

takeTurn();