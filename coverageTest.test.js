const coverage = require("./coverageTest")

test("test coverageIf", () => {
	expect(coverage.coverageIf(55, 5)).toBe("top left")
	expect(coverage.coverageIf(18, 15)).toBe("top right")
	expect(coverage.coverageIf(60, -50)).toBe("bottom left")
	expect(coverage.coverageIf(25, -10)).toBe("bottom right")
})

test("test coverageFor", () => {
	expect(coverage.coverageFor(0)).toBe(0)
	expect(coverage.coverageFor(4)).toBe(6)
})

test("test coverageIfFor", () => {
	expect(coverage.coverageIfFor(0)).toBe(0)
	expect(coverage.coverageIfFor(2)).toBe(0)
	expect(coverage.coverageIfFor(6)).toBe(12)
})
