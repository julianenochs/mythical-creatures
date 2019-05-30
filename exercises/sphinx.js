class Sphinx {
	constructor() {
		this.riddles = []
		this.heroesEaten = 0

	}

	collectRiddle(riddle) {
		this.riddles.push(riddle)
		if(this.riddles.length >=4) {
			this.riddles.shift()
		}
	}

	attemptAnswer(answer) {
		var start = this.riddles.length
		var checkedRiddles = this.riddles.filter(riddle => {
			return riddle.answer !== answer
		})
		this.riddles = checkedRiddles
		if(this.riddles.length === 0) {
			return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
		} else if(start !== this.riddles.length) {
			return 'That wasn\'t that hard, I bet you don\'t get the next one'
		} else {
			this.heroesEaten++
		}
	}
}

module.exports = Sphinx