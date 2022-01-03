const morseTr = require('./index');

const str1 = 'abc';
const str2 = 'ab cd ef';

const hello = 'hello';
const world = '.-- --- .-. .-.. -..';

const hashTxt = 'aą bć';
const unkChars = '.- .-.-...- / -... --.-.-..-';
const textWithHash = '.--. --- .-.. --- -. . --.. #'

const invalid = '.- -.. <>?';
const a = '-.. . .-..';
const b = '-.. . <>?';

console.log(`
hello world in morse: ${morseTr.toMorse('hello world')}

${str1}: ${morseTr.toMorse(str1)}
${str2}: ${morseTr.toMorse(str2)}

${hello}: ${morseTr.toMorse(hello)}
${world} : ${morseTr.toText(world)}

${hashTxt}: ${morseTr.toMorse(hashTxt)} (# are invalid letters)
${unkChars}: ${morseTr.toText(unkChars)} (# are invalid letters)
${textWithHash}: ${morseTr.toText(textWithHash)} (strings with unknown letters will be translated)

${invalid}: ${morseTr.toText(invalid)} (invalid morse code returns null)
${a} is valid morse? ${morseTr.isValidMorse(a)}
${b} is valid morse? ${morseTr.isValidMorse(b)}`);
