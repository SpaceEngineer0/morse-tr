const morsetr = require('../index');

const str1 = 'abc';
const str2 = 'ab cd ef';

const hello = 'hello';
const helloMor = '.... . .-.. .-.. ---';

const hashTxt = 'ab ąć cd';
const hashMor = '.- -... / .--...-. --..-.- / ..-..--. -.-.';

const invalid = '.- -.. <>?';
const a = '-.. . .-..';
const b = '-.. . <>?;';

console.log(`
hello world in morse: ${morsetr.toMorse('hello world')}

${str1}: ${morsetr.toMorse(str1)}
${str2}: ${morsetr.toMorse(str2)}

${hello}: ${morsetr.toMorse(hello)}
${helloMor}: ${morsetr.toText(helloMor)}

${hashTxt}: ${morsetr.toMorse(hashTxt)}(# are invalid letters)
${hashMor}: ${morsetr.toText(hashMor)} (# are invalid letters)

${invalid}: ${morsetr.toText(invalid)} (invalid morse code returns null)
${a} is valid morse? ${morsetr.isValidMorse(a)}
${b} is valid morse? ${morsetr.isValidMorse(b)}`);
