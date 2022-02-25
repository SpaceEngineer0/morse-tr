# morse-tr

Fast morse code translation module.

`npm i morse-tr`

```js
const morseTr = require('morse-tr');
```

## Morse Code formatting

* Parts of a letter aren't separated.
* Letters of a word are separated by a single space.
* Word are separated by a slash.

## Documentation

### encrypt(text)

* `text` - string, message to encrypt.

If a letter is used in the string that isn't present in the notation a hash `#` will be inserted in its place.

```js
morseTr.encrypt('hello');         // '.... . .-.. .-.. ---'
morseTr.encrypt('aą bć');         // '.- # / -... #'
morseTr.encrypt('.- -.. <>?');    // null
```

### decrypt(text)

* `text` - string, morse code to decrypt.

If a morse letter is used in the string that isn't present in the notation a `#` will be inserted in its place.

If the input is not matched by the validation regex function returns `null`.

```js
morseTr.decrypt('.... . .-.. .-.. ---');          // 'hello'
morse.decrypt('.- .-.-...- / -... --.-.-..-');    // 'a# b#'
```

### isValidMorse(text)

* `text` - string, morse code to check.

Checks if a string is valid morse code.

```js
morseTr.isValidMorse('-.. . .-..');    // true
morseTr.isValidMorse('-.. . <>?');     // false
```

### Notation

Notation properties:

* `.letters`
* `.numbers`
* `.symbols`
* `.characters`
* `.regex`
* `.unknownChar`

Each character is an object with `text` and `morse` properties.

```js
morseTr.notation.letters[0];
// { text: 'a', morse: '.-' }
```
