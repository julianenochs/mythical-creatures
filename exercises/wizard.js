class Wizard {
	constructor(wizard) {
		this.name = wizard.name;
		this.bearded = wizard.bearded
		this.bearded = this.bearded === undefined;
		this.isRested = true;
		this.counter = 0;
	}

	incantation(spell) {
		return spell.toUpperCase()
	}

	cast() {
		this.counter++
		if (this.counter >=3){
			this.isRested = false;
			return 'I SHALL NOT CAST'
		}
		return 'MAGIC BULLET'
	}
}

module.exports = Wizard;