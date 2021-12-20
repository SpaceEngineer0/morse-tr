import notation from './src/notation.js';
import toMorse from './src/to-morse.js';
import toText from './src/to-text.js';

export default {
	notation,
	toMorse,
	toText,
	isValidMorse: input => notation.validationRegex.test(input),
}
