
window.onload = function() {
  init()
}


function init() {

//Ändra färg på logotext
let logoText = document.querySelector('.logo-text')
logoText.style.color = "black"

//Ändra align på header
var header = document.querySelector('header')
header.style.alignItems = 'flex-start'
header.style.right = 'auto'


//Change the color of the border at the bottom
header.style.borderBottomColor = 'lightgray'




}


/*
The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
The recipe name is wrong, change it to the correct one.
The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
The background color of the ingredients list container is wrong. Fix it.
The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

*/