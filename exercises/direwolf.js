class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home || 'Beyond the Wall'
		this.size = size || 'Massive'
		this.starksToProtect = [];
		this.huntsWhiteWalkers = true;
	}

	protect (stark) {
		this.huntsWhiteWalkers = false;
		if (this.home === stark.location && this.starksToProtect.length < 2) {
			this.starksToProtect.push(stark)
			stark.safe = true;
		}
	}

	leave(stark) {
		if (stark.safe = true) {
			this.starksToProtect.pop()
			stark.safe = false;
		}
	}
}

module.exports = Direwolf;