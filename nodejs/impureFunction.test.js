const utils = require("./impureFunction")
const fs = require("fs")

describe("test generateOTP", () => {
  it("random number with length = 4", () => {
    expect(utils.generateOTP(4, 0.2549)).toEqual("2549")
  })
  it("random number with length = 4, last digit is 0", () => {
    expect(utils.generateOTP(4, 0.163)).toEqual("1630")
  })
  it("random number with length number of digits 5 digits after decimal seperator, and last digit >= 5", () => {
    expect(utils.generateOTP(4, 0.74917)).toEqual("7492")
  })
  it("random number with length = 4, value with 5 digits after decimal seperator, and last digit < 5", () => {
    expect(utils.generateOTP(4, 0.48791)).toEqual("4879")
  })
  it("random number with length < number of digits after decimal seperator", () => {
    expect(utils.generateOTP(4, 0.385949)).toEqual("3859")
  })
  // it("random number with length = 4, value < 0.01", () => {
  //   expect(utils.generateOTP(4, 0.0256)).toEqual("0256")
  // })
  // it("no random number, test the output's length", () => {
  //   expect(utils.generateOTP(4).length).toEqual(4)
  // })
})

describe("test formatToday", () => {
  it("date with month and day are normal", () => {
    expect(utils.formatToday(new Date(1993, 10, 9))).toEqual("1993-11-9")
  })
  it("date with day > number of month's total days", () => {
    expect(utils.formatToday(new Date(2021, 1, 30))).toEqual("2021-3-2")
  })
  it("date with day > number of month's total days, and it's december", () => {
    expect(utils.formatToday(new Date(2016, 11, 33))).toEqual("2017-1-2")
  })
  it("date and month are overate", () => {
    expect(utils.formatToday(new Date(2021, 16, 40))).toEqual("2022-6-9")
  })
  it("day is negative number", () => {
    expect(utils.formatToday(new Date(2021, 5, -13))).toEqual("2021-5-18")
  })
  it("month is negative number", () => {
    expect(utils.formatToday(new Date(2022, -5, 9))).toEqual("2021-8-9")
  })
  it("both day and month are negative number", () => {
    expect(utils.formatToday(new Date(2022, -3, -19))).toEqual("2021-9-11")
  })
})

describe("test generateGuid", () => {
	// https://stackoverflow.com/questions/47230521/why-is-the-17th-digit-of-version-4-guids-limited-to-only-4-possibilities
	let generate, generate19
  it("guid's length always be 36, including \"-\" character", () => {
		generate = utils.generateGuid()
		expect(generate.length).toBe(36)
  })

  it("the 17th digit is always 4", () => {
		expect(generate[14]).toBe("4")
  })

  it("the 22nd digit is always in set of (8,9,a,b)", () => {
		generate19 = generate[19]
		const number19 = Number(`0x${generate19}`)
		expect(number19 >= 8).toBeTruthy()
		expect(number19 <= 11).toBeTruthy()
  })
})

test("test impure function", async () => {
	const content = fs.readFileSync("package.json", { encoding: "utf8" })
	expect(content.length).toBeGreaterThan(200)
})
