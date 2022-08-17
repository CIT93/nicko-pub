// Show on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

// My Daily Decsions include deciding what to do after the gym 
// and determing if I should walk my dog

let alarm = 3
let gymTime = 1
let practiceGuitar = true
let study = true
let temp = 75

showOnPage('<b>Output is based on the following Global Variable Data</b>')
showOnPage('Wake up to alarm:' + alarm)
showOnPage('Gym Time:' + gymTime)
showOnPage('Temperature is cool enough to walk the dog = ' + temp)
showOnPage('Time to Practice Guitar = ' + practiceGuitar)
showOnPage('Time to Study = ' + study)
showOnPage('<b>End of Global Variable Data</b>')

showOnPage('<b>Daily Decisions</b>')
showOnPage('Wake up for work at 3 in the morning')
showOnPage('Go to the gym right after work')

if (practiceGuitar && study){
    showOnPage('Split time between both practicing guitar and studying')
} else if(practiceGuitar || study){
    showOnPage('Decide which one needs more attention for the day')
} else {
    showOnPage('If I am too tired to practice or study then take a nap')
}


if (temp <= 80) {
    showOnPage('I will walk the dog today')
} else if (temp >= 85 ) {
    showOnPage('I will walk the dog tommorrow')
} else {
    showOnPage('I will make a call based on how she feels')
}
