// Show on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

// My Daily Decsions include deciding what to do after the gym 
// and determing if I should walk my dog

showOnPage('<b>Output is based on the following Data</b>')
showOnPage('Time I Wake up to the alarm' )
showOnPage('Is the temperature cool enough to walk the dog' )
showOnPage('Do I have time to Practice Guitar' )
showOnPage('Do I have Time to Study')
showOnPage('<b>End of Data</b>')

showOnPage('<b>Daily Decisions</b>')


let dailyDec = function (alarm, temp) {
  let dogWalk = ``
	if (temp <= 80) {
		dogWalk = 'I will walk the dog today'
  } else if (temp >= 90) {
    dogWalk = 'I will walk the dog tommorrow'
} else {
    dogWalk = `I will walk the dog based on how she feels`
}
return `I woke up for work around ${alarm} and went to the gym after. ${dogWalk}.`
}

let dec = dailyDec(3, 82)
showOnPage(dec)

let practiceOrStudy = function (clock) {
  let manage = ``
  if (clock <=3) {
    manage = 'Choose to practice guitar over studying'
  }else if (clock >=7 && clock < 9) {
    manage = 'Study for the rest of the night until bed'
  } else {
    manage = 'Take a nap'
}
  return `${manage}`
}
let home = practiceOrStudy(9) 
showOnPage(home) 
