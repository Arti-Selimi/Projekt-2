let firstGuess = document.getElementsByClassName('.first-row').value
let secondGuess = document.querySelectorAll('.second-row').value
let thirdGuess = document.querySelectorAll('.third-row').value
let fourthGuess = document.querySelectorAll('.fourth-row').value
let fifthGuess = document.querySelectorAll('.fifth-row').value

let dailyWordArr = ['W','O','R','D','S']
let firstGuessArr = Array.from(firstGuess)

let checkGuess = ()=>{
    for(let j = 0; j < dailyWordArr.length; j++) {
        for(let i = 0; i < firstGuessArr.length; i++) {
            if(firstGuess[i] === dailyWordArr[i]) {
                firstGuess[i].style.backgroundColor = "salmon"
            } else {
                firstGuess[i].style.backgroundColor = "gray"
            }
        }
    }
}