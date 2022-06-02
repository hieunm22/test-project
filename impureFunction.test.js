const utils = require("./impureFunction")
const fs = require("fs")

test("test generateOTP", () => {
	// 4 digits 
	expect(utils.generateOTP(4, 0.2549)).toBe("2549")
	expect(utils.generateOTP(4, 0.163)).toBe("1630")
	expect(utils.generateOTP(4, 0.74917)).toBe("7492")
	expect(utils.generateOTP(4, 0.48791)).toBe("4879")
	// expect(utils.generateOTP(4, 0.0256)).toBe("256")

	// 6 digits 
	expect(utils.generateOTP(6, 0.1496)).toBe("149600")
	expect(utils.generateOTP(6, 0.688452)).toBe("688452")
	// expect(utils.generateOTP(6, 0.01486)).toBe("014860")
	// expect(utils.generateOTP(6, 0.006)).toBe("006000")

	// expect(utils.generateOTP(10000).length).toBe(4)
})

test("test formatToday", () => {
	expect(utils.formatToday(new Date(1993, 10, 9))).toBe("1993-11-9")
	expect(utils.formatToday(new Date(2021, 6, 1))).toBe("2021-7-1")
	expect(utils.formatToday(new Date(2021, 1, 30))).toBe("2021-3-2")
	expect(utils.formatToday(new Date(2007, 7, 1))).toBe("2007-8-1")

	// expect(utils.formatToday()).toBe("2022-8-20")
})

test("test generateGuid", () => {
	// https://stackoverflow.com/questions/47230521/why-is-the-17th-digit-of-version-4-guids-limited-to-only-4-possibilities
	const generate = utils.generateGuid()
	expect(generate.length).toBe(36)
	expect(generate[14]).toBe("4")

	const generate19 = generate[19]
	const number19 = Number(`0x${generate19}`)
	expect(number19 >= 8).toBeTruthy()
	expect(number19 <= 11).toBeTruthy()
})

test("test impure function", async () => {
	const content = fs.readFileSync("yarn.lock", { encoding: "utf8" })
	expect(content.length).toBeGreaterThan(100)
})
