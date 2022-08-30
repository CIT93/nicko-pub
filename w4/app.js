// Show on page function
const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

//   const dailyDec = function (alarm, time) {
//     let dogWalk = ``
//       if (time <= 2000) {
//           dogWalk = 'I will walk the dog today'
//     } else if (time >= 2100) {
//       dogWalk = 'I will walk the dog tommorrow'
//   } else {
//       dogWalk = `I will walk the dog based on how she feels`
//   }
//   return `I woke up for work around ${alarm} and went to the gym after. ${dogWalk}.`
//   }
  
//   const dec = dailyDec(3, 2000)
//   showOnPage(dec)
 
//   const clothes = function (temp) {
// 	if (temp >= 90) {
// 	return 'I will wear shorts, a tshirt, and crocs for the walk'
// } else if (temp <= 80 && temp >= 70) {
// 	return ' I will wear shorts, a tshirt and running shoes for the walk'
// } else 
// 	return ' I will wear shorts, a sweater and running shoes for the walk'
// }
// const outfit = clothes (69)
// showOnPage(outfit)


const dec = {
    checkTime: function(time) {
	let dogWalk = ``
        const alarm = 3
    if (time <= 2000) {
        dogWalk = 'I will walk the dog today'
    } else if (time >= 2100) {
        dogWalk = 'I will walk the dog tommorrow'
    } else {
        dogWalk = `I will walk the dog based on how she feels`
    }
        return `I woke up for work around ${alarm} and went to the gym after. ${dogWalk}.`
  },
    checkTemp: function(degrees) {
	if (degrees >= 90) {
	return 'I will wear shorts, a tshirt, and crocs for the walk'
    } else if (degrees <= 80 && degrees >= 70) {
	return ' I will wear shorts, a tshirt and running shoes for the walk'
    } else 
	return ' I will wear shorts, a sweater and running shoes for the walk'
}
}
 
showOnPage(dec.checkTime(2000))
showOnPage(dec.checkTemp(69))