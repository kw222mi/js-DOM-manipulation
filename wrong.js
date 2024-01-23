
window.onload = function() {
  init()
}


function init() {

//Ändra färg på logotext
let logoText = document.querySelector('.logo-text')
logoText.style.color = "black"

//Ändra align på header
let header = document.querySelector('header')
header.style.alignItems = 'flex-start'
header.style.right = 'auto'

// Change the color of the border at the bottom
header.style.borderBottomColor = 'lightgray'

// Change the name of the recipe
let recipeName = document.getElementById('recipe-name')
recipeName.innerText= "Frozen Cheescake"

// Fix the clock by adding a class
let iconElement = document.querySelector('div > span')
iconElement.classList.add('material-icons')

// Change the estimated time
let time = document.querySelector('.time')
time.innerText= "60+ min"

// Change the src path of the image
let img = document.querySelector('img')
const newSrc = "assets/frozen-cheesecake-slice.jpg";
img.setAttribute("src", newSrc)

//Fix bg-color of ingredients
let ingredients = document.querySelector('.ingredients-container')
ingredients.style.backgroundColor = '#f9f9f9'

// Fix the ingredients list
let ingredientsListBottom = document.querySelector('.ingredients-list-bottom')

let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
listItem1.textContent = '15st digestivekex'
listItem2.textContent = 'Lite smör'

ingredientsListBottom.innerHTML = ''
ingredientsListBottom.appendChild(listItem1)
ingredientsListBottom.appendChild(listItem2)

// Change the third ingredient
let ingredientsListPaste = document.querySelector('.ingredients-list-paste')
let thirdIngredient = ingredientsListPaste.children[2]
thirdIngredient.textContent = '3 tsk vanlijsocker'

// Add missing ingredient
let missingIngredient = document.createElement('li')
missingIngredient.textContent = '400g naturell philadelphiaost'
ingredientsListPaste.appendChild(missingIngredient)

// Remove shadow
let instructionsHeading = document.querySelector('.instructions')
instructionsHeading.style.boxShadow = 'none'

// Change wrong instructions 
let instructionsList = document.querySelector('.instructions-list');
let listItemNumber2 = instructionsList.children[1];
let listItemNumber9 = instructionsList.children[8];
listItemNumber2.textContent = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
listItemNumber9.textContent = 'Ställ in i frysen över natten.';



}
