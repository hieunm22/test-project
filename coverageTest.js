const coverage = {
	coverageIf: (x, y) => {
		let print = ""
		if (x + y > 20) {
			print = "top"
		} else {
			print = "bottom"
		}
		if (x > 50) {
			print += " left"
		} else {
			print += " right"
		}
		return print
	},
	coverageFor: x => {
		let sum = 0
		for (let i = 0; i < x; i++) {
			sum += i
		}

		return sum
	},
	coverageIfFor: x => {
		let sum = 0
		for (let i = 0; i < x; i++) {
			if (i >= 3) {
				sum += i
			}
		}
		return sum
	}
}

module.exports = coverage
