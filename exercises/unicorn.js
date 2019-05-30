class Unicorn {

	constructor(name, color) {
		this.name = name;
		this.color = color || 'white';
	}

	isWhite(){
	return false;
	}

	says(message) {
		return `**;* ${message} *;**`
	}
}

module.exports = Unicorn;
