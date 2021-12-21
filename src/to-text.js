const notation = require('./notation');

module.exports = (input) => {
	if (!notation.validationRegex.test(input)) return null;

	var output = [];

	input.split(' / ').forEach(clump => {
		var word = [];

		clump.split(' ').forEach(letter => {
			const obj = notation.allCharacters.find(object => object.morse === letter);
			if (!obj) word.push(notation.unknownChar);
			else word.push(obj.text);
		})

		output.push(word.join(''));
	})

	return output.join(' ');
}
