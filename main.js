/*
 • comentarios en forma de documentación
 • la claridad de los algoritmos
 • la correcta identación del código.
*/

var result = document.querySelector("#result");

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

var input = document.querySelector("#inp_text");

input.addEventListener("keyup", () => {
  
  let output = "";
  let text = document.querySelector("#inp_text").value;
  
  for (letter of text.trim().toLowerCase()) {
    
    for (regExp of regExpressions) {
      
      if(regExp.test(letter)){
        
        if(output[output.length-1] == regExpressions.indexOf(regExp) + 2){
          output += " ";
        }
        
        output += PressButton(regExpressions.indexOf(regExp) + 2, letter);
      }
      else if (letter === " "){
        output += "0";
        break;
      }
    }
  }

  result.innerHTML = output;
})

function PressButton(number, letter){
  
  let res = "";  
  let i = -1;
  
  do{
    res += number;
    i += 1;
  } while(letter != buttonLetters[number-2][i]);
  
  return res;
}