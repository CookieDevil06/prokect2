//So they are global they are outside

let won = 0;
let lost = 0;
let tied = 0;

function rps(userChoice) {


    let cpu = randomNumber();

    let gameResult = getGameResult(userChoice, cpu);

    if (gameResult == 'won') {
            won++;
            // alert('You won! You chose ' + userChoice + ', which wins to ' + cpu + '.');
            document.querySelector("h3").innerHTML = 'You won! You chose ' + userChoice + ', which wins to ' + cpu + '.';
    } else if (gameResult == 'lost') {
        lost++;
        // alert('You lost! You chose ' + userChoice + ', which loses to ' + cpu + '.');
        document.querySelector("h3").innerHTML = 'You lost! You chose ' + userChoice + ', which loses to ' + cpu + '.';
    } else {
         tied++;
        //  alert('You tied.');
         document.querySelector("h3").innerHTML = 'You tied.';
    }

    document.querySelector("h3").innerHTML += '<br/>You won ' + won + ' times, you lost ' + lost + ' times, and you tied ' + tied + ' times.'
}

function randomNumber() {
    let cpuChoice = '';
    let cpu = Math.floor(Math.random() * 3);

    if (cpu == 0) {
        cpuChoice = 'r';
    } else if (cpu == 1) {
        cpuChoice == 'p';
    } else if (cpu == 2) {
        cpuChoice = 's';
    }

    return cpuChoice;
}

function getGameResult(userChoice, cpu) {
    let response = 'tied';

    if (userChoice === cpu) {
        response = 'tied';
    } else if (userChoice == 'r' && cpu == 'p') {
        response = 'lost'
    } else if (userChoice == 'r' && cpu == 's') {
        response = 'won'
    } else if (userChoice == 'p' && cpu == 'r') {
        response = 'won'
    } else if (userChoice == 'p' && cpu == 's') {
        response = 'lost'
    } else if (userChoice == 's' && cpu == 'r') {
        response = 'lost'
    } else if (userChoice == 's' && cpu == 'p') {
        response = 'won'
    } 

    return response;
}

