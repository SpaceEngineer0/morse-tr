const notation = require('./notation');

function encrypt(input) {
	var output = [];

	input.split(' ').forEach(clump => {
		var word = [];

		clump.split('').forEach(letter => {
			const obj = notation.characters.find(obj => obj.text === letter);
			if (!obj) word.push(notation.unknownChar);
			else word.push(obj.morse);
		})

		output.push(word.join(' '));
	})

	return output.join(' / ');
}

function decrypt(input) {
	if (!notation.regex.test(input)) return null;

	var output = [];

	input.split(' / ').forEach(clump => {
		var word = [];

		clump.split(' ').forEach(letter => {
			const obj = notation.characters.find(object => object.morse === letter);
			if (!obj) word.push(notation.unknownChar);
			else word.push(obj.text);
		})

		output.push(word.join(''));
	})

	return output.join(' ');
}

module.exports = {
	notation,
	encrypt,
	decrypt,
	isValidMorse: input => notation.regex.test(input)
}
