class Medusa {
	constructor (name) {
		this.name = name;
		this.statues = [];
	}

	stare (victim) {
		victim.isStoned = true;
		this.statues.push(victim)
		if (this.statues.length >3) {
			this.statues[0].isStoned = false;
			this.statues.shift()
		} 
	}
}

module.exports = Medusa;