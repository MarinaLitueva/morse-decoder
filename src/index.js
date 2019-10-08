const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i  = 0;
    let s = "";
    let retStr = "";
    for (let l = 0; l < expr.length; l=l+10){
        s = ""
        if(expr[l] === "*"){
            retStr = retStr + " ";
            continue;
        }
        for (i = l; i < l+10; i=i+2){
    
            if ((expr[i]==="1") && (expr[i+1]==="0")){
                s = s + ".";
            }else if((expr[i]==="1") && (expr[i+1]==="1")){
                s = s + "-";
            } else {
                continue;
            }
        }
        retStr = retStr + MORSE_TABLE[s]
    }

    return retStr;

}

module.exports = {
    decode
}