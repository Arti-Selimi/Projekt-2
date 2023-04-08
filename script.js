let firstGuess = document.querySelectorAll('.first-row')
let secondGuess = document.querySelectorAll('.second-row')
let thirdGuess = document.querySelectorAll('.third-row')
let fourthGuess = document.querySelectorAll('.fourth-row')
let fifthGuess = document.querySelectorAll('.fifth-row')
let checkBtn = document.getElementById("checkBtn")

let dailyWord = ['W','O','R','D','S']

let checkGuess = (guess)=>{
    if(guess === 'first') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < firstGuess.length; i++){
                if(firstGuess[i].value.toUpperCase() === dailyWord[i]) {
                    if(i === j && firstGuess[i].value.toUpperCase() === dailyWord[i]) {
                        firstGuess[i].style.backgroundColor = "salmon"
                    } else if(i !== j && firstGuess[i].value.toUpperCase() === dailyWord[i]) {
                        firstGuess[i].style.backgroundColor = "smoke"
                    } 
                } else {
                    firstGuess[i].style.backgroundColor = "gray"
                }
                firstGuess[i].readOnly = true
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`second`)')
    } else if (guess === 'second') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < secondGuess.length; i++){
                if(secondGuess[i].value.toUpperCase() === dailyWord[i]) {
                    if(i === j && secondGuess[i].value.toUpperCase() === dailyWord[i]) {
                        secondGuess[i].style.backgroundColor = "salmon"
                    } else if(i !== j && secondGuess[i].value.toUpperCase() === dailyWord[i]) {
                        secondGuess[i].style.backgroundColor = "smoke"
                    } else {
                        console.log('spo tshkon diqka')
                    }
                } else {
                    secondGuess[i].style.backgroundColor = "gray"
                }
                secondGuess[i].readOnly = true
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`third`)')
    } else if (guess === 'third') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < thirdGuess.length; i++){
                if(thirdGuess[i].value.toUpperCase() === dailyWord[i]) {
                    if(i === j && thirdGuess[i].value.toUpperCase() === dailyWord[i]) {
                        thirdGuess[i].style.backgroundColor = "salmon"
                    } else if(i !== j && thirdGuess[i].value.toUpperCase() === dailyWord[i]) {
                        thirdGuess[i].style.backgroundColor = "smoke"
                    } else {
                        console.log('spo tshkon diqka')
                    }
                } else {
                    thirdGuess[i].style.backgroundColor = "gray"
                }
                thirdGuess[i].readOnly = true
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`fourth`)')
    } else if (guess === 'fourth') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < fourthGuess.length; i++){
                if(fourthGuess[i].value.toUpperCase() === dailyWord[i]) {
                    if(i === j && fourthGuess[i].value.toUpperCase() === dailyWord[i]) {
                        fourthGuess[i].style.backgroundColor = "salmon"
                    } else if(i !== j && fourthGuess[i].value.toUpperCase() === dailyWord[i]) {
                        fourthGuess[i].style.backgroundColor = "smoke"
                    } else {
                        console.log('spo tshkon diqka')
                    }
                } else {
                    fourthGuess[i].style.backgroundColor = "gray"
                }
                fourthGuess[i].readOnly = true
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`fifth`)')
    } else {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < fifthGuess.length; i++){
                if(fifthGuess[i].value.toUpperCase() === dailyWord[i]) {
                    if(i === j && fifthGuess[i].value.toUpperCase() === dailyWord[i]) {
                        fifthGuess[i].style.backgroundColor = "salmon"
                    } else if(i !== j && fifthGuess[i].value.toUpperCase() === dailyWord[i]) {
                        fifthGuess[i].style.backgroundColor = "smoke"
                    } else {
                        console.log('spo tshkon diqka')
                    }
                } else {
                    fifthGuess[i].style.backgroundColor = "gray"
                }
                fifthGuess[i].readOnly = true
            }
        }
    }
}