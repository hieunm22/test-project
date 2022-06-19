const coverage = require("./coverageTest")

describe("test coverageIf", () => {
	it("cover top left branch", () => {
		expect(coverage.coverageIf(55, 5)).toBe("top left")
	})
	it("cover top right branch", () => {
		expect(coverage.coverageIf(18, 15)).toBe("top right")
	})
	it("cover bottom left branch", () => {
		expect(coverage.coverageIf(60, -50)).toBe("bottom left")
	})
	it("cover bottom right branch", () => {
		expect(coverage.coverageIf(25, -10)).toBe("bottom right")
	})
})

describe("test coverageFor", () => {
	it("test coverage for with zero loop", () => {
		expect(coverage.coverageFor(0)).toBe(0)
	})
	it("test coverage for with normal case", () => {
		expect(coverage.coverageFor(4)).toBe(6)
	})
	
})

describe("test coverageIfFor", () => {
	it("test coverage for with if condition and zero loop", () => {
		expect(coverage.coverageIfFor(0)).toBe(0)
	})
	it("test coverage for with if condition and no if condtions satisfy", () => {
		expect(coverage.coverageIfFor(2)).toBe(0)
	})
	it("test coverage for with if condition and at least one if condtion satisfy", () => {
		expect(coverage.coverageIfFor(6)).toBe(12)
	})
})
