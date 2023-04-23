let inputs = document.querySelectorAll('.guessingLetters')
let checkBtn = document.getElementById("checkBtn")
let answer = document.getElementById('answer')
const arrayOfInputs = [document.querySelectorAll('.first-row'), document.querySelectorAll('.second-row'), document.querySelectorAll('.third-row'), document.querySelectorAll('.fourth-row'), document.querySelectorAll('.fifth-row')]
const totalWords = JSON.parse(words)
const dailyWordObj = totalWords[Math.floor(Math.random()*2314)]
const dailyWord = Array.from(dailyWordObj.word)
console.log(dailyWord)
let counter = 0

let checkGuess = ()=>{
    console.log('counter',counter)
    arrayOfInputs[counter].forEach((e, i) => {
                if (e.value.toUpperCase() === dailyWord[i]) {
                    e.style.background = "green"
                } else if (dailyWord.includes(e.value.toUpperCase())) {
                    e.style.background = "#ffcd91"
                } else {
                    e.style.background = "gray" 
                }
                e.setAttribute('readonly', true)
        }
    )
    counter++
};