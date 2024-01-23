window.onload = function() {
  init()
}


function init() {

let recipeName = document.getElementById('recipe-name')
console.log('The name of the receipe is ' + recipeName.innerText)


console.log('The name of the tag is ' + recipeName.tagName)


let description = document.querySelector('.description')
let computedStyle = window.getComputedStyle(description)
let fontSize = computedStyle.getPropertyValue('font-size')
console.log('Font size of the paragraph with class "description": ' + fontSize)

let img = document.querySelector('img')
console.log(img.getAttribute("alt"))


let height = img.clientHeight
let width = img.clientWidth
let imageUrl = img.src
let imageInfo = {
  url: imageUrl,
  height: height,
  width: width,
}
console.log('This is the information object of the image ' + imageInfo)


let pasteIngredientsList = document.querySelector('.ingredients-list-paste')
// Count the number of list items (ingredients) within the paste ingredients list
let numberOfPasteIngredients = pasteIngredientsList.getElementsByTagName('li').length
console.log('Number of ingredients for the paste:', numberOfPasteIngredients)


console.log(pasteIngredientsList.getElementsByTagName('li')[3].innerText)


let instructionsList = document.querySelector('.instructions-list')
// Get all list items (instructions) within the ordered list
let instructionItems = instructionsList.getElementsByTagName('li')
// Create an array to store the objects
let instructionsArray = []
// Iterate through each instruction item and create an object
  for (let i = 0; i < instructionItems.length; i++) {
    let order = i + 1 // Adding 1 to start the order from 1
    let text = instructionItems[i].textContent.trim() // Trim to remove leading/trailing whitespaces
    // Create an object and push it to the array
    let instructionObject = { order: order, text: text }
    instructionsArray.push(instructionObject)
  }
  console.log('Array of instruction objects:', instructionsArray)


}
