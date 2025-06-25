import readlineSync from 'readline-sync' ;
import color from 'colors' ;

// introduce a random Number

function produceNumber () {
    let randomNumber = [] ;
    while (randomNumber.length < 4 ){
     let digit = Math.floor(Math.random () *10).toString();
     if (!randomNumber.includes(digit))
        randomNumber.push(digit);
    }
    return randomNumber.join ('');
}

// get an input Number 

function getNumber() {
    while (true) {
        let userNumber = readlineSync.question ('\nEnter your 4 unique digits: '.cyan.dim.bold)
        if (userNumber && userNumber.length ===4 && new Set(userNumber).size === 4 )
            return userNumber;
    }
    
}

// Compare get to produce Number( count Bulls and Cows)

function countBullsAndCows(secret , guess) {
    let bulls = 0;
    let cows = 0 ;
    for (let i=0 ; i<4 ;i++) {
        if (secret[i] === guess[i])
            bulls++
        else if (secret.includes(guess[i]))
            cows++
    }
    return {bulls , cows}
}

// Now play

function playGame (){
    const secret = produceNumber() ;
    let attempts = 0 ; 
    let name = readlineSync.question('\nwhat is your name ? '.dim.bold.cyan);
    if (!name)
        name = 'Stranger'
    console.log(`\n   welcome ${name} ! Let's play Bulls and Cows!`.rainbow.bold) ;

    while (true) {
        let guess = getNumber();
        attempts++
        let {bulls , cows} = countBullsAndCows(secret , guess) ;
    
        if (bulls === 4){
            console.log(`\nCongrats, ${name}! You guessed the secret number ${secret} in ${attempts} attempts!\n`.rainbow.bold) ;
            break ;
        } else if (bulls === 0 && cows === 0) {
            console.log(`\nNo Bulls and Cows. Try again!.red.italic.bold`) ;
        } else {
            console.log(`\nTipp : ${bulls} Bulls and ${cows} Cows. Try again!`.bgBrightYellow.bold.red) ;
        }
    }
   
}
playGame()