
var words = ["eleven", "dart", "hopper", "madmax", "mindflayer", "demigorgon", "ghostbusters", "upsidedown", "eggos", "dustin", "lucas", "zombieboy", "demodogs"]
var hangWord
var letterIndex
var guessed = []
var underScore = []
var display = []
var wins = 0
var guesses
var hideDiv = document.getElementById("wordBox")
    hideDiv.style.display = "none"
var hideWinPic = document.getElementById("winPic")
    hideWinPic.style.display = "none"
var hideLosePic = document.getElementById("losePic")
    hideLosePic.style.display = "none"


document.onkeyup = function(event) {
    if (event.key) {
    var showDiv = document.getElementById("wordBox")
    showDiv.style.display = "block"
    var hideKey = document.getElementById("key")
    hideKey.style.display = "none"
    start()
    }
}

function start() {

        var hangWord = words[Math.floor((Math.random() * words.length))]
        var guesses = 10
        display = []
        for (i = 0; i < hangWord.length; i++) {
            display.push('_')
        document.getElementById("wordBox").innerHTML = display.join(" ")
        document.getElementById("remaining1").innerHTML = guesses
        document.getElementById("wins").innerHTML = wins
        guessed = []
         
        document.onkeyup = function start(event) {
            userGuess = (event.key)
            if (event.keyCode > 64 && event.keyCode < 91) {
    
                var letterIndex = []
                var guessed = []
                for (j = 0; j < hangWord.length; j++) {
                    if (hangWord[j] === userGuess) {
                        letterIndex.push(j)
                    }        
                }
                
                if (letterIndex.length <= 0) {
                    guesses--
                    guessed.push(userGuess)
                    document.getElementById("remaining1").innerHTML = guesses
                    var newDiv = document.createElement ("div")
                    var newText = document.createTextNode (guessed)
                    newDiv.appendChild(newText)
                    var addText = document.getElementById("wrongGuesses").appendChild(newDiv)

                }
                else {
                    for (k = 0; k < letterIndex.length; k++) {
                        display[letterIndex[k]] = userGuess
                        document.getElementById("wordBox").innerHTML = display.join(" ")
                    }
                }

                if (guesses === 0) {
                    document.getElementById("lose").innerHTML = "Try again!"
                    var showLosePic = document.getElementById("losePic")
                        showLosePic.style.display = "inline-block"
                    restart()
                }
    
                if (display.indexOf("_") === -1) {
                    document.getElementById("win").innerHTML = "You win!"
                    var showWinPic = document.getElementById("winPic")
                        showWinPic.style.display = "inline-block"
                    wins++
                    document.getElementById("wins").innerHTML = wins
                    restart()
                }     
            }
        }
    }
}


function restart() {
    var guesses = 6
    display = []
    guessed = []
    clearDiv()
    start()

}

function clearDiv() {
    var removeDiv = document.getElementById("wrongGuesses")
    while (removeDiv.hasChildNodes()) {
        removeDiv.removeChild(removeDiv.lastChild)
    }

}

function stats() {
    document.getElementById('remaining1').innerHTML = guesses
    document.getElementById('wins').innerHTML = wins
}







