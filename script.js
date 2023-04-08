let inputs = document.querySelectorAll('.guessingLetters')
let firstGuess = document.querySelectorAll('.first-row')
let secondGuess = document.querySelectorAll('.second-row')
let thirdGuess = document.querySelectorAll('.third-row')
let fourthGuess = document.querySelectorAll('.fourth-row')
let fifthGuess = document.querySelectorAll('.fifth-row')
let checkBtn = document.getElementById("checkBtn")
let answer = document.getElementById('answer')

let dailyWord = ['W','O','R','D','S']

let checkGuess = (guess)=>{
    if(guess === 'first') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < firstGuess.length; i++){
                if(firstGuess[i].value.toUpperCase() === dailyWord[i]){
                    firstGuess[i].style.backgroundColor = "salmon"
                } else {
                    firstGuess[i].style.backgroundColor = "gray"
                }
                firstGuess[i].readOnly = true
                if (firstGuess[i].style.backgroundColor === "salmon") {
                    answer.innerHTML = "Good job! Got it on the first try."
                } else {
                    answer.innerHTML = "Not quite."
                }
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`second`)')
    } else if (guess === 'second') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < secondGuess.length; i++){
                if(secondGuess[i].value.toUpperCase() === dailyWord[i]) {
                    secondGuess[i].style.backgroundColor = "salmon"
                } else {
                    secondGuess[i].style.backgroundColor = "gray"
                }
                secondGuess[i].readOnly = true
                if (secondGuess[i].style.backgroundColor === "salmon") {
                    answer.innerHTML = "Good job! Got it on the second try."
                } else {
                    answer.innerHTML = "Not quite."
                }
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`third`)')
    } else if (guess === 'third') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < thirdGuess.length; i++){
                if(thirdGuess[i].value.toUpperCase() === dailyWord[i]) {
                    thirdGuess[i].style.backgroundColor = "salmon"
                } else {
                    thirdGuess[i].style.backgroundColor = "gray"
                }
                thirdGuess[i].readOnly = true
                if (thirdGuess[i].style.backgroundColor === "salmon") {
                    answer.innerHTML = "Good job! Got it on the third try."
                } else {
                    answer.innerHTML = "Not quite."
                }
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`fourth`)')
    } else if (guess === 'fourth') {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < fourthGuess.length; i++){
                if(fourthGuess[i].value.toUpperCase() === dailyWord[i]) {
                    fourthGuess[i].style.backgroundColor = "salmon"
                } else {
                    fourthGuess[i].style.backgroundColor = "gray"
                }
                fourthGuess[i].readOnly = true
                if (fourthGuess[i].style.backgroundColor === "salmon") {
                    answer.innerHTML = "Good job! Got it on the fourth try."
                } else {
                    answer.innerHTML = "Not quite."
                }
            }
        }
        checkBtn.setAttribute('onclick', 'checkGuess(`fifth`)')
    } else {
        for(let j = 0; j < dailyWord.length; j++) {
            for(let i = 0; i < fifthGuess.length; i++){
                if(fifthGuess[i].value.toUpperCase() === dailyWord[i]) {
                    fifthGuess[i].style.backgroundColor = "salmon"
                } else {
                    fifthGuess[i].style.backgroundColor = "gray"
                }
                fifthGuess[i].readOnly = true
                if (fifthGuess[i].style.backgroundColor === "salmon") {
                    answer.innerHTML = "Good job! Got it on the fifth try."
                } else {
                    answer.innerHTML = "Not quite."
                }
            }
        }
    }
    for(let i = 0; i < inputs.length; i++) {
        if (answer.innerHTML !== "Not quite.") {
            inputs[i].readOnly = true
        } else {
            console.log('o')
        }
    }
}
