const prompt = require('prompt-sync')();
let input = prompt('Enter something (press Ctrl+C to exit): ');
let money = 0;
let tool = "teeth";

while (true) {

    // Check if the user is using teeth
    if (tool.toLowerCase() === 'teeth') {
        input = prompt('landscaper: user can use teeth to cut grass [yes/no]: ');
        if (input.toLowerCase() === 'yes') {
            money = money + 1;
            console.log(`You earned $1. Total money: $${money}.`);
        } 
        else if (input.toLowerCase() === 'no') {
            console.log('You decided not to cut grass.');
        }
    }
    
    // Check if the user has enough money to buy scissors
    if (tool.toLowerCase() === 'teeth' && money >= 5) {
        input = prompt('landscaper: user can buy scissors for $5. [yes/no]: ');
        if (input.toLowerCase() === 'yes') {
            tool = 'rusty scissors';
            money = money - 5;
            console.log('You bought rusty scissors.');
        } 
        else if (input.toLowerCase() === 'no') {
            console.log('You chose not to buy scissors.');
        }
    }
    
    // Check if the user is using rusty scissors
    if (tool.toLowerCase() === 'rusty scissors') {
        input = prompt('landscaper: user can use rusty scissors to cut grass [yes/no]: ');
        if (input.toLowerCase() === 'yes') {
            money = money + 5;
            console.log(`You earned $5. Total money: $${money}.`);
        } 
        else if (input.toLowerCase() === 'no') {
            console.log('You decided not to cut grass with scissors.');
        }
    }

    //Check if the user has enough money to buy old-Timey Push Lawnmower
    if(tool.toLowerCase() === 'rusty scissors' && money >= 25){
        intput = prompt('landscaper: user can buy push lawnmower [yes/no]:');
        if (input.toLowerCase === 'yes') {
            tool = 'push lawnmower'
            money = money - 25;
            console.log('you bougt push lawnmower.');
        }
        else if (input.toLowerCase() === 'no') {
            console.log('You chose not to buy push lawnmower');           
        }
    }

    //Check if user is using push lawnmower
    if (tool.toLowerCase() === 'push lawnmower') {
        input = prompt('landscaper: user can use push lawnmower to cut grass [yes/no]: ');
        if (input.toLowerCase() === 'yes') {
            money += 50;
            console.log(`You earned $50. Total money: $${money}.`);                      
        }
        else if (input.toLowerCase() === 'no') {
            console.log('You decided not to cut grass with push lawnmower.');
        }
    }

    // Add an option to exit the game
    input = prompt('Do you want to continue playing? [yes/no]: ');
    if (input.toLowerCase() === 'no') {
        console.log('Thanks for playing!');
        break;
    }
}
