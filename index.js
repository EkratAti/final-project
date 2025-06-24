import readlineSync from 'readline-sync' ;

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
        let userNumber = readlineSync.question (' Enter your 4 unique digits: ')
        if (userNumber && userNumber.length ===4 && new Set(userNumber).size === 4 )
            return userNumber;
    }
    console.log ('Invalid input . Please enter a 4 unique digits: ')
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
    let name = readlineSync.question('what is your name ? ')
    if (!name)
        name = 'Stranger'
    console.log(`\n welcome ${name}! Let's play Bulls and Cows! ` );

    while (true) {
        let guess = getNumber();
        attempts++
        let {bulls , cows} = countBullsAndCows(secret , guess) ;
    
        if (bulls === 4){
            console.log(`Congrats, ${name}! You guessed the secret number ${secret} in ${attempts} attempts!`) ;
            break ;
        } else if (bulls === 0 && cows === 0) {
            console.log(`No Bulls and Cows. Try again!`) ;
        } else {
            console.log(`Tipp : ${bulls} Bulls and ${cows} Cows. Try again!`) ;
        }
    }
   
}
playGame()