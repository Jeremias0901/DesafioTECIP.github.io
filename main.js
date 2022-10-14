/*
 • comentarios en forma de documentación
 • la claridad de los algoritmos
 • la correcta identación del código.
*/

const buttonLetters = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]

const regExpressions = [
  /(a|b|c)/,
  /(d|e|f)/,
  /(g|h|i)/,
  /(j|k|l)/,
  /(m|n|o)/,
  /(p|q|r|s)/,
  /(t|u|v)/,
  /(w|x|y|z)/,
]

let input = document.querySelector(".input__text");
let output = document.querySelector(".output__text");

input.addEventListener("keyup", () => {
  
  let result = "";
  let text = document.querySelector(".input__text").value;
  
  for (letter of text.trim().toLowerCase()) {
    let validated = false;

    if (letter === " "){ result += "0"; continue; }

    for (regExp of regExpressions) {
      let button = regExpressions.indexOf(regExp) + 2;
      
      if(letter.match(regExp)){
        validated= true;
        
        // agrega un espacio si el ultimo boton presionado y a presionar son iguales
        result += (result[result.length-1] == button) ? " " : "";
        result += PressButton(button, letter);
        break;
      }

    }

    if (!validated){ result = "Entrada de texto inválida"; break; }
  }

  output.innerHTML = result;
})

function PressButton(number, letter){
  
  let press = number.toString();
  
  for (const buttonLetter of buttonLetters[number - 2]) {
    
    if(buttonLetter === letter){
      break;
    }

    press += number;
  }

  return press;
}
