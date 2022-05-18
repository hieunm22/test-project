const utils = require("./impureFunction")
const fs = require("fs")

test("test generateRandomNumber", () => {
	expect(utils.generateRandomNumber(10000, 0.2549)).toBe("2549")
	expect(utils.generateRandomNumber(10000, 0.163)).toBe("1630")
	expect(utils.generateRandomNumber(10000, 0.74917)).toBe("7492")
	expect(utils.generateRandomNumber(10000, 0.48791)).toBe("4879")
	expect(utils.generateRandomNumber(10000, 0.0256)).toBe("256")

	// expect(utils.generateRandomNumber(10000).length).toBe(4)
})

test("test formatToday", () => {
	expect(utils.formatToday(new Date(1993, 10, 9))).toBe("1993-11-9")
	expect(utils.formatToday(new Date(2021, 6, 1))).toBe("2021-7-1")
	expect(utils.formatToday(new Date(2021, 1, 30))).toBe("2021-3-2")
	expect(utils.formatToday(new Date(2007, 7, 1))).toBe("2007-8-1")

	// expect(utils.formatToday()).toBe("2022-8-20")
})

test("test generateGuid", () => {
	expect(utils.generateGuid("882fbbd7-5c49-44c7-9370-361ea73ca348"))
		.toBe("882fbbd7-5c49-44c7-9370-361ea73ca348")
	expect(utils.generateGuid("221a41e6-88d0-467a-aea7-0b9444dfbf14"))
		.toBe("221a41e6-88d0-467a-aea7-0b9444dfbf14")
	expect(utils.generateGuid("be6d3f73-1445-4466-945c-cdc27d874ded"))
		.toBe("be6d3f73-1445-4466-945c-cdc27d874ded")
	expect(utils.generateGuid("43ca601f-39a5-4298-bfd1-7a59d996e843"))
		.toBe("43ca601f-39a5-4298-bfd1-7a59d996e843")
	expect(utils.generateGuid("c55742ce-75aa-4882-a3d3-ae32a1860295"))
		.toBe("c55742ce-75aa-4882-a3d3-ae32a1860295")

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
