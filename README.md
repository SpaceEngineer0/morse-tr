# morser

Fast morse code translation module.

To install the package, type `npm i morser` in a terminal and add this to your project:

```js
const morser = require('morser');
```

## Morse Code formatting

* Parts of a letter aren't separated
* Letters of a word are separated by a single space
* Word are separated by a slash between spaces

'hello world' in morse: `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`

![morse-code.png](./morse-code.png)

## toMorse

Translates a string to morse code. If a letter is used in the string that isn't present in the notation a hash `#` will be inserted in its place.

```js
const hello = 'hello';
morser.toMorse(hello);        // '.... . .-.. .-.. ---'

const hash = 'ab ąć cd';
morser.toMorse(hash);        // '.- -... / # # / -.-. -..'

const invalid = '.- -.. <>?';
morser.toMorse(invalid);        // null
```

## toText

Translates a string of morse code to normal text. If a morse letter is used in the string that isn't present in the notation a hash `#` will be inserted in its place. If the string is not matched by notation's validation regex the function will return `null`as a failsafe.

```js
const hello = '.... . .-.. .-.. ---';
morser.toText(hello);        // 'hello'

const hash = '.- -... / .--...-. --..-.- / ..-..--. -.-.';
morse.toText(hash);        // 'ab ## cd'
```

## isValidMorse

Checks if a string is valid morse code. Returns `true` of `false`.

```js
const a = '-.. . .-..';
const b = '-.. . <>?;';

morser.isValidMorse(a);        // true
morser.isValidMorse(b);        // false
```

## notation

Notation of morse code letters, numbers and symbols.

Morse validation regex is used to test if a string js a valid morse message.

```js
const morseLetters = morser.notation.letters;
const allMorseCharacters = morser.notation.allCharacters;
const regex = morser.notation.validationRegex;
```

## To Do

* QCodes

## Contribute

If you spot a bug, or want to improve this module, please contact me.
