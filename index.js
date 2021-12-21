const notation = require('./src/notation');
const toMorse = require('./src/to-morse');
const toText = require('./src/to-text');

module.exports = {
	notation,
	toMorse,
	toText,
	isValidMorse: input => notation.validationRegex.test(input)
}
