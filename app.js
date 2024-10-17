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
        // Check if the user has enough money to buy battery-powered lawnmower
        if (tool.toLowerCase() === 'push lawnmower' && money >= 250) {
            input = prompt('landscaper: user can buy a battery-powered lawnmower for $250. [yes/no]: ');
            if (input.toLowerCase() === 'yes') {
                tool = 'battery-powered lawnmower';
                money = money - 250;
                console.log('You bought a battery-powered lawnmower.');
            }
            else if (input.toLowerCase() === 'no') {
                console.log('You chose not to buy a battery-powered lawnmower.');
            }
        }
    
        // Check if the user is using battery-powered lawnmower
        if (tool.toLowerCase() === 'battery-powered lawnmower') {
            input = prompt('landscaper: user can use battery-powered lawnmower to cut grass [yes/no]: ');
            if (input.toLowerCase() === 'yes') {
                money += 100;
                console.log(`You earned $100. Total money: $${money}.`);
            }
            else if (input.toLowerCase() === 'no') {
                console.log('You decided not to cut grass with battery-powered lawnmower.');
            }
        }
    
        // Check if the user has enough money to hire a team of starving students
        if (tool.toLowerCase() === 'battery-powered lawnmower' && money >= 500) {
            input = prompt('landscaper: user can hire a team of starving students for $500. [yes/no]: ');
            if (input.toLowerCase() === 'yes') {
                tool = 'team of starving students';
                money = money - 500;
                console.log('You hired a team of starving students.');
            }
            else if (input.toLowerCase() === 'no') {
                console.log('You chose not to hire a team.');
            }
        }
    
        // Check if the user is using a team of starving students
        if (tool.toLowerCase() === 'team of starving students') {
            input = prompt('landscaper: user can use a team to cut grass [yes/no]: ');
            if (input.toLowerCase() === 'yes') {
                money += 250;
                console.log(`You earned $250. Total money: $${money}.`);
            }
            else if (input.toLowerCase() === 'no') {
                console.log('You decided not to cut grass with a team.');
            }
        }
    
        // Check if the user wins the game (team of starving students and $1000)
        if (tool.toLowerCase() === 'team of starving students' && money >= 1000) {
            console.log('Congratulations! You have won the game with $1000 and a team of workers!');
            break;
        }
    
        // Add an option to exit the game
        input = prompt('Do you want to continue playing? [yes/no]: ');
        if (input.toLowerCase() === 'no') {
            console.log('Thanks for playing!');
            break;
        }
}
