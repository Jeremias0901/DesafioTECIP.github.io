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

var input = document.querySelector("#inp_text");

input.addEventListener("keyup", () => {
  
  let output = "";
  let text = document.querySelector("#inp_text").value;
  
  for (letter of text.trim().toLowerCase()) {
    if((/(a|b|c)/).test(letter)){
      if(output[output.length-1] === "2")
        output += " ";
      output += PressButton(2, letter);
    }
    else if((/(d|e|f)/).test(letter)){
      if(output[output.length-1] === "3")
        output += " ";
      output += PressButton(3, letter);
    }
    else if((/(g|h|i)/).test(letter)){
      if(output[output.length-1] === "4")
        output += " ";
      output += PressButton(4, letter);
    }
    else if((/(j|k|l)/).test(letter)){
      if(output[output.length-1] === "5")
        output += " ";
      output += PressButton(5, letter);
    }
    else if((/(m|n|o)/).test(letter)){
      if(output[output.length-1] === "6")
        output += " ";
      output += PressButton(6, letter);
    }
    else if((/(p|q|r|s)/).test(letter)){
      if(output[output.length-1] === "7")
        output += " ";
      output += PressButton(7, letter);
    }
    else if((/(t|u|v)/).test(letter)){
      if(output[output.length-1] === "8")
        output += " ";
      output += PressButton(8, letter);
    }
    else if((/(w|x|y|z)/).test(letter)){
      if(output[output.length-1] === "9")
        output += " ";
      output += PressButton(9, letter);
    }else if (letter === " "){
      output += "0";
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