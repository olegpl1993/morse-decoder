const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let textArr = [];
    for (let n = 0; n < expr.length; n += 10) {
        let charArr = [];
        for (let i = n; i < n + 10; i += 2) {
            if (expr[i] === "1" && expr[i + 1] === "0") {
                charArr.push(".")
            }
            if (expr[i] === "1" && expr[i + 1] === "1") {
                charArr.push("-")
            }
            if (expr[i] === "*") {
                textArr.push(" ")
                break;
            }
        }
        for (let char in MORSE_TABLE) {
            if (charArr.join('') === char) {
                textArr.push(MORSE_TABLE[char])
            }
        }
    }
    return textArr.join('');
}

module.exports = {
    decode
}
