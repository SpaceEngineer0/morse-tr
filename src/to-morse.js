import notation from './notation.js';

export default (input) => {
	var output = [];

	input.split(' ').forEach(clump => {
		var word = [];

		clump.split('').forEach(letter => {
			const obj = notation.allCharacters.find(obj => obj.text === letter);
			if (!obj) word.push(notation.unknownChar);
			else word.push(obj.morse);
		})

		output.push(word.join(' '));
	})

	return output.join(' / ');
}
