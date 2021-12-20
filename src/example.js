import morser from '../index.js';

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
hello world in morse: ${morser.toMorse('hello world')}

${str1}: ${morser.toMorse(str1)}
${str2}: ${morser.toMorse(str2)}

${hello}: ${morser.toMorse(hello)}
${helloMor}: ${morser.toText(helloMor)}

${hashTxt}: ${morser.toMorse(hashTxt)}(# are invalid letters)
${hashMor}: ${morser.toText(hashMor)} (# are invalid letters)

${invalid}: ${morser.toText(invalid)} (invalid morse code returns null)
${a} is valid morse? ${morser.isValidMorse(a)}
${b} is valid morse? ${morser.isValidMorse(b)}`);
