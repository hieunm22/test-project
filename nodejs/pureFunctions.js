const pureFunctions = {
	displayCode: code => {
		if (code < 0 || code > 9) {
			throw new Error("Invalid code")			
		}
		if (code <= 3) {
			return "red"
		}
		else if (code <= 6) {
			return "green"
		}
		else {
			return "blue"
		}
	}
}

module.exports = pureFunctions
