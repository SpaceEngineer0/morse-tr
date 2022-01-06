"use strict";

const notation = require('./notation');
const toMorse = require('./to-morse');
const toText = require('./to-text');

module.exports = {
	notation,
	toMorse,
	toText,
	isValidMorse: input => notation.validationRegex.test(input)
}
