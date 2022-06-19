const utils = {
	generateOTP: (length, random = undefined) => {
		const rand = random === undefined ? Math.random() : random
		return Math.round(rand * Math.pow(10, length)).toString()
	},
	formatToday: (today = undefined) => {
		const td = today === undefined ? new Date() : today
		const dd = td.getDate()
		const mm = td.getMonth() + 1
		const yyyy = td.getFullYear()
		return `${yyyy}-${mm}-${dd}`
	},
	generateGuid: () => {
		// https://stackoverflow.com/questions/47230521/why-is-the-17th-digit-of-version-4-guids-limited-to-only-4-possibilities
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
			const r = (Math.random() * 16) | 0
			const v = c === "x" ? r : (r & 0x3) | 0x8
			return v.toString(16)
		})
	}
}

module.exports = utils
