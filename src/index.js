const obj = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "": " "    
};

function decode(expr) {
    let arr = expr.split("");
    let letter = " ";
    
    let result = " ";
    for (let i = 0; i < arr.length; i=i++) {
      letter = arr.splice(i, 10).join("");      
  
      if (letter === "**********") {
        result = result + "";
      }  
      let decoded =""
  
      for (let i = 0; i < 10; i = i + 2) {
        if (letter[i] === "1" && letter[i + 1] === "0") {
          decoded = decoded + "." ;
          
        }
        if (letter[i] === "1" && letter[i + 1] === "1") {
          decoded = decoded + "-";
        }     
       
      }
      result=result+obj[decoded]      
    }  
    
    return  result.trim()      
}

module.exports = {
    decode
}