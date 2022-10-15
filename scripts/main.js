
/*
 *  14/10 - Jeremias Cuello
 *
 * Resumen: Este script cumple con los requesitos necesarios para
 * lograr el correcto funcionamiento del programa.
 * 
 * Fue realizado para los desafios TECIP de la E.E.S.Tecnica Nro.5.
 * 
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

let input = document.querySelector(".input__text");
let output = document.querySelector(".output__text");

input.addEventListener("keyup", () => {
  
  let result = "";
  let text = document.querySelector(".input__text").value;
  
  for (letter of text.trim().toLowerCase()) {
  
    let validated = false;
    if (letter === " "){ result += "0"; continue; }

    for (buttonLetter of buttonLetters) {

      let button = (buttonLetters.indexOf(buttonLetter) + 2).toString();
      
      if(buttonLetter.includes(letter)){
        validated= true;
        
        // agrega un espacio si el ultimo boton presionado y a presionar son iguales
        result += (result[result.length-1] === button) ? " " : "";
        result += PressButton(button, letter);
        break;
      }
    }

    if (!validated){ result = "Entrada de texto inválida"; break; }
  }

  output.innerHTML = result;
})

function PressButton(number, letter){
  
  /*
  *  14/10 - Jeremias Cuello
  *
  * Resumen: Este script "simula" presionar n cantidad de
  * veces number para "tipear" una la letra letter.
  * 
  */

  let press = number;
  
  for (const buttonLetter of buttonLetters[number - 2]) {
    
    if(buttonLetter === letter) return press;

    press += number;
  }
}
