const fs = require('fs');

// question 1- What floor does santa end up on?
// ( --> should go up 1 floor
// ) --> should go down 1 floor

/* function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
               return acc += 1 
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.log('floor:', answer);
    })
}

question1() */



// question 2- when does santa first enter the basement?

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0
        let counter = 0
        const answer = directionsArray.some((currentValue) => {
            if (currentValue === '(') {
                accumulator += 1 
            } else if (currentValue === ')') {
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        })
        console.log('basement entered at:', counter);
    })
}

question2()