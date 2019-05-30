class Werewolf {
	constructor (name, location){
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.isHungry = false;
	}

	change() {
		this.isHungry = true;
		if (this.wolf === true) {
			this.wolf = false;
			this.human = true;
			this.isHungry = false;
		} else {
			this.wolf = true;
			this.human = false;
		}
	}

	eat(victim) {
		this.isHungry = false;
		victim.alive = false;
		this.human = true;
		this.wolf = false;
	}
}

module.exports = Werewolf;