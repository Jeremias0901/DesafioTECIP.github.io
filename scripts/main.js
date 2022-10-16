
/*
 *  14/10 - Jeremias Cuello
 *
 * Resumen: Este script en función de una frase ingresada, devuelve
 * una secuencia de numeros que se deberian presionar en los
 * teclados de los teléfonos para tipear la frase introducida.
 * 
 * Fue desarrollado para los desafios TECIP de la E.E.S.Tecnica Nro.5 por Jeremias Cuello
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
  
  const text = input.value.trim().toLowerCase();
  let result = "";

  if(!(/^[a-z ]{0,}$/).test(text)){
    output.innerHTML = "Entrada Inválida.\nLa frase contiene caracteres inválidos";
    output.style.color = "#b74c00";
    return;
  }

  for (const letter of text) {
  
    if (letter === " "){ result += "0"; continue; }

    for (const buttonLetter of buttonLetters) {

      const button = String(buttonLetters.indexOf(buttonLetter) + 2);
      
      if(buttonLetter.includes(letter)){   
        // Agrega un espacio si el ultimo boton presionado y a presionar son iguales
        result += (result[result.length-1] === button) ? " " : "";
        result += PressButton(button, letter);
        break;
      }
    }
  }

  output.innerHTML = result;
  output.style.color = "black";
})

function PressButton(number, letter){
  
  /*
  *  14/10 - Jeremias Cuello
  *
  * Resumen: Este script "simula" presionar n cantidad de
  * veces number para "tipear" una la letra letter.
  * 
  */

  let sequenceNumbers = number;

  for (const buttonLetter of buttonLetters[number - 2]) {
    
    if(buttonLetter === letter) return sequenceNumbers;

    sequenceNumbers += number;
  } 
}
