"use strict";

const letters = [
	{ text: 'a', morse: '.-'   },
	{ text: 'b', morse: '-...' },
	{ text: 'c', morse: '-.-.' },
	{ text: 'd', morse: '-..'  },
	{ text: 'e', morse: '.'    },
	{ text: 'f', morse: '..-.' },
	{ text: 'g', morse: '--.'  },
	{ text: 'h', morse: '....' },
	{ text: 'i', morse: '..'   },
	{ text: 'j', morse: '.---' },
	{ text: 'k', morse: '-.-'  },
	{ text: 'l', morse: '.-..' },
	{ text: 'm', morse: '--'   },
	{ text: 'n', morse: '-.'   },
	{ text: 'o', morse: '---'  },
	{ text: 'p', morse: '.--.' },
	{ text: 'q', morse: '--.-' },
	{ text: 'r', morse: '.-.'  },
	{ text: 's', morse: '...'  },
	{ text: 't', morse: '-'    },
	{ text: 'u', morse: '..-'  },
	{ text: 'v', morse: '...-' },
	{ text: 'w', morse: '.--'  },
	{ text: 'x', morse: '-..-' },
	{ text: 'y', morse: '-.--' },
	{ text: 'z', morse: '--..' }
]

const numbers = [
	{ text: '0', morse: '-----' },
	{ text: '1', morse: '.----' },
	{ text: '2', morse: '..---' },
	{ text: '3', morse: '...--' },
	{ text: '4', morse: '....-' },
	{ text: '5', morse: '.....' },
	{ text: '6', morse: '-....' },
	{ text: '7', morse: '--...' },
	{ text: '8', morse: '---..' },
	{ text: '9', morse: '----.' }
]

const symbols = [
	{ text: '+', morse: '.-.-.'  },
	{ text: '-', morse: '-....-' },
	{ text: '=', morse: '-...-'  },
	{ text: '.', morse: '.-.-.'  },
	{ text: ',', morse: '--..--' },
	{ text: ':', morse: '---...' },
	{ text: ';', morse: '-.-.-.' },
	{ text: "'", morse: '.----.' },
	{ text: '"', morse: '.-..-.' },
	{ text: '(', morse: '-.--.'  },
	{ text: ')', morse: '-.--.-' },
	{ text: '_', morse: '..--.-' },
	{ text: '?', morse: '..--..' },
	{ text: '!', morse: '-.-.--' },
	{ text: '/', morse: '-..-.'  },
	{ text: '@', morse: '.--.-.' }
]

module.exports = {
	letters,
	numbers,
	symbols,
	allCharacters: [...letters, ...numbers, ... symbols],
	validationRegex: /^(([.-]+|#)( \/ | )?)+$/,
	unknownChar: '#'
}
