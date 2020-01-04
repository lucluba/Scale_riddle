'use strict';

let array = [1, 1, 1, 2, 1, 1, 1, 1];
let i = 0;
let ballArray = [];

array.forEach(element => {
    ballArray.push({
        number: element,
        primaryIndex: i
    });
    i++;
});

const leftBallsArray = [],
    rightBallsArray = [];

let leftSum = 0,
    rightSum = 0;

// losowanie kuli po indeksach - 3 lewa strona

for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * ballArray.length);
    let leftSideBall = ballArray[randomNumber];
    ballArray.splice(randomNumber, 1);
    leftBallsArray.push(leftSideBall);
    leftSum += leftSideBall.number;
}

// losowanie kuli po indeksach - 3 prawa strona

for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * ballArray.length);
    let rightSideBall = ballArray[randomNumber];
    ballArray.splice(randomNumber, 1);
    rightBallsArray.push(rightSideBall);
    rightSum += rightSideBall.number;
}

const commonText = "The heavy ball was on array's primary index of ";

if (leftSum === rightSum) {
    if (ballArray[0].number > ballArray[1].number) {
        console.log(commonText + ballArray[0].primaryIndex);
    } else {
        console.log(commonText + ballArray[1].primaryIndex);
    }
} else if (leftSum > rightSum) {
    randomNumber = Math.floor(Math.random() * leftBallsArray.length);
    let firstBall = leftBallsArray[randomNumber];
    leftBallsArray.splice(randomNumber, 1);
    randomNumber = Math.floor(Math.random() * leftBallsArray.length);
    let secondBall = leftBallsArray[randomNumber];

    if (firstBall.number === secondBall.number) {
        console.log(commonText + leftBallsArray.primaryIndex);
    } else if (firstBall.number > secondBall.number) {
        console.log(commonText + firstBall.primaryIndex);
    } else {
        console.log(commonText + secondBall.primaryIndex);
    }
} else {
    randomNumber = Math.floor(Math.random() * rightBallsArray.length);
    let firstBall = rightBallsArray[randomNumber];
    rightBallsArray.splice(randomNumber, 1);
    randomNumber = Math.floor(Math.random() * rightBallsArray.length);
    let secondBall = rightBallsArray[randomNumber];

    if (firstBall.number === secondBall.number) {
        console.log(commonText + rightBallsArray.primaryIndex);
    } else if (firstBall.number > secondBall.number) {
        console.log(commonText + firstBall.primaryIndex);
    } else {
        console.log(commonText + secondBall.primaryIndex);
    }
}

